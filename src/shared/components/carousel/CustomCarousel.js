import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';

const CustomCarousel = ({ item }) => {
  return (
    <Carousel>
      {item.map((item, index) => (
        <CarouselItem item={item} key={index} />
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
