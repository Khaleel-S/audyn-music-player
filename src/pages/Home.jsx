/*import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';

import axios from 'axios';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>SK</h1>
      <SearchBar onResult={setSongs} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px", justifyContent: "center" }}>
        {songs.map(song => (
          <SongCard key={song.id} song={song} onPlay={() => fetchFullSong(song.id)} />
        ))}
      </div>
      {currentSong && <Player song={currentSong} />}
    </div>
  );
};

export default Home;*/

/*import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import axios from 'axios';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎵 SK Music Player</h1>
      <SearchBar onResult={setSongs} />
      <div style={styles.songList}>
        {songs.map(song => (
          <SongCard
            key={song.id}
            song={song}
            onPlay={() => fetchFullSong(song.id)}
          />
        ))}
      </div>
      {currentSong && <Player song={currentSong} />}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(to bottom, #1e1e2f, #2d2d44)",
    minHeight: "100vh",
    color: "#fff"
  },
  title: {
    textAlign: "center",
    fontSize: "2.8rem",
    color: "#00ffcc",
    marginBottom: "30px",
    letterSpacing: "2px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px #000000"
  },
  songList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "stretch"
  }
};

export default Home;*/
/*
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import axios from 'axios';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🎵 SK Music Player</h1>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <SearchBar onResult={setSongs} />
      <div style={styles.songList}>
        {songs.map(song => (
          <SongCard
            key={song.id}
            song={song}
            onPlay={() => fetchFullSong(song.id)}
          />
        ))}
      </div>
      {currentSong && <Player song={currentSong} />}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(to bottom, #1e1e2f, #2d2d44)",
    minHeight: "100vh",
    color: "#fff",
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  title: {
    fontSize: "2.8rem",
    color: "#00ffcc",
    letterSpacing: "2px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px #000000"
  },
  logoutBtn: {
    padding: "10px 18px",
    backgroundColor: "#ff4b5c",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(255, 75, 92, 0.5)",
    transition: "all 0.3s ease-in-out",
  },
  songList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "stretch"
  }
};

export default Home;*/

