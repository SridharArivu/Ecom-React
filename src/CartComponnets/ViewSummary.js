import React from 'react'
import './ViewSummary.css'
import { useSelector } from 'react-redux'
import {MdPayment} from 'react-icons/md'
import CartItems from '../components/CartItems'
import {BiRupee} from 'react-icons/bi'

const ViewSummary = ({HandlePayment,TotalAmount,SetViewAddress,SetViewShoppingCart,SetViewSummary}) => {
  const SelectedAddress = localStorage.getItem("selectAddress")
  const address = JSON.parse(SelectedAddress);
  const cartState = useSelector((state)=> state.cart)
  const Advertisement = "<===== Adds to be Implement====>"
  return (
    <div className='Summary__wrapper'>
      <div className='Summary__items'>

          {/* ======= Header Section ======  */}
      
          <div className='SummaryPage__header'>
                  <h2>Summary</h2>
                  <h4>{cartState.length} items</h4>
          </div>

          {/* ======= Back Button and Payment Button ======  */}

          <div className='summary__buttons'>
            <button onClick={
                ()=>{SetViewAddress(true);
                    SetViewShoppingCart(false);
                    SetViewSummary(false);}} className='Back__btn'>Back</button>
            <button onClick={()=>HandlePayment()} className='Payment__btn'>Make Payment <MdPayment size={20}/></button>
          </div>

          {/* ======= Shipping and Summary Details Conatiner ======  */}


          <div className='Shipping__and__summary'>
              <div className='Shipping__address'>
                  <h4>Shipping address :</h4>
                  <div className='address__row__format'>
                    <p>{address.firstName}</p>
                    <p>{address.lastName}</p>
                  </div>
                  <div className='address__row__format'>
                    <p>{address.doorStreetArea},</p>
                    <p>{address.city}</p>
                  </div>
                  <div className='address__row__format'>
                    <p>{address.state},</p>
                    <p>{address.pinCode}</p>
                  </div>
                  <div className='address__row__format'>
                    <p>+91 {address.mobNumber}</p>
                    <p>+91 {address.altMobNumber}</p>
                  </div>
              </div>

              <div className='final__summary'>
                  <div className='summary__row__format'>
                    <h4 className='summary__heading'>Order Total :</h4>
                    <h4 className='summary__total__amount'><BiRupee size={29}/>{TotalAmount}</h4>
                  </div>
                  <div className='summary__details'>
                    <p>Shipping Cost :</p>
                    <p>FREE</p>
                  </div>
                  <div className='summary__details'>
                    <p>GST (18%) :</p>
                    <p><BiRupee className='rupees' size={20}/>{(TotalAmount * 18)/100}</p>
                  </div>
                  <div className='summary__details'>
                    <p>Coupon :</p>
                    <p>0.00</p>
                  </div>
              </div>
          </div>

          {/* ======= Final Products  List ======  */}
          <div className='Final__CartItems'>
            {
              cartState.map((items)=>{
                return(
                  <>
                    <CartItems items={items}/>
                  </>
                )
              })
            }
          </div>

      </div>
      {/* ======= Advertisement Conatiner ======  */}
      

      <div className='advertisement'>
        <h2>Advertisement</h2>
        <p>{Advertisement}</p>
      </div>
    </div>
  )
}

export default ViewSummary