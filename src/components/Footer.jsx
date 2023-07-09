import React from 'react';
import { Box, Button, Icon, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box display="flex" flexDirection="Column">
      <Button onClick={handleClick}>
        <ArrowUpwardIcon />
      </Button>
      <Box display="flex" justifyContent="center">
        <Typography variant="caption">Copyright 2023</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
