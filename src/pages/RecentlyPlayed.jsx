import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

const RecentlyPlayed = () => {
  const [recentSongs, setRecentSongs] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        const recentRef = collection(db, 'users', user.uid, 'recentlyPlayed');
        const q = query(recentRef, orderBy('timestamp', 'desc'), limit(10));
        const snapshot = await getDocs(q);
        const songs = snapshot.docs.map(doc => doc.data());
        setRecentSongs(songs);
      } else {
        setRecentSongs([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Recently Played</h3>
      {recentSongs.length === 0 ? (
        <p>No recently played songs.</p>
      ) : (
        <ul>
          {recentSongs.map((song, index) => (
            <li key={index}>
              <strong>{song.name}</strong> - {song.artist}
              <br />
              <audio controls src={song.downloadUrl} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentlyPlayed;
