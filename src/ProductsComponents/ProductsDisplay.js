import React from 'react'
import './ProductsDisplay.css'
import Productcard from './ProductCard';
import { useContext, useEffect } from 'react';
import Context from '../Context/Context';


const ProductsDisplay = ({searchItem}) => {

  const {SearchProduct} = useContext(Context);

  useEffect(()=>{
    localStorage.setItem("searchedProducts",JSON.stringify(SearchProduct))
  },[SearchProduct])

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })


  return (
      <div className='display__wrapper'>
        <div className='produucts__display'>
          {SearchProduct?.map((prod)=>(
             <Productcard prod={prod} key={prod.id}/>
          ))}
        </div>
      </div>
      )
}

export default ProductsDisplay