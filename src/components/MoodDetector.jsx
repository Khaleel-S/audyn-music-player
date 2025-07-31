// components/MoodDetector.jsx
/*
import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const MoodDetector = ({ onMoodDetected }) => {
  const videoRef = useRef(null);
  const [mood, setMood] = useState('');

  const loadModels = async () => {
    const MODEL_URL = '/models';
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ]);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => (videoRef.current.srcObject = stream))
      .catch((err) => console.error('Webcam error:', err));
  };

  useEffect(() => {
    loadModels().then(startVideo);

    videoRef.current?.addEventListener('play', () => {
      const interval = setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        if (detections.length > 0) {
          const exp = detections[0].expressions;
          const moodLabel = Object.keys(exp).reduce((a, b) => (exp[a] > exp[b] ? a : b));
          setMood(moodLabel);
          onMoodDetected(moodLabel);
        }
      }, 3000);
      return () => clearInterval(interval);
    });
  }, []);

  const emojiMap = {
    happy: '😊',
    sad: '😢',
    angry: '😠',
    surprised: '😲',
    disgusted: '🤢',
    fearful: '😱',
    neutral: '😐',
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted width="320" height="240" />
      <h3>
        Mood: {mood} {emojiMap[mood] || ''}
      </h3>
    </div>
  );
};

export default MoodDetector;*/

// src/components/MoodDetector.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios';

const MoodDetector = ({ onMoodDetected, isActive, onStop }) => {
  const videoRef = useRef(null);
  const [mood, setMood] = useState('');

  const loadModels = async () => {
    const MODEL_URL = '/models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error('Camera error:', err));
  };

  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    onStop?.();
  };

  const fetchSongsByMood = async (moodKeyword) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/search/songs?query=${moodKeyword}`);
      const songs = res.data?.data?.results || [];
      onMoodDetected?.(songs);
    } catch (error) {
      console.error('Mood-based song fetch failed:', error);
    }
  };

  useEffect(() => {
    if (isActive) {
      loadModels().then(startVideo);
    } else {
      stopVideo();
    }

    return stopVideo; // Cleanup on unmount
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(async () => {
      if (videoRef.current && !videoRef.current.paused) {
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const sorted = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
          const topExpression = sorted[0][0];

          if (topExpression !== mood) {
            setMood(topExpression);
            fetchSongsByMood(topExpression); // fetch songs
          }
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive, mood]);

  return (
    <div style={{ textAlign: 'center' }}>
      {isActive && (
        <>
          <video ref={videoRef} autoPlay muted width="300" height="200" />
          <p>Detected mood: <strong>{mood}</strong></p>
          <button onClick={stopVideo} style={{ marginTop: '10px', padding: '6px 12px' }}>
            🛑 Stop Mood Detection
          </button>
        </>
      )}
    </div>
  );
};

export default MoodDetector;
