import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselImg = React.forwardRef((props, ref) => {
        return (<Carousel.Item className = {props.cls} interval={4000} ref = {ref}>
        <div className='bg'></div>
        <img className="d-block w-100"
             src= {process.env.PUBLIC_URL + props.img}
             alt="slide"
        />
    <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
        );
      });

export default CarouselImg