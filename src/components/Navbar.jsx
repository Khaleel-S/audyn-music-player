// src/components/Navbar.js
/*import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
         <span style={styles.brand}>AUDYN</span>
        <img src="/audyn.png" alt="Audyn Logo" style={styles.logo} />
      </div>
      <div style={styles.buttons}>
        <button style={styles.loginBtn}>Login</button>
        <button style={styles.signupBtn}>Sign Up</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    background: 'linear-gradient(90deg, #0f0c29, #302b63, #24243e)',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: "'Poppins', sans-serif"
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logo: {
    height: '45px'
  },
  brand: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#F72585', // Unique pink-magenta neon
    letterSpacing: '1px',
    textShadow: '0 0 5px rgba(255, 0, 255, 0.4)'
  },
  buttons: {
    display: 'flex',
    gap: '15px'
  },
  loginBtn: {
    padding: '10px 22px',
    borderRadius: '25px',
    border: '1px solid #fff',
    backgroundColor: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)'
  },
  signupBtn: {
    padding: '10px 22px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#F72585',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: '0 0 15px rgba(247, 37, 133, 0.6)'
  }
};

export default Navbar;*/

// src/components/Navbar.js
/*import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation

const Navbar = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <span style={styles.brand}>AUDYN</span>
      </div>
      <div style={styles.buttons}>
        <button style={styles.loginBtn} onClick={() => navigate('/login')}>
          Login
        </button>
        <button style={styles.signupBtn} onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    background: 'linear-gradient(90deg, #0F2027, #203A43, #2C5364)',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.7)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: "'Kodchasan', sans-serif"
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  brand: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#00D4FF',
    letterSpacing: '2px',
    textShadow: '0 0 10px rgba(0, 212, 255, 0.7)'
  },
  buttons: {
    display: 'flex',
    gap: '14px'
  },
  loginBtn: {
    padding: '10px 22px',
    borderRadius: '30px',
    border: '2px solid #00D4FF',
    backgroundColor: 'transparent',
    color: '#00D4FF',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    fontFamily: "'Poppins', sans-serif",
    backdropFilter: 'blur(6px)'
  },
  signupBtn: {
    padding: '10px 22px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: '#F72585',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(247, 37, 133, 0.6)'
  }
};

export default Navbar;*/
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <span style={styles.brand}>AUDYN</span>
      </div>
      <div style={styles.buttons}>
        <button style={styles.loginBtn} onClick={() => navigate('/login')}>Login</button>
        <button style={styles.signupBtn} onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 40px',
    background: 'rgba(20, 20, 20, 0.9)',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: "'Kodchasan', sans-serif"
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  brand: {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#00D4FF',
    letterSpacing: '2px',
    textShadow: '0 0 12px rgba(0, 212, 255, 0.8)',
    userSelect: 'none'
  },
  buttons: {
    display: 'flex',
    gap: '16px'
  },
  loginBtn: {
    padding: '10px 24px',
    borderRadius: '25px',
    border: '2px solid #00F0FF',
    backgroundColor: 'transparent',
    color: '#00F0FF',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    fontFamily: "'Poppins', sans-serif",
    backdropFilter: 'blur(6px)',
    textShadow: '0 0 6px rgba(0, 240, 255, 0.7)'
  },
  signupBtn: {
    padding: '10px 24px',
    borderRadius: '25px',
    border: 'none',
    background: 'linear-gradient(to right, #F72585, #7209B7)',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1rem',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(114, 9, 183, 0.6)',
  }
};

export default Navbar;
*/


//recently played add ka code

import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase'; // make sure this path is correct
import { doc, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Player = ({ song }) => {
  const audioSrc = song?.downloadUrl?.[4]?.url;

  // ⏺️ Save recently played when component mounts
  useEffect(() => {
    const saveRecentlyPlayed = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user || !song || !audioSrc) return;

      try {
        const userRef = doc(db, 'users', user.uid);
        const recentlyPlayedRef = collection(userRef, 'recentlyPlayed');
        await addDoc(recentlyPlayedRef, {
          name: song.name,
          artist: song.primaryArtists,
          image: song.image?.[2]?.link || '',
          songUrl: audioSrc,
          playedAt: serverTimestamp()
        });
      } catch (error) {
        console.error('Error saving recently played track:', error);
      }
    };

    saveRecentlyPlayed();
  }, [song, audioSrc]);

  if (!audioSrc) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>No audio source available.</div>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Now Playing: {song.name}</h2>
      <p>{song.primaryArtists}</p>
      <audio controls autoPlay src={audioSrc} />
    </div>
  );
};

export default Player;
