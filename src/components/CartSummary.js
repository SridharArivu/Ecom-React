import React, { useState } from 'react'
import './CartSummary.css';
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {BiRupee} from 'react-icons/bi'
import SelectAddress from './SelectAddress';
import {GrStatusGood} from "react-icons/gr"
import {LuVerified} from 'react-icons/lu'

const CartSummary = ({totalAmount,cart}) => {
    const [showSummary, SetShowSummary] = useState(false)
  return (
    <div className='summary__wrapper'>
            
        <p className='indication'><LuVerified size={23} className='tick'/> Your Order is eligible for Free Delivery</p>
        <div className='summary'>
            <h4 className='order__Summary'>ORDER SUMMARY</h4>
            <div className='details__summary'>
                <p>{cart.length} PRODUCT</p>
            </div>
            <div className='details__summary'>
                <p>Product total</p>
                <p><BiRupee size={20}/>{totalAmount}</p>
            </div>
            <div className='details__summary'>
                <p>Delivery</p>
                <p>FREE</p>
            </div>
            <div className='details__Total'>
                <h4>Total</h4>
                <h4><BiRupee size={29}/>{totalAmount}</h4>
            </div> 
        </div>  
    </div>
  )
}

export default CartSummary