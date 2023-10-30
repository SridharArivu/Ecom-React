 import React,{useEffect} from 'react'
import './CartItems.css';
import { cartActions } from '../store/cart-slice';
import { useDispatch, useSelector } from 'react-redux';

import {BiPlus, BiMinus,BiRupee} from "react-icons/bi"
import {TotalQuantity} from '../store/cart-slice'


const CartItems = ({items}) => {
    const dispatch = useDispatch();

    const cartState = useSelector((state)=> state.cart)

    const  productTitle =  items.name;
    const itemName = productTitle.substring(0,25)

   
    
    useEffect(()=>{
            localStorage.setItem("cartItems", JSON.stringify(cartState));
      },[cartState])


  return (

    <div className='cartItems__wrapper'>
            <div className='cartItem__image'>
                <img src={items.image} alt="cartItem" />
            </div>

            <div className='cartItems__title'>
                <h2> {itemName}... </h2>
                <p> size </p>
                <p> color </p>
                <p> Price:<BiRupee size={18}/>{items.price}</p>
            </div>

            <div className='cartItems__quantity'>
                <button onClick={() => dispatch(cartActions.incrementQuantity(items))}><BiPlus size={25}/></button>
                <input type="text" value={items.quantity}/>
                <button onClick={() => dispatch(cartActions.decrement(items))}><BiMinus size={25}/></button>
            </div>

            <div className='item__price'>
                <h3><span><BiRupee size={30}/></span>{items.totalPrice}</h3>
                <h3 className='total_price'></h3>
            </div>
        
    </div>
    
   
  )
}

export default CartItems