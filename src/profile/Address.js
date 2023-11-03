import React, { useState, useEffect } from 'react'
import AddressCard from './AddressCard'
import './Address.css'
import AddressInput from './AddressInput'
import { useSelector } from 'react-redux'
import Axios from '../api/Axios'

const Address = () => {

  const [showCard , SetShowCard] = useState(false);

  const [Address, SetAddress] =  useState([]);

  const authtoken = useSelector((state) => state.auth);
  useEffect(()=>{
    fetchAddress();
  })

  const fetchAddress = async ()=>{
    await Axios.get("/get-address", {
       headers:{
         "Authorization": `Bearer ${authtoken.token}`,
       }
     }).then((res)=>{
      SetAddress(res.data)
     })
 }

 console.log("address",Address)

  return (
    <>
    <div className='address__wrapper'>
      <div className='address__display'>

        {
          Address.map((items)=>{
            return(
              <>
              <AddressCard item={items} key={items.id}/>
         
              </>
            )
          })
        }
        
            
        
      </div>
      <button onClick={()=>SetShowCard(true)}  className='add__address__btn'>+ Add Address</button>
      {
      showCard &&  <AddressInput SetShowCard={SetShowCard} />
    }
    </div>
    
    </>
  )
}

export default Address