
import React,{useState,useEffect} from 'react'
import ProductCard from '../ProductsComponents/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
//Import Swiper Styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './HomeBestSellers.css';
import Axios from '../api/Axios';
import {LiaHotjar} from 'react-icons/lia'
import SkeletonLoading from '../ProductsComponents/SkeletonLoading'

const HomeBestSellers = () => {

  const [bestSeller, SetBestSeller] = useState();
  const [isLoading, SetIsLoading] = useState(true);
  useEffect(() => {
      window.scrollTo(0, 0);
      Axios.get("/products/search?searchTerm=bestseller").then((response)=>{
      SetBestSeller(response.data);
      SetIsLoading(false);
      
  })
  },[]);

  

  return (
    <> 
    <div className="swiper__wrapper__bestSeller">
        <h2>Best Sellers <LiaHotjar/> </h2>
    <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={-300}
            slidesPerView={4}
        
            navigation
            breakpoints={{
              0:{
                slidesPerView:1,
                spaceBetween:250
              },
              200:{
                slidesPerView:1,
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
        {isLoading ? <div className='skeleton__wrapper'><SkeletonLoading/> <SkeletonLoading/> <SkeletonLoading/></div>
        :
        bestSeller?.map((prod)=>(
          <SwiperSlide><ProductCard prod={prod} key={prod.id}/></SwiperSlide>
      ))
        }
        
        
    </Swiper>
    </div>
    </>
  )
}

export default HomeBestSellers