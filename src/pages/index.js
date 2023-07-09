import React from 'react';

import { Button, Box, Typography, Grid } from '@mui/material';
import Homepagebanner from '@/components/HomepageBanner';
import CustomCarousel from '@/shared/components/carousel/CustomCarousel';

const Home = () => {
  return (
    <>
      <Grid container spacing={0} sx={{ flexGrow: 2 }}>
        <Grid item xs={12}>
          <Homepagebanner></Homepagebanner>
        </Grid>

        <Grid item xs={12}>
          <Box bgcolor="red">box2</Box>
        </Grid>

        <Grid item xs={2}>
          <Box bgcolor="cyan">box3</Box>
        </Grid>

        <Grid item xs={4}>
          <Box bgcolor="green">box3</Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Typography variant="h2">Welcome to Focus</Typography>
        <h2>Welcome to Focus</h2>
      </Box>
      <CustomCarousel item={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]} />
    </>
  );
};
export default Home;
