import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductsComponents/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
//Import Swiper Styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './HomeTrending.css';
import {HiTrendingUp} from 'react-icons/hi'
import Axios from '../api/Axios';

const HomeTrending = () => {

  const [trending, SetTrending] = useState();
  useEffect(() => {
      window.scrollTo(0, 0);
      Axios.get("/products/search?searchTerm=watch").then((response)=>{
     SetTrending(response.data);
     

  })
  },[]);

  



  return (
    <div className="swiper__wrapper__trending">
        <h2>Trending Collections <HiTrendingUp/> </h2>
    <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={-300}
            slidesPerView={4}
            navigation
            breakpoints={{
              0:{
                slidesPerView:2,
                spaceBetween:250
              },
              200:{
                slidesPerView:2,
                spaceBetween:-40
              },
              300:{
                slidesPerView:2,
                spaceBetween:0
              },
              500:{
                slidesPerView:2,
                spaceBetween:0
              },
              700:{
                slidesPerView:3,
                spaceBetween:0
              },
              1000:{
                slidesPerView:4,
                spaceBetween:0
              },
              1200:{
                slidesPerView:5,
                spaceBetween:0
              }
            }}
        >
          {trending?.map((prod)=>(
              <SwiperSlide><ProductCard prod={prod} key={prod.id}/></SwiperSlide>
          ))}
        
        
    </Swiper>
    </div>
  )
}

export default HomeTrending