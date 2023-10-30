import React from 'react'
import { Carousel } from 'react-bootstrap'
import './HomeSlider.css';
import Image1 from '../Images/Image1.png';
import Image2 from '../Images/Image2.jpg.png';
import Image3 from '../Images/Image3.jpg.png';
import Image4 from '../Images/Image4.jpg.png';


const HomeSlider = () => {


  
  return (
    <div className='wrapper'>
      <Carousel controls={false} indicators={true}>
        <Carousel.Item interval={2000} >
          <img  className="d-block" src={Image1} alt='1st'></img>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img  className="d-block" src={Image2} alt='' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img  className="d-block" src={Image3} alt='' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img  className="d-block" src={Image4} alt='' />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomeSlider