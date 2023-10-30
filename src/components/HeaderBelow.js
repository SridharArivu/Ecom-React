import React from 'react'
import './HeaderBelow.css';

const HeaderBelow = () => {
  return (
    <div className='box-container'>
        <div className='category__list'>
        <ul className='categories'>
            <li className='lists'>
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
  )
}

export default HeaderBelow