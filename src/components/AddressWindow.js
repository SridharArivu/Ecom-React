import React from 'react'
import './AddressWindow.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Axios from '../api/Axios'
import {IoClose} from 'react-icons/io5'
import { Button } from 'bootstrap'
import AddressInput from '../profile/AddressInput'


const AddressWindow = ({SetViewAddress,SetViewShoppingCart,SetViewSummary}) => {
    const [Address, SetAddress] =  useState([]);
    const [showCard , SetShowCard] = useState(true);

    const authtoken = useSelector((state) => state.auth);
    useEffect(()=>{
      fetchAddress();
    },[showCard])
  
    const fetchAddress = async ()=>{
      await Axios.get("/get-address", {
         headers:{
           "Authorization": `Bearer ${authtoken.token}`,
         }
       }).then((res)=>{
        SetAddress(res.data)
       })
   }
  return (
    <div className='address__window__wrapper'>
      <div className='address__header'>
            <h2>Select Address to Continue Checkout</h2>
        </div>
        {
          Address.length === 0
          ?
          <div className="ADD__Address__input__">
            <AddressInput SetShowCard={SetShowCard}/>
          </div>
        :
        <div className='address__window__grid'>
        {
          Address.map((item)=>{
            return(
                <>
                <div className='Addrees_window__card_wrapper'>
                    <div className='fstName__lstName'>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                    </div>
    
                <button className='address__edit_btn'>Edit</button>

                <p className='street'>{item.doorStreetArea}</p>
                <p className='city'>{item.city}</p>
                <div className='State__pincode'>
                    <p>{item.state}</p>
                    <p>{item.pinCode}</p>
                </div>
                <div className='mobile__numbers'>
                    <p>+91 {item.mobNumber}</p>
                    <p>+91 {item.altMobNumber}</p>
                </div>
                <button onClick={()=> { 
                    localStorage.setItem("selectAddress",JSON.stringify(item))
                    SetViewAddress(false);
                    SetViewShoppingCart(false);
                    SetViewSummary(true);
                    } } className='select__address__btn'>Select Address</button>
                    </div>

                </>
                    )})
                        }
                    </div>
       
        }

      </div>
  )
}

export default AddressWindow