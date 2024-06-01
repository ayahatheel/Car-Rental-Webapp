import React, { useState } from 'react';
import { Button, ButtonGroup, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const categories = [
    { name: 'سيارات الرياضية' },
    { name: 'سيارات الفخامة' },
    { name: 'سيارات كهربائية' },
    { name: 'سيارات مدمجة' },
    { name: 'سيارات سيدان' },
    { name: 'سيارات صغيرة' },
  ];
  
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#E6E7EC', 
  color: '#000', 
  border: '1px solid #E6E7EC',
  borderRadius: '10px', 
  margin: '0 5px',
  padding: '10px 40px',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#c0c0c0',
  },
  '&.Mui-selected': {
    backgroundColor: '#fff', 
    borderColor: 'red', 
    color: 'red', 
  },
}));

const Categories = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState('Sport Cars');

  const handleCategoryClick = (categoryName) => {
    setSelected(categoryName);
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '20px',
      }}
    >
      {categories.map(({ name }) => (
        <StyledButton
          key={name}
          onClick={() => handleCategoryClick(name)}
          className={selected === name ? 'Mui-selected' : ''}
          theme={theme}
        >
          {name}
        </StyledButton>
      ))}
    </ButtonGroup>
  );
};

export default Categories;
