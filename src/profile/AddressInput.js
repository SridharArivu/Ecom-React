import React, { useState } from 'react'
import './AddressInput.css'
import {IoClose} from 'react-icons/io5'
import Axios from '../api/Axios'
import {useSelector } from 'react-redux'


const AddressInput = ({SetShowCard}) => {

    const authToken = useSelector((state)=>state.auth)
  

    const [Address, SetAddress] = useState({
        firstName:"",
        lastName:"",
        doorStreetArea:"",
        city:"",
        state:"",
        pinCode:"",
        mobNumber:"",
        altMobNumber:"",
    })

    const HandleSaveAddress = async (e)=>{
        e.preventDefault();

      try {
        await Axios.post("/save-address", JSON.stringify({
            firstName:Address.firstName,
            lastName:Address.lastName,
            doorStreetArea:Address.doorStreetArea,
            city:Address.city,
            state:Address.state,
            pinCode:Address.pinCode,
            mobNumber:Address.mobNumber,
            altMobNumber:Address.altMobNumber,
        }),
        {
          headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken.token}`
        },
          withCredentials: true
        }
      );
      } catch(err){
        console.log(err);
      }
      SetShowCard(false)

    }

    const handelChange = (e) =>{
        SetAddress({
            ...Address,
            [e.target.name] : e.target.value,
        });
    };

    console.log(Address);

  return (
    <div className='address__input__wrapper'>
        <h4 className='heading'>Enter Your Address</h4>
        <button className='close_icon' onClick={()=>SetShowCard(false)}><IoClose size={25}/></button>
      
        <form className='form__grid' onSubmit={HandleSaveAddress} >

            <div className='input__div'>
                <label >First Name</label>
                <input type="text" onChange={handelChange} name='firstName' required autocomplete="off"/>
            </div>
            <div className='input__div'>
                <label >Last Name</label>
                <input type="text" onChange={handelChange} name='lastName' required autocomplete="off"/>
            </div>
            <div className='input__div'>
                <label >Address</label>
                <input type="text" onChange={handelChange} name='doorStreetArea' required autocomplete="off"/>
            </div>
            <div className='input__div'>
                <label >City</label>
                <input type="text" onChange={handelChange} name='city' required autocomplete="off"/>
            </div>
            <div className='input__div'>
                <label >State</label>
                <input type="text" onChange={handelChange} name='state' required autocomplete="off"/>
            </div>
            <div className='input__div'>
                <label >Pincode</label>
                <input type="text" onChange={handelChange} name='pinCode' required autocomplete="off"/>
            </div>
            <div className='input__div'>
                <label >Mobile Number</label>
                <input className='input__number' type="tel" onChange={handelChange} name='mobNumber' required autocomplete="off"/>
                <span className='number__code'>+91</span>
                
            </div>
            <div className='input__div'>
                <label >Alternate Mobile Number(Optional)</label>
                <input className='input__number' type="tel" onChange={handelChange} name='altMobNumber' autocomplete="off"/>
                <span className='number__code_alt'>+91</span>
            </div>
            
        <button className='input__address__btn' type='submit'>Save Address</button>
    </form> 
    </div>
  )
}

export default AddressInput