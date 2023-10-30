import React from 'react'
import './RecentOrders.css'
import { BiRupee} from 'react-icons/bi'
import cardimage from '../Images/CardImage.png'

const RecentOrders = ({items}) => {

  const prodDetails = items.orderProductQuantityList;

  console.log("recent",items)

  const fullAddress = items.fullAddress.doorStreetArea;
  const rawDate = items.id.date


  const address = fullAddress.substring(0,20)
  const date = rawDate.substring(0,10)

  return (
        <>
          <div className='recent__order_warpper'>
            <div className='container__box__ID'>
              <p>#{items.id.timestamp}</p>
            </div>
            <div className='container__box__name'>
              {
                prodDetails.map((item)=>{
                  return(
                    <>
                       <img src={item.productImage} alt="" />
                    </>
                  )
                })
              }
            </div>
            <div className='container__box__address'>
              <p>{address}...</p>
              <p className='SecondndlineAddress'>{items.fullAddress.city}, {items.fullAddress.pinCode}</p>
            </div>
            <div className='container__box'>
              <p>{date}</p>
            </div>
            <div className='container__box__price'>
              <p><BiRupee/>{items.amount}</p>
            </div>
            <div className='container__box'>
              <p>Complete</p>
            </div>
          </div>
     
        </>
  )
}

export default RecentOrders