import React from 'react'
import './Orders.css'
import { useSelector } from 'react-redux'
import OrderDetails from '../profile/OrderDetails'
import {BiArrowBack} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
    const orderDetails = useSelector((state)=> state.account.orderDetails)
    const navigate = useNavigate();

  return (
    <div className='Order__wrapper'>
        <h3 className='Order__heading'>Orders</h3>
        <button className='back__btn'
        onClick={()=> navigate("/account")}
        ><BiArrowBack size={25}/></button>
        {
            orderDetails.map((items)=>{
              return(
                <>
                 <OrderDetails items={items} key={items.id}/>
                </>
              )
            })
          }
    </div>
  )
}

export default Orders