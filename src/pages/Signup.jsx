/*import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.form}>
        <h2 style={styles.title}>Create an Audyn Account</h2>
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button style={styles.button} type="submit">Sign Up</button>
        <p style={styles.redirect}>Already have an account? <Link to="/login" style={styles.link}>Login</Link></p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif"
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    width: '360px',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#203A43'
  },
  input: {
    marginBottom: '16px',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '12px',
    backgroundColor: '#F72585',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  redirect: {
    marginTop: '16px',
    textAlign: 'center',
    color: '#333'
  },
  link: {
    color: '#00D4FF',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default Signup;*//*
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/style.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: username,
      });
      navigate('/Login');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/Login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-background">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-icon">
            <img src="/dream.png" alt="Signup icon" />
          </div>

          <h2 className="auth-title">Create your account 🚀</h2>
          <p className="auth-subtext">Join the timeless conversations</p>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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

          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="primary-button" onClick={handleSignup}>
            Sign Up
          </button>

          <div className="divider-text">or</div>

          <button className="google-login-btn" onClick={handleGoogleSignup}>
            <img
              src="https://img.icons8.com/color/20/google-logo.png"
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;*/




/*
import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleEmailSignUp = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert('Verification email sent! Please check your inbox.');
      navigate('/Login');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/Login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='auth-background'>
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">
          <img src="/dream.png" alt="Sign Up icon" />
        </div>

        <h2 className="auth-title">Create your account</h2>
        <p className="auth-subtext">Sign up to leave messages for your future self.</p>

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

        <button className="primary-button" onClick={handleEmailSignUp} disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up with Email'}
        </button>

        <div className="divider-text">or</div>

        <button className="google-login-btn" onClick={handleGoogleSignUp}>
          <img
            src="https://img.icons8.com/color/20/google-logo.png"
            alt="Google"
            className="google-icon"
          />
          Continue with Google
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
*/




import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  sendEmailVerification
} from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/style.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });

      // ✅ Send email verification
      await sendEmailVerification(userCredential.user);

      alert('Signup successful! Please verify your email before logging in.');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
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
            <img src="/comlogo.png" alt="Signup icon" />
          </div>

          <h2 className="auth-title">Create Account ✨</h2>
          <p className="auth-subtext">Join timeless communication now</p>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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

          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="primary-button" onClick={handleEmailSignup}>
            Get Started
          </button>

          <div className="divider-text">or</div>

          <button className="google-login-btn" onClick={handleGoogleSignup}>
            <img
              src="https://img.icons8.com/color/20/google-logo.png"
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

