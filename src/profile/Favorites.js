import React from 'react'
import cardimage from '../Images/CardImage.png'
import {BiRupee} from 'react-icons/bi'
import './Favorites.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice'

const Favorites = () => {

  const dispatch = useDispatch();

  let prod = {
    image : cardimage,
    name: "Product Name",
    price: "1000"
  }
  return (
    <div className='Fav__wrapper'>
        <div className='Fav__images'>
            <img src={prod.image} alt='prod'/>
        </div>
        <div className='Fav__Details'>
          <h1>{prod.name}</h1>
          <p><BiRupee/>{prod.price}</p>
          <p>Size: M</p>
          <p>Color: White</p>
        </div>
        <div className='Fav__btns'>
                <button onClick={()=> dispatch(cartActions.addToCart(prod))}>ADD TO CART</button>
                <button>REMOVE WISHLIST</button>
        </div>
    </div>
  )
}

export default Favorites