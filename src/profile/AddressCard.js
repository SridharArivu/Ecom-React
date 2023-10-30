import React from 'react'
import './AddressCard.css'

const AddressCard = ({item}) => {

  
  return (
    <div className='Addrees_card_wrapper'>
    
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
    </div>
  )
}

export default AddressCard