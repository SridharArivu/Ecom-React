import React from 'react'
import  './ProductsPage.css'
import ProductFilters from './ProductFilters';
import ProductsDisplay from './ProductsDisplay';
import Advertise1 from '../Images/ProductPageAD1.png'
import Advertise2 from '../Images/ProductPageAD2.png'

const ProductDisplay = () => {
  return (
    <div className='Product__Page'>
      <div className='ProductPage__components'>
        <div className='Product__page__left'>
            <ProductFilters/>
            <div className='Product_page_ad'>
              <img src={Advertise1} alt="advertisement" />
            </div>
            <div className='Product_page_ad'>
              <img src={Advertise2} alt="advertisement" />
            </div>
        
        </div>
        <div>
        <ProductsDisplay/>
        </div>
       
       
      </div>
    </div>
  )
}

export default ProductDisplay