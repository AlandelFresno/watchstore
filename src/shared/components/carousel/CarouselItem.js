import { Box, Typography } from '@mui/material';
import React from 'react';

const CarouselItem = ({ item }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="200px"
    >
      <Typography>{item.name}</Typography>
      <img />
    </Box>
  );
};

export default CarouselItem;
