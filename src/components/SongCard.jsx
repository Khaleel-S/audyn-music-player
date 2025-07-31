/*import React from 'react';

const SongCard = ({ song, onPlay }) => {
  return (
    <div
      style={{
        width: '200px',
        padding: '10px',
        border: '1px solid gray',
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'center',
      }}
      onClick={onPlay}
    >
      <img
        src={song.image?.[2]?.link}
        alt={song.name}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h4>{song.name}</h4>
      <p style={{ fontSize: '14px', color: 'gray' }}>{song.primaryArtists}</p>
    </div>
  );
};

export default SongCard;*/

/*import React from 'react';

const SongCard = ({ song, onPlay }) => {
  const imageUrl = song.artists?.primary?.[0]?.image?.[2]?.url || "https://via.placeholder.com/200?text=No+Image";

  return (
    <div
      style={{
        width: '200px',
        padding: '10px',
        border: '1px solid gray',
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'center',
        background: '#fff',
        color: '#000',
      }}
      onClick={onPlay}
    >
      <img
        src={imageUrl}
        alt={song.name}
        style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }}
      />
      <h4 style={{ marginTop: '10px' }}>{song.name}</h4>
      <p style={{ fontSize: '14px', color: 'gray' }}>{song.primaryArtists}</p>
    </div>
  );
};

export default SongCard;*/
/*
import React from 'react';

const SongCard = ({ song, onPlay }) => {
  // Extract starring artists from song.artists.all
  const starringArtist = song.artists?.all?.find((a) => a.role === 'starring');

  // Use the 3rd image (500x500), fallback to placeholder if missing
  const imageUrl =
    starringArtist?.image?.[2]?.url || "https://via.placeholder.com/200?text=No+Image";

  return (
    <div
      style={{
        width: '200px',
        padding: '10px',
        border: '1px solid gray',
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'center',
        background: '#fff',
        color: '#000',
      }}
      onClick={onPlay}
    >
      <img
        src={imageUrl}
        alt={starringArtist?.name || song.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200?text=No+Image";
        }}
      />
      <h4 style={{ marginTop: '10px' }}>{song.name}</h4>
      <p style={{ fontSize: '14px', color: 'gray' }}>{starringArtist?.name || 'Unknown Actor'}</p>
    </div>
  );
};

export default SongCard;
*/
/*
import React from 'react';

const SongCard = ({ song, onPlay }) => {
  // Get starring artist
  const starringArtist = song.artists?.all?.find((a) => a.role === 'starring');

  // Prefer song image (500x500), fallback to artist image, then placeholder
  const imageUrl =
    song.image?.[2]?.url ||
    starringArtist?.image?.[2]?.url ||
    "https://via.placeholder.com/200?text=No+Image";

  return (
    <div
      style={{
        width: '200px',
        padding: '10px',
        border: '1px solid gray',
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'center',
        background: '#fff',
        color: '#000',
      }}
      onClick={onPlay}
    >
      <img
        src={imageUrl}
        alt={song.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200?text=No+Image";
        }}
      />
      <h4 style={{ marginTop: '10px' }}>{song.name}</h4>
      <p style={{ fontSize: '14px', color: 'gray' }}>
        {starringArtist?.name || 'Unknown Actor'}
      </p>
    </div>
  );
};

export default SongCard;*/


import React, { useState } from 'react';

const SongCard = ({ song }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Get starring artist and image
  const starringArtist = song.artists?.all?.find((a) => a.role === 'starring');
  const imageUrl =
    song.image?.[2]?.url || starringArtist?.image?.[2]?.url || "https://via.placeholder.com/200?text=No+Image";

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div
        style={{
          width: '200px',
          padding: '10px',
          border: '1px solid gray',
          borderRadius: '8px',
          cursor: 'pointer',
          textAlign: 'center',
          background: '#fff',
          color: '#000',
        }}
        onClick={handleCardClick}
      >
        <img
          src={imageUrl}
          alt={starringArtist?.name || song.name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/200?text=No+Image";
          }}
        />
        <h4 style={{ marginTop: '10px' }}>{song.name}</h4>
        <p style={{ fontSize: '14px', color: 'gray' }}>{starringArtist?.name || 'Unknown Actor'}</p>
      </div>

      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            width: '90%',
            maxWidth: '500px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'center',
          }}>
            // Close Button 
            <button
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              ×
            </button>

            //Image
            <img
              src={imageUrl}
              alt={song.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />

          // Details
            <h2 style={{ margin: '15px 0 5px' }}>{song.name}</h2>
            <p style={{ marginBottom: '10px', color: 'gray' }}>
              {starringArtist?.name || 'Unknown Actor'}
            </p>

          //Audio Player
            <audio controls style={{ width: '100%' }}>
              <source src={song.downloadUrl?.[4]?.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </>
  );
};

export default SongCard;