/* correct code
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import axios from 'axios';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🎵 SK Music Player</h1>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {!currentSong && <SearchBar onResult={setSongs} />}

      {!currentSong && (
        <div style={styles.songList}>
          {songs.map(song => (
            <SongCard
              key={song.id}
              song={song}
              onPlay={() => fetchFullSong(song.id)}
            />
          ))}
        </div>
      )}

      {currentSong && (
        <div style={styles.playerWrapper}>
          <Player song={currentSong} onBack={() => setCurrentSong(null)} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
    minHeight: "100vh",
    color: "#fff",
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  title: {
    fontSize: "2.8rem",
    color: "#00f7ff",
    letterSpacing: "2px",
    fontWeight: "bold",
    textShadow: "2px 2px 6px #000000"
  },
  logoutBtn: {
    padding: "10px 18px",
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(230, 57, 70, 0.5)",
    transition: "all 0.3s ease-in-out",
  },
  songList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "stretch"
  },
  playerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    animation: "fadeIn 0.5s ease-in"
  }
};

export default Home;
*/
/*
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import axios from 'axios';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [userName, setUserName] = useState('');
  const [searched, setSearched] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const emailPrefix = user.email.split('@')[0];
        setUserName(emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1));
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  const handleSearch = (results) => {
    setSongs(results);
    setSearched(true);
  };

  return (
    <div style={styles.container}>
   
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeSlideIn {
            0% { transform: translateY(-20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>

      <div style={styles.header}>
        <h1 style={styles.title}>AUDYN</h1>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {!currentSong && (
        <>
          <h2 style={styles.welcome}>Welcome, {userName} 👋</h2>

          <div style={styles.searchWrapper}>
            <SearchBar onResult={handleSearch} />
          </div>

          {searched && (
            <div style={styles.songList}>
              {songs.map(song => (
                <SongCard
                  key={song.id}
                  song={song}
                  onPlay={() => fetchFullSong(song.id)}
                />
              ))}
            </div>
          )}
        </>
      )}

      {currentSong && (
        <div style={styles.playerWrapper}>
          <Player song={currentSong} onBack={() => setCurrentSong(null)} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
    minHeight: "100vh",
    color: "#fff",
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.6rem",
    color: "#00f7ff",
    fontWeight: "bold",
    textShadow: "2px 2px 6px #000000",
  },
  logoutBtn: {
    padding: "10px 18px",
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(230, 57, 70, 0.5)",
    transition: "transform 0.3s ease-in-out",
  },
  welcome: {
    fontSize: "1.8rem",
    textAlign: "center",
    marginBottom: "10px",
    color: "#00f7ff",
    animation: "fadeIn 1s ease-in-out",
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeSlideIn 1s ease",
    marginBottom: "30px",
  },
  songList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
    justifyContent: "center",
    alignItems: "stretch",
    padding: "0 10px",
  },
  playerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    animation: "fadeIn 0.5s ease-in"
  },
};

export default Home;*/
/*
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import axios from 'axios';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, InputAdornment, Fade, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setTimeout(() => setShowSearch(true), 1000);
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  const handleSearchResults = (results) => {
    setSongs(results);
    setSearched(true);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0e0e0e',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: 'Kodchasan, sans-serif',
        px: 2,
        pt: 4,
      }}
    >
   
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00f7ff, #7928ca)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AUDYN
        </Typography>
        <Button
          onClick={handleLogout}
          sx={{
            backgroundColor: '#e63946',
            color: 'white',
            borderRadius: '25px',
            px: 3,
            py: 1,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#d62839' },
          }}
        >
          Logout
        </Button>
      </Box>

     
      {user && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: 4,
              mb: 4,
              fontWeight: 600,
              textAlign: 'center',
              background: 'linear-gradient(90deg, #f857a6, #ff5858)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome, {user.displayName || 'Music Lover'} 🎧
          </Typography>
        </motion.div>
      )}

      {showSearch && (
        <Fade in={showSearch} timeout={1000}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%', maxWidth: 600 }}
          >
            <SearchBar onResult={handleSearchResults} />
          </motion.div>
        </Fade>
      )}

      {!currentSong && searched && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 3,
            mt: 5,
            width: '100%',
            px: 2,
          }}
        >
          {songs.map((song) => (
            <SongCard key={song.id} song={song} onPlay={() => fetchFullSong(song.id)} />
          ))}
        </Box>
      )}

      {currentSong && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            mt: 4,
            width: '100%',
          }}
        >
          <Player song={currentSong} onBack={() => setCurrentSong(null)} />
        </Box>
      )}
    </Box>
  );
};

export default Home;*/

/*
import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Button } from '@mui/material';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import axios from 'axios';
import { motion } from 'framer-motion';
import RecentlyPlayed from '../pages/RecentlyPlayed';


const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [user, setUser] = useState(null);
  const [searched, setSearched] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setTimeout(() => setShowSearch(true), 1000);
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearchResults = (results) => {
    setSongs(results);
    setSearched(true);
  };

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0e0e0e',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Kodchasan, sans-serif',
        px: 2,
        pt: 4,
      }}
    >
      
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Typography
  variant="h4"
  sx={{
    fontWeight: 'bold',
    fontFamily: 'Kodchasan, sans-serif', // ✅ enforce font here
    background: 'linear-gradient(90deg, #00f7ff, #7928ca)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  AUDYN
</Typography>

        <Button
          onClick={handleLogout}
          sx={{
            backgroundColor: '#e63946',
            color: 'white',
            borderRadius: '25px',
            px: 3,
            py: 1,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#d62839' },
          }}
        >
          Logout
        </Button>
      </Box>

  
      {user && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: 4,
              mb: 4,
              fontWeight: 600,
              textAlign: 'center',
              background: 'linear-gradient(90deg, #f857a6, #ff5858)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome, {user.displayName || 'Music Lover'} 🎧
          </Typography>
        </motion.div>
      )}

      {showSearch && (
        <Fade in={showSearch} timeout={1000}>
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <SearchBar onResult={handleSearchResults} />
          </Box>
        </Fade>
      )}

      {!currentSong && searched && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 3,
            mt: 5,
            width: '100%',
            px: 2,
          }}
        >
          {songs.map((song) => (
            <SongCard key={song.id} song={song} onPlay={() => fetchFullSong(song.id)} />
          ))}
        </Box>
      )}

      

      {currentSong && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            mt: 4,
            width: '100%',
          }}
        >
          <Player song={currentSong} onBack={() => setCurrentSong(null)} />
        </Box>
      )}
    </Box>
  );
};

export default Home;*/

