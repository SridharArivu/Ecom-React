import React from 'react'
import { BsHandbag} from 'react-icons/bs'
import { IoSearchSharp } from 'react-icons/io5'
import {BiHeart} from 'react-icons/bi'
import {FaRegUser} from 'react-icons/fa';
import "./Header.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Axios from '../api/Axios'
import { useContext } from 'react';
import Context from '../Context/Context';



const Header = () => {

  const navigate = useNavigate();

  const cartbatch = useSelector((state)=> state.cart)

  const {SearchProduct, SetSearchProduct} = useContext(Context);

  const [searchItem, SetSearchItem] = useState();
  const HandleSubmit = (e)=> {
      e.preventDefault()
      
      Axios.get("/products/search?searchTerm="+searchItem).then((response)=>{
        SetSearchProduct(response.data);
      })
      navigate("/products");
      console.log(SearchProduct);
  };

  
  
  return (
    <>
    <nav className='header__main'>
      <div className="header__logo">
          <a href='/' className='header_Logo'><h2>Logo</h2></a>
      </div>
      <form className="searchBar" onSubmit={HandleSubmit} >
        <input type='text' value={searchItem} onChange={(e)=>SetSearchItem(e.target.value)} placeholder='Search for Products'/>
        <button type='submit'><IoSearchSharp size={20}/></button>
      </form>
      
      <div className="Header__userActions">
      {cartbatch.length === 0 
      ? <>
          <a href="/cart" className="header__bag">< BsHandbag size={22}/></a>
          <span className='bag'>Bag</span>
        </>
       :
       <>
          <a href="/cart" className="header__bag">< BsHandbag size={22}/><h5 className='cart__batch'>{cartbatch.length}</h5></a>
          <span className='bag'>Bag</span>

          </>
      }  
      
          <a href="/login" className="header__wish"><BiHeart size={24}/></a>
          <span className='wishlist'>wishlist</span>
          
          <a href="/account" className="header__profile"><FaRegUser size={20}/></a>
          <span  className='profile'>Profile</span> 
      
      </div>
    </nav>
    </>
  )
}

export default Header