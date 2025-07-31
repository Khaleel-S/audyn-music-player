/*import React from 'react';

const Player = ({ song }) => {
  const audioSrc = song?.downloadUrl?.[4]?.url;

  if (!audioSrc) {
    return <div>No audio source available.</div>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Now Playing: {song.name}</h2>
      <p>{song.primaryArtists}</p>
      <audio controls autoPlay src={audioSrc} />
    </div>
  );
};

export default Player;*/import React, { useEffect } from 'react';
import { doc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';

const Player = ({ song }) => {
  const audioSrc = song?.downloadUrl?.[4]?.url;

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    const saveRecentlyPlayed = async () => {
      if (!user || !song || !song.name) return;

      try {
        const userRef = doc(db, 'users', user.uid);
        const recentRef = collection(userRef, 'recentlyPlayed');

        await addDoc(recentRef, {
          name: song.name,
          artist: song.primaryArtists || 'Unknown Artist',
          downloadUrl: audioSrc,
          timestamp: serverTimestamp(),
        });

        console.log("✅ Recently played saved");
      } catch (err) {
        console.error("❌ Error saving recently played:", err);
      }
    };

    saveRecentlyPlayed();
  }, [song]);

  if (!audioSrc) return <div>No audio source available.</div>;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Now Playing: {song.name}</h2>
      <p>{song.primaryArtists}</p>
      <audio controls autoPlay src={audioSrc} />
    </div>
  );
};

export default Player;
