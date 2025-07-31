// src/pages/LandingPage.js
/*import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <section style={styles.hero}>
        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.title}>Unlimited Music. Anytime. Anywhere.</h1>
          <p style={styles.subtitle}>Unlock millions of songs for free by joining us.</p>
          <button style={styles.cta}>Get Started</button>
        </motion.div>
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#0A0A0A',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Poppins', sans-serif",
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 20px',
    background: 'linear-gradient(to bottom right, #0F0C29, #302B63, #24243E)',
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  title: {
    fontSize: '3.4rem',
    fontWeight: '800',
    marginBottom: '24px',
    background: 'linear-gradient(to right, #00FFF0, #8F00FF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 15px rgba(0,0,0,0.6)',
  },
  subtitle: {
    fontSize: '1.3rem',
    marginBottom: '36px',
    color: '#CCCCDD',
    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
  },
  cta: {
    background: 'linear-gradient(to right, #00FFC3, #FF00D4)',
    color: '#0A0A0A',
    border: 'none',
    padding: '14px 34px',
    fontSize: '1rem',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: '700',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 0 12px rgba(255, 0, 212, 0.4)',
  },
};

export default LandingPage;*/

// src/pages/LandingPage.js
/*
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <section style={styles.hero}>
        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.title}>Stream Limitlessly with AUDYN</h1>
          <p style={styles.subtitle}>Discover, play and vibe with millions of tracks – all in one place.</p>
          <button style={styles.cta}>Get Started</button>
        </motion.div>
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#0A0A0A',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Poppins', sans-serif",
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '140px 20px',
    background: 'linear-gradient(to bottom right, #1a1a1a, #0f0f0f)',
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  title: {
    fontSize: '3.8rem',
    fontWeight: '900',
    marginBottom: '24px',
  //  background: 'linear-gradient(to right, #00F260, #0575E6)',
   // WebkitBackgroundClip: 'text',
   // WebkitTextFillColor: 'transparent',
    //textShadow: '0 0 18px rgba(0, 255, 200, 0.3)',
  },
  subtitle: {
    fontSize: '1.4rem',
    marginBottom: '36px',
    color: '#bbbbbb',
    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
  },
  cta: {
    background: 'linear-gradient(to right, #00FFF0, #FF00C8)',
    color: '#000',
    border: 'none',
    padding: '14px 38px',
    fontSize: '1.1rem',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: '700',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 0 18px rgba(255, 0, 212, 0.5)',
  },
};

export default LandingPage;
*/

// LandingPage.jsx
// src/pages/LandingPage.jsx
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, AppBar, Toolbar,Fade,Paper } from '@mui/material';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const LandingPage = () => {
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const blob3 = useRef(null);

  useEffect(() => {
    gsap.to(blob1.current, {
      x: 100,
      y: 80,
      scale: 1.1,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

    gsap.to(blob2.current, {
      x: -80,
      y: -100,
      scale: 1.3,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'power3.inOut'
    });

    gsap.to(blob3.current, {
      x: 50,
      y: -50,
      scale: 1.2,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <Box
      sx={{
        bgcolor: '#0e0e0e',
        color: '#fff',
        fontFamily: 'Kodchasan, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh'
      }}
    >

      {/* Background Animated Blobs */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
        <Box
          ref={blob1}
          sx={{
            width: 300,
            height: 300,
            background: 'radial-gradient(circle at 30% 30%, #ff0080, #7928ca)',
            filter: 'blur(140px)',
            position: 'absolute',
            borderRadius: '50%',
            top: '10%',
            left: '5%',
            opacity: 0.6,
          }}
        />
        <Box
          ref={blob2}
          sx={{
            width: 250,
            height: 250,
            background: 'radial-gradient(circle at 70% 50%, #00d4ff, #007cf0)',
            filter: 'blur(120px)',
            position: 'absolute',
            borderRadius: '50%',
            top: '40%',
            left: '60%',
            opacity: 0.5,
          }}
        />
        <Box
          ref={blob3}
          sx={{
            width: 200,
            height: 200,
            background: 'radial-gradient(circle at 40% 70%, #fcd34d, #f59e0b)',
            filter: 'blur(100px)',
            position: 'absolute',
            borderRadius: '50%',
            bottom: '10%',
            left: '30%',
            opacity: 0.4,
          }}
        />
      </Box>

      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', pt: 2, zIndex: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: 'Kodchasan' }}>AUDYN</Typography>
          <Box>
            <Button color="inherit" href="/Login">Login</Button>
            <Button variant="contained" sx={{ ml: 2, borderRadius: 5 }} href="/Signup">Signup</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          textAlign: 'center',
          zIndex: 1,
          position: 'relative'
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Music that Moves You
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mb: 4 }}>
          Stream your favorite tracks, discover new sounds, and enjoy premium listening with Audyn.
        </Typography>
        <Button variant="contained" size="large" href="/Login" sx={{ px: 5, py: 1.5, borderRadius: 5 }}>
          Get Started
        </Button>
      </Box>

      {/* Floating Card Message */}
       {/* Floating VPN Suggestion */}
      <Fade in timeout={1000}>
        <Paper
          elevation={6}
          sx={{
            position: 'fixed',
            bottom: 100,
            right: 30,
            bgcolor: '#1e1e1e',
            color: '#fff',
            px: 3,
            py: 2,
            borderRadius: 3,
            boxShadow: '0 4px 20px yellow',
            borderLeft: '4px solid black',
            maxWidth: 280,
          }}
        >
          <Typography variant="body1" fontWeight="medium">
            🔐 Tip: If songs don’t load, try using a VPN.
          </Typography>
        </Paper>
      </Fade>


      {/* Footer */}
      <Box sx={{ py: 4, borderTop: '1px solid #333', textAlign: 'center', zIndex: 1, position: 'relative' }}>
        <Typography variant="body2">© 2025 Audyn Music. All rights reserved.</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          For any queries, mail us: <a href="mailto:shaikkhaleelbasha005@gmail.com" style={{ color: '#90caf9' }}>shaikkhaleelbasha005@gmail.com</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
