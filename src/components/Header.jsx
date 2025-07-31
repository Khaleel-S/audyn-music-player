// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="/audyn.png" alt="Audyn Logo" style={styles.logo} />
        <h1 style={styles.title}>Audyn</h1>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1e1e2f',
    padding: '15px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 999
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  logo: {
    height: '50px',
    width: 'auto'
  },
  title: {
    fontSize: '1.8rem',
    color: '#00ffcc',
    fontWeight: '600',
    letterSpacing: '2px',
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }
};

export default Header;
