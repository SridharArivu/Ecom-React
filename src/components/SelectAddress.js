import React from 'react'
import './SelectAddress.css'
import AddressCard from '../profile/AddressCard'
import { useState} from 'react'
import AddressWindow from './AddressWindow'
import {MdOutlineHomeWork} from "react-icons/md"



const SelectAddress = ({HandlePayment}) => {
    const [showAddress, SetShowAddress] = useState(false)
    const [addressSelected, SetAddressSelected] = useState(localStorage.getItem("addressSelected"))

    const loadAddressFromLocalStorage = () =>{
        const address = localStorage.getItem("selectAddress")
        return address ? JSON.parse(address) : null
    }


    const address = loadAddressFromLocalStorage();
 
  return (
    <div className='selectAddress__wrapper'>
        <div className='address__heading'>
            <p className='address__selected'>Address Selected <MdOutlineHomeWork className='address__icon' size={23}/></p>
            <p onClick={()=> SetShowAddress(true)} className='change__address'>Change Address ?</p>
        </div>
       
        {
            addressSelected 
            ?
            <>
            <AddressCard item={address}/>
            <button onClick={()=>HandlePayment()}>Checkout</button>
            </>
            :
            <button className='checkout__btn' onClick={()=> SetShowAddress(true)}>CheckOut</button>
        }
        {
            showAddress && <AddressWindow 
            SetShowAddress={SetShowAddress} 
            SetAddressSelected={SetAddressSelected}/>
        }

         
        
    </div>
  )
}

export default SelectAddress