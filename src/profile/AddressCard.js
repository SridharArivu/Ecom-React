import React from 'react'
import './AddressCard.css'

const AddressCard = ({item,SetViewAddress,SetViewShoppingCart,SetViewSummary}) => {

  
  return (
      <div className='Addrees_card_wrapper'>
          <div className='fstName__lstName'>
              <h4>{item.firstName}</h4>
              <h4>{item.lastName}</h4>
              <h6 className='edit_btn'>Edit</h6>
          </div>

          <div className='street'>
                <p>{item.doorStreetArea}</p>
          </div>

          <div className='city'>
                <p>{item.city}</p>
          </div>

          <div className='State__pincode'>
            <p>{item.state}</p>
            <p>{item.pinCode}</p>
          </div>

          <div className='mobile__numbers'>
              <p>{item.mobNumber}</p>
              <p>{item.altMobNumber}</p>
          </div>

          <button onClick={()=> { 
                    localStorage.setItem("selectAddress",JSON.stringify(item))
                    SetViewAddress(false);
                    SetViewShoppingCart(false);
                    SetViewSummary(true);
                    } } className='select__address__btn'>Select Address</button>

      </div>
  )
}

export default AddressCard