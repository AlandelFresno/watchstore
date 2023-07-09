import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CarouselItem = ({ item }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <img
        src={`/assets/img/carousel/${item.id}.jpg`}
        style={{ objectFit: 'fill', height: '400px', width: 'auto' }}
      />
    </Box>
  );
};

export default CarouselItem;
