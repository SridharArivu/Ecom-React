import React from 'react'
import './ShoppingCart.css'
import { useSelector } from 'react-redux'
import CartItems from '../components/CartItems'
import CartSummary from '../components/CartSummary'
import { totalAmountSelector } from '../store/cart-slice';
import {MdShoppingCartCheckout} from 'react-icons/md';
import { isAuthenticatedSelector } from '../store/auth-slice';
import {useNavigate} from "react-router-dom"

const ShoppingCart = ({SetViewAddress,SetViewShoppingCart,SetViewSummary}) => {
    const cartState = useSelector((state)=> state.cart)
    const TotalAmount = useSelector(totalAmountSelector);
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const navigate = useNavigate();

    
  return (
    <div className='Shoppingcart__wrapper'>
        <div className='Cart__items'>
            {
                cartState.map((items)=>{
                    return(
                        < CartItems items={items}/>
                    )   
                    
                })
            }
        </div>
        <div className='ShoppingCart__summary'>
            <CartSummary totalAmount={TotalAmount} cart={cartState}/>
            <button className='checkOut__btn' onClick={() =>{
                    SetViewAddress(true);
                    SetViewShoppingCart(false);
                    SetViewSummary(false);
                }
                }>CHECKOUT <MdShoppingCartCheckout size={23}/></button>
        </div>
    </div>
  )
}

export default ShoppingCart