//mood detector
/*
import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Button } from '@mui/material';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import axios from 'axios';
import { motion } from 'framer-motion';
import MoodDetector from '../components/MoodDetector';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [user, setUser] = useState(null);
  const [searched, setSearched] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [moodMode, setMoodMode] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setTimeout(() => setShowSearch(true), 1000);
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearchResults = (results) => {
    setSongs(results);
    setSearched(true);
  };

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  const handleMoodPlay = () => {
    setMoodMode(true);
    setSearched(false);
    setSongs([]);
  };

  const handleMoodStop = () => {
    setMoodMode(false);
    setSongs([]);
    setSearched(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0e0e0e',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Kodchasan, sans-serif',
        px: 2,
        pt: 4,
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00f7ff, #7928ca)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AUDYN
        </Typography>

        <Button
          onClick={handleLogout}
          sx={{
            backgroundColor: '#e63946',
            color: 'white',
            borderRadius: '25px',
            px: 3,
            py: 1,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#d62839' },
          }}
        >
          Logout
        </Button>
      </Box>

      {user && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: 4,
              mb: 4,
              fontWeight: 600,
              textAlign: 'center',
              background: 'linear-gradient(90deg, #f857a6, #ff5858)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome, {user.displayName || 'Music Lover'} 🎧
          </Typography>
        </motion.div>
      )}

      {!moodMode && (
        <Fade in timeout={1000}>
          <Button
            variant="contained"
            onClick={handleMoodPlay}
            sx={{
              backgroundColor: '#5a189a',
              color: 'white',
              borderRadius: '25px',
              px: 4,
              py: 1.5,
              mt: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              '&:hover': { backgroundColor: '#7b2cbf' },
            }}
          >
            Let Audyn play songs based on your mood 🧠🎶
          </Button>
        </Fade>
      )}

      {showSearch && !moodMode && (
        <Fade in timeout={1000}>
          <Box sx={{ width: '100%', maxWidth: 600, mt: 3 }}>
            <SearchBar onResult={handleSearchResults} />
          </Box>
        </Fade>
      )}

      {moodMode && (
        <Box mt={4} sx={{ width: '100%' }}>
          <MoodDetector
            isActive={moodMode}
            onMoodDetected={handleSearchResults}
            onStop={handleMoodStop}
          />
        </Box>
      )}

      {!currentSong && searched && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 3,
            mt: 5,
            width: '100%',
            px: 2,
          }}
        >
          {songs.map((song) => (
            <SongCard key={song.id} song={song} onPlay={() => fetchFullSong(song.id)} />
          ))}
        </Box>
      )}

      {currentSong && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            mt: 4,
            width: '100%',
          }}
        >
          <Player song={currentSong} onBack={() => setCurrentSong(null)} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
*/

