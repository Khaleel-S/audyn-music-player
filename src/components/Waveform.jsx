// src/components/Waveform.js
import React from 'react';
import { motion } from 'framer-motion';

const barVariants = {
  animate: {
    scaleY: [1, 2.5, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Waveform = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '4px',
      alignItems: 'center',
      marginTop: '20px',
      height: '50px'
    }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          variants={barVariants}
          animate="animate"
          style={{
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to top, #ff6ec4, #7873f5)',
            borderRadius: '4px',
            transformOrigin: 'bottom center',
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default Waveform;
