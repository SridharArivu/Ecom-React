import React from 'react'
import './AddressWindow.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Axios from '../api/Axios'
import AddressInput from '../profile/AddressInput'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import AddressCard from '../profile/AddressCard'

const AddressWindow = ({SetViewAddress,SetViewShoppingCart,SetViewSummary}) => {
    const [Address, SetAddress] =  useState([]);
    const [showCard , SetShowCard] = useState(true);
    const redirect = useNavigate();

    const authtoken = useSelector((state) => state.auth);
    
    useEffect(()=>{
      fetchAddress();
    })

    useEffect(()=>{
      if(showCard === true){
        fetchAddress();
      }
    })
  
  
    
    const fetchAddress = async ()=>{
      await Axios.get("/get-address", {
         headers:{
           "Authorization": `Bearer ${authtoken.token}`,
         }
         
       }).then((res)=>{
        SetAddress(res.data)

       }).catch((err) =>{
        if(err.response.status === 403 ){
          Swal.fire({
            icon: 'error',
            position: 'center',
            title: "Please Login to Continue",
          })
          redirect("/login");
          
        }
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
          Address.map((items)=>{
            return(
                <>
                <AddressCard item={items} 
                SetViewAddress={SetViewAddress}
                SetViewShoppingCart={SetViewShoppingCart}
                SetViewSummary={SetViewSummary}
                />

                </>
                    )})
                        }
                    </div>
       
        }

      </div>
  )
}

export default AddressWindow