import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Button } from '@mui/material';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import axios from 'axios';
import { motion } from 'framer-motion';
import MoodDetector from '../components/MoodDetector';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [showMoodDetector, setShowMoodDetector] = useState(false);

  const [currentSong, setCurrentSong] = useState(null);
  const [user, setUser] = useState(null);
  const [searched, setSearched] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [moodMode, setMoodMode] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();
  const handleMoodDetection = () => {
  setShowMoodDetector(true);
};


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setTimeout(() => setShowSearch(true), 1000);
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearchResults = (results) => {
    const parsedSongs = Array.isArray(results)
      ? results
      : results && typeof results === 'object'
      ? Object.values(results)
      : [];

    setSongs(parsedSongs);
    setSearched(true);
  };

  const fetchFullSong = async (id) => {
    try {
      const res = await axios.get(`https://saavn.dev/api/songs/${id}`);
      setCurrentSong(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching full song details", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  const handleMoodPlay = () => {
    setMoodMode(true);
    setSearched(false);
    setSongs([]);
  };

  const handleMoodStop = () => {
    setMoodMode(false);
    setSongs([]);
    setSearched(false);
  };

  const handleMoodDetected = (results) => {
    console.log("Mood-based search results:", results);
    handleSearchResults(results);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0e0e0e',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Kodchasan, sans-serif',
        px: 2,
        pt: 4,
      }}
    >
      {/* Top Bar */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00f7ff, #7928ca)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
              fontFamily: 'Kodchasan, sans-serif',
    fontWeight: 'bold',
          }}
        >
          AUDYN
        </Typography>

        <Button
          onClick={handleLogout}
          sx={{
            backgroundColor: '#e63946',
            color: 'white',
            borderRadius: '25px',
            px: 3,
            py: 1,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#d62839' },
          }}
        >
          Logout
        </Button>
      </Box>

      {/* Welcome Text */}
      {user && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: 4,
              mb: 4,
              fontWeight: 600,
              textAlign: 'center',
              background: 'linear-gradient(90deg, #f857a6, #ff5858)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome, {user.displayName || 'Music Lover'} 🎧
          </Typography>
        </motion.div>
      )}

      {/* Mood Button */}
{!moodMode && (
  <Fade in timeout={1000}>
   <Button
  onClick={handleMoodPlay}
  sx={{
    mt: 4,
    px: 4,
    py: 1.5,
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    background: 'linear-gradient(135deg, #ff4ecd, #6c5ce7)',
    color: '#fff',
    boxShadow: '0 4px 20px rgba(255, 78, 205, 0.4)',
    transition: 'all 0.4s ease',
    textTransform: 'none',
    '&:hover': {
      background: 'linear-gradient(135deg, #6c5ce7, #ff4ecd)',
      boxShadow: '0 6px 30px rgba(108, 92, 231, 0.6)',
      transform: 'scale(1.05)',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  }}
>
  🎵 Let Audyn Play the Songs based on your mood
</Button>

  </Fade>
)}


      {/* Search Bar */}
      {showSearch && !moodMode && (
        <Fade in timeout={1000}>
          <Box sx={{ width: '100%', maxWidth: 600, mt: 3 }}>
            <SearchBar onResult={handleSearchResults} />
          </Box>
        </Fade>
      )}

      {/* MoodDetector */}
      {moodMode && (
        <Box mt={4} sx={{ width: '100%' }}>
          <MoodDetector
            isActive={moodMode}
            onMoodDetected={handleMoodDetected}
            onStop={handleMoodStop}
          />
        </Box>
      )}

      {/* Song Grid */}
      {!currentSong && searched && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 3,
            mt: 5,
            width: '100%',
            px: 2,
          }}
        >
          {songs.map((song) => (
            <SongCard key={song.id} song={song} onPlay={() => fetchFullSong(song.id)} />
          ))}
        </Box>
      )}

      {/* Player */}
      {currentSong && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            mt: 4,
            width: '100%',
          }}
        >
          <Player song={currentSong} onBack={() => setCurrentSong(null)} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
