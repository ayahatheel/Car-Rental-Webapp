import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        label="البحث"
        variant="outlined"
        placeholder="ابحث هنا..."
        value={searchQuery}
        onChange={handleInputChange}
        fullWidth
        sx={{ borderRadius: '25px' }} // Round corners
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ color: 'black', mr: 2, borderRadius: '25px' }} // Round corners
        onClick={handleSearch}
      >
        تسجيل الدخول
      </Button>
    </Box>
  );
};

export default Search;
