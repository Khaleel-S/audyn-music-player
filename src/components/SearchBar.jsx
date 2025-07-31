/*import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onResult }) => {
  const [query, setQuery] = useState("");

  const search = async () => {
    try {
      const res = await axios.get(`https://saavn.dev/api/search/songs?query=${query}`);
      onResult(res.data.data.results);
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Songs..."
        style={{ padding: "8px", width: "300px" }}
      />
      <button onClick={search} style={{ padding: "8px 16px", marginLeft: "10px" }}>Search</button>
    </div>
  );
};

export default SearchBar;*/


import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import axios from 'axios';

const SearchBar = ({ onResult }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await axios.get(`https://saavn.dev/api/search/songs?query=${query}`);
      onResult(res.data.data.results);
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search your favorite song..."
        fullWidth
        variant="outlined"
        sx={{
          maxWidth: 600,
          bgcolor: '#1f1f1f',
          input: {
            color: 'white',
            fontSize: '1.1rem',
            fontFamily: 'Kodchasan, sans-serif',
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            '& fieldset': {
              borderColor: '#555',
            },
            '&:hover fieldset': {
              borderColor: '#aaa',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f857a6',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#f857a6' }} />
            </InputAdornment>
          ),
        }}
      />
    </motion.div>
  );
};

export default SearchBar;
