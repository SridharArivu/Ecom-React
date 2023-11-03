import React, { useState } from 'react'
import "./NavigationBar.css"
import {LuHome,LuHeart,LuMenu} from 'react-icons/lu'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FaRegUser} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    const cart = useSelector((state)=> state.cart)


    const [isSlidingLeft, setIsSlidingLeft] = useState(true);

    // className={`${isSlidingLeft ? 'slide-left' : 'slide-right'}`}

    const toggleSlide = () => {
      setIsSlidingLeft(!isSlidingLeft);
    };
  return (
    <>
      <div className='sliding-window'>
      <div
        className={`${isSlidingLeft ? 'slide-left' : 'slide-right'}`}
      >
        <ul className='sliding__window__categories'>
          <h4>CATEGORIES</h4>
            <li>
                <a href="/" className="men">MEN</a>
            </li>
            <li>
                <a href="/" className="men">WOMEN</a>
            </li>
            <li>
                <a href="/" className="men">KIDS</a>
            </li>
            <li>
                <a href="/" className="men">BEAUTY</a>
            </li>
            <li>
                <a href="/" className="men">HOME</a>
            </li>
            <li>
                <a href="/" className="men">FOOTWEARS</a>
            </li>
            <li>
                <a href="/" className="men">ELECTRONICS</a>
            </li>
        </ul>
      </div>
      </div>
   

   
        
    <div className='NavBar__wrapper'>
        <LuMenu onClick={toggleSlide} size={36}/>

    
        <LuHeart size={30}/>

        <Link className='Link' to={"/"}><LuHome size={30}/></Link>

        <div className='cart'>
            <Link className='Link' to={"/cart"}><HiOutlineShoppingBag size={35} /></Link>
            <span className='cart__length'>{cart.length}</span>
        </div>

        <Link className='Link' to={"/account"}><FaRegUser size={30}/></Link>

        
    </div>
    </>
  )
}

export default NavigationBar