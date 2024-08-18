import React, { useContext } from 'react';
import { Button, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { CarContext } from '../components/CarContext';

const categories = [
  { name: 'جميع السيارات' }, // "All Cars" button
  { name: 'سيارات رياضية' },
  { name: 'سيارات فخمة' },
  { name: 'سيارات كهربائية' },
  { name: 'سيارات مدمجة' },
  { name: 'سيارات سيدان' },
  { name: 'سيارات صغيرة' },      
];

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  margin: '0 5px',
  padding: '10px 20px',
  fontWeight: 'bold',
  textTransform: 'none',
  transition: 'border-radius 0.3s ease, border-color 0.7s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: 'red',
    borderRadius: '15px',
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.background.paper,
    borderColor: 'red',
    color: 'red',
    borderRadius: '15px',
  },
  '@media (max-width: 768px)': {
    minWidth: '120px',
    padding: '10px 15px',
    fontSize: '0.7rem',
  },
  '@media (max-width: 480px)': {
    minWidth: '160px',
    padding: '10px 20px',
    fontSize: '0.7rem',
  },
}));

const Categories = () => {
  const theme = useTheme();
  const { selectedCategory, setSelectedCategory } = useContext(CarContext);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div style={{ overflowX: 'auto', padding: '20px', whiteSpace: 'nowrap', textAlign: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        {categories.map(({ name }) => (
          <StyledButton
            key={name}
            onClick={() => handleCategoryClick(name)}
            className={selectedCategory === name ? 'Mui-selected' : ''}
            theme={theme}
          >
            {name}
          </StyledButton>
        ))}
      </div>
    </div>
  );
};

export default Categories;
