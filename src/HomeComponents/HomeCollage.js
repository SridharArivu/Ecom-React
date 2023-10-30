import React from 'react'
import './HomeCollage.css';
import collage3 from '../Images/Collage3.jpg.png'
import collage4 from '../Images/Collage4.png'
import collage1 from '../Images/Collage1.png'
import collage2 from '../Images/Collage2.png'

const HomeCollage = () => {



  return (
    <div className='collage__wrapper'>
      <div className='content1'>
        
        <img className='img1' src={collage1} alt="" />
      </div>
      <div className='content2'>
      <img className='img2' src={collage2} alt="" />
      
      </div>
      <div className='content3'>
      <img className='img3' src={collage3} alt="" />
          
      </div>
      <div className='content4'>
      <img className='img4' src={collage4} alt="" /> 
      </div>
     
    </div>
  )
}

export default HomeCollage