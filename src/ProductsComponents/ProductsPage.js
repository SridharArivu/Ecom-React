import React from 'react'
import  './ProductsPage.css'
import ProductFilters from './ProductFilters';
import ProductsDisplay from './ProductsDisplay';

const ProductDisplay = () => {
  return (
    <div className='Product__Page'>
      <div className='ProductPage__components'>
        <div>
        <ProductFilters/>
        </div>
        <div>
        <ProductsDisplay/>
        </div>
       
       
      </div>
    </div>
  )
}

export default ProductDisplay