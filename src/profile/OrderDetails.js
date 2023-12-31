
import './OrderDetails.css'
import {BiRupee} from 'react-icons/bi'

const OrderDetails = ({items}) => {


    const prodDetails = items.orderProductQuantityList;

    const Itemdate = items.id.date

    const date = Itemdate.substring(0,10)


  return (
    <div className='order__wrapper'>
        {
            prodDetails.map((item)=>{
                return (
                    <>
                    <div className='order__images'>
                        <img src={item.productImage} alt='proimg'/>
                    </div>
                    </>
                )
            })
        }
        
        <div className='order__details'>
         <div className='details'>
            <h4>Order ID</h4>
            <p>{items.id.timestamp}</p>
         </div>
        <div className='details'>
            <h4>Shipped Date</h4>
            <p>{date}</p>
        </div>
        <div className='details'>
            <h4>Total Amount</h4>
            <p><BiRupee/>{items.amount}</p>
        </div>
        <div className='details'>
            <h4>Status</h4>
            <p>Delivered</p>
        </div> 
                </div>
                <div className='order__btns'>
            <button>VIEW ORDER</button>
            <button>TRACK ORDER</button>
                </div>
    </div>
  )
}

export default OrderDetails