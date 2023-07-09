import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';

const CustomCarousel = ({ item }) => {
  return (
    <Carousel
     autoPlay={true}
     stopAutoPlayOnHover={true}
     interval={5000}
     animation='fade'
     indicators={false}
     navButtonsAlwaysVisible={true}
    >
      {item.map((item, index) => (
        <CarouselItem item={item} key={index} />
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
