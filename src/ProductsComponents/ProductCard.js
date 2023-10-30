import React ,{useEffect}from 'react'
import {BiCartAlt} from 'react-icons/bi'
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { useSelector } from 'react-redux';

const ProductCard = ({prod}) => {
  

  const dispatch = useDispatch();
  const handleAddToCart = (prod) =>{
    dispatch(cartActions.addToCart(prod))
  }

  const cartState = useSelector((state)=> state.cart);

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartState));
  },[cartState]);

 
  return (
    <div className='product__wrapper'>
      <div className="card__image">
        <img src={prod.image} alt="cardimage" />
      </div>    
        <div className="product__details">
            <h5 className='prod__title'>{prod.name}</h5>
            <h5 className='prod__price'>{prod.price}
            <del className='del'>Rs. 2000</del>
            <h5 className='off'>(60% OFF)</h5>
            </h5>
        </div>
        <button onClick={()=>handleAddToCart(prod)}>Add to Cart<BiCartAlt size={20}/></button>
     </div>
  )
}

export default ProductCard