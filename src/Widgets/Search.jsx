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
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
