/*import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { gsap } from 'gsap';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider, db, analytics } from '../firebase';
import '@fontsource/kodchasan';

const Login = () => {
  const containerRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power3.out',
    });

    gsap.to(".circle", {
      rotation: 360,
      repeat: -1,
      duration: 30,
      ease: "linear",
    });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Home'); // ✅ Redirect to home page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Kodchasan, sans-serif',
      }}
    >
      <Box className="circle" sx={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
        top: '10%',
        left: '5%',
      }} />
      <Box className="circle" sx={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.05), transparent)',
        bottom: '10%',
        right: '10%',
      }} />

      <Paper
        elevation={20}
        sx={{
          padding: 6,
          borderRadius: '25px',
          width: '90%',
          maxWidth: '420px',
          background: 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
      >
        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <MusicNoteIcon color="secondary" />
          <Typography variant="h4" fontWeight="bold" color="white">
            Audyn Login
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            input: { color: 'white' },
            label: { color: '#aaa' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#555',
              },
              '&:hover fieldset': {
                borderColor: '#888',
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            input: { color: 'white' },
            label: { color: '#aaa' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#555',
              },
              '&:hover fieldset': {
                borderColor: '#888',
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end" sx={{ color: 'white' }}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          endIcon={<LoginIcon />}
          onClick={handleLogin}
          sx={{
            mt: 3,
            py: 1.5,
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            borderRadius: '50px',
            boxShadow: '0 0 20px #0072ff88',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 0 25px #00c6ffcc',
            },
          }}
        >
          Log In
        </Button>

        <Typography variant="body2" color="gray" mt={3} textAlign="center">
          Don't have an account? <a href="/signup" style={{ color: '#00c6ff', textDecoration: 'none' }}>Sign Up</a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;*/

/*
import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider, db, analytics } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/style.css'; // adjust the path as needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/Home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-background">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-icon">
            <img src="/dream.png" alt="Login icon" />
          </div>

          <h2 className="auth-title">Welcome back! 😊</h2>
          <p className="auth-subtext">
            Enjoy the Unlimited music...          
          </p>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="primary-button" onClick={handleEmailLogin}>
            Get Started
          </button>

          <div className="divider-text">or</div>

          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <img
              src="https://img.icons8.com/color/20/google-logo.png"
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button>

          <p className="auth-footer">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/
/*
import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert('Please verify your email before logging in.');
        await signOut(auth);
        return;
      }

      navigate('/Home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      navigate('/Home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-background">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-icon">
            <img src="/dream.png" alt="Login icon" />
          </div>

          <h2 className="auth-title">Welcome back! 😊</h2>
          <p className="auth-subtext">Timeless communication, one step away</p>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="primary-button" onClick={handleEmailLogin}>
           Enter the Realm	
          </button>

          <div className="divider-text">or</div>

          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <img
              src="https://img.icons8.com/color/20/google-logo.png"
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button>

          <p className="auth-footer">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/
/*without forgot pwd
import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider, db } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert('Please verify your email before logging in.');
        await signOut(auth);
        return;
      }

      checkPayment(user.uid);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      checkPayment(user.uid);
    } catch (error) {
      alert(error.message);
    }
  };

  const checkPayment = async (uid) => {
    const userDoc = await getDoc(doc(db, 'users', uid));

    if (userDoc.exists() && userDoc.data().hasPaid) {
      navigate('/Home');
    } else {
      navigate('/payment');
    }
  };

  return (
    <div className="auth-background">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-icon">
            <img src="/comlogo.png" alt="Login icon" />
          </div>

          <h2 className="auth-title">Welcome back! 😊</h2>
          <p className="auth-subtext">Timeless communication, one step away</p>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="primary-button" onClick={handleEmailLogin}>
            Enter the Realm
          </button>

          <div className="divider-text">or</div>

          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <img
              src="https://img.icons8.com/color/20/google-logo.png"
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button>

          <p className="auth-footer">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/

//forgot pwd

import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { auth, provider, db } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert('Please verify your email before logging in.');
        await signOut(auth);
        return;
      }

      checkPayment(user.uid);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      checkPayment(user.uid);
    } catch (error) {
      alert(error.message);
    }
  };

  const checkPayment = async (uid) => {
    const userDoc = await getDoc(doc(db, 'users', uid));

    if (userDoc.exists() && userDoc.data().hasPaid) {
      navigate('/Home');
    } else {
      navigate('/payment');
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      alert('Please enter your email address first.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent. Please check your inbox.');
    } catch (error) {
      alert('Error sending reset email: ' + error.message);
    }
  };

  return (
    <div className="auth-background">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-icon">
            <img src="/comlogo.png" alt="Login icon" />
          </div>

          <h2 className="auth-title">Welcome back! 😊</h2>
          <p className="auth-subtext">Timeless communication, one step away</p>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="forgot-password-text">
            <button onClick={handleResetPassword} className="forgot-password-btn">
              Forgot Password?
            </button>
          </p>

          <button className="primary-button" onClick={handleEmailLogin}>
            Enter the Realm
          </button>

          <div className="divider-text">or</div>

          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <img
              src="https://img.icons8.com/color/20/google-logo.png"
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button>

          <p className="auth-footer">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
