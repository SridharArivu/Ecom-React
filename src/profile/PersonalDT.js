import React,{useEffect} from 'react'
import './PersonalDt.css'
import {BiSolidUserCircle} from 'react-icons/bi'
import { useSelector } from 'react-redux'
import RecentOrders from './RecentOrders'



const PersonalDT = () => {

  const accountDetails = useSelector((state)=> state.account.userDetails)
  const orderDetails = useSelector((state)=> state.account.orderDetails)
    
    
  return (
    <div className='Person__wrapper'>

      {/* <====/#/#/#/# User Details \#\#\#\#====> */}

          <div className='User__details'>
                <BiSolidUserCircle size={150}/>
              <div className='details'>
                  <h2>{accountDetails.email}</h2>
                  <p>{accountDetails.username}</p>
                  <p>+91{accountDetails.mobileNumber}</p>
              </div>
              <a href="/account"><h4>Edit</h4></a>
          </div>

      {/* <====/#/#/#/# Recent orders Headers \#\#\#\#====> */}

            <div className='recent__order'>
                <h2>Recent Orders</h2>
                <div className='recent__heading'>
                  <div className='container__box__ID'>
                    <p>Order ID</p>
                  </div>
                  <div className='container__box__name'>
                    <p>Product</p>
                  </div>
                  <div className='container__box__address'>
                    <p>Address</p>
                  </div>
                  <div className='container__box'>
                    <p>date</p>
                  </div>
                  <div className='container__box__price'>
                    <p>Price</p>
                  </div>
                  <div className='container__box'>
                    <p>Status</p>
                  </div>
                </div>
            </div>

       {/* <====/#/#/#/# Recent orders \#\#\#\#====> */}


        {
          orderDetails.map((items)=>{
            return(
              <>
                <RecentOrders items={items} key={items.id} />
              </>
            )
          })
        }   
    </div>
  )
}

export default PersonalDT