import React from 'react'
import './ProductFilter.css';
import {FaStar,FaRegStar} from 'react-icons/fa'
import {BiChevronDown} from 'react-icons/bi'
import {LiaRupeeSignSolid} from 'react-icons/lia'


const ProductFilters = () => {
  return (
    <div className='Filter__wrapper'>
        <div className='Filter__Category'> 
        <span className='Filter__title'>Category</span>

            <p>Casual Shirts</p>
            <p>Formal Shirts</p>
        </div>

        <div className='Filter__Review'> 
        <span className='Filter__title'>Review</span>

            <p style={{color:'orange'}}><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
            <p style={{color:'orange'}}><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></p>
            <p style={{color:'orange'}}><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>
            <p style={{color:'orange'}}><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>
        </div>

        <div className='Filter__Brand'> 
          <span className='Filter__title'>Brand</span>

            <p>Van heusen</p>
            <p>Allen Solly</p>
            <p>Peter England</p>
            <p>U.S. POLO ASSN.</p>
            <p style={{color:'#007195'}}><BiChevronDown size={20}/>See more</p>
        </div>

        <div className='Filter__Price'> 
        <span className='Filter__title'>Price</span>

          <p>Under <LiaRupeeSignSolid/>300 </p>
          <p><LiaRupeeSignSolid/>300 - <LiaRupeeSignSolid/>500 </p>
          <p><LiaRupeeSignSolid/>500 - <LiaRupeeSignSolid/>1,000</p>
          <p><LiaRupeeSignSolid/>1,000 - <LiaRupeeSignSolid/>1,500</p>
          <p>Over <LiaRupeeSignSolid/>1,500</p>

        </div>

        <div className='Filter__Size'> 

        </div>
    </div>
  )
}

export default ProductFilters