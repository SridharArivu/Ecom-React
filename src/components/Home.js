import React from 'react'
import './Home.css'
import HomeSlider from '../HomeComponents/HomeSlider'
import HomeCollage from '../HomeComponents/HomeCollage'
import HomeBestSellers from '../HomeComponents/HomeBestSellers'
import HomeTrending from '../HomeComponents/HomeTrending'

const Home = ({products}) => {
  return (
    <div className='Home__components'>
      <HomeSlider />
      <HomeCollage/>
      <HomeTrending />
      <HomeBestSellers /> 
    </div>
  )
}

export default Home

