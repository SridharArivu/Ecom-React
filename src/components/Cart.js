import React,{ useEffect, useState} from 'react'
// import {TotalQuantity} from '../store/cart-slice';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import CartSummary  from './CartSummary'
import './Cart.css'
import { totalAmountSelector } from '../store/cart-slice';
import emptyShopCart from '../Images/emptyShopCart.jpg';
import {useNavigate} from "react-router-dom"
import { isAuthenticatedSelector } from '../store/auth-slice';
import Axios from "../api/Axios";
import PageNavCart from '../Images/pageNavDisable.png'
import PageNavShoppingcart from '../Images/PageNavShoppingCart.png'
import PageNavAddress from '../Images/PageNavAddress.png'
import PageNavPayment from '../Images/PageNavPayment.png'
import ShoppingCart from '../CartComponnets/ShoppingCart'
import SummaryPage from '../CartComponnets/ViewSummary'
import AddressWindow from './AddressWindow';




const Cart = () => {

  const [ViewShoppingCart, SetViewShoppingCart] = useState(true);
  const [ViewAddress, SetViewAddress] = useState(false);
  const [ViewSummary, SetViewSummary] = useState(false);

  const authToken = useSelector((state)=> state.auth)

  const navigate = useNavigate();

  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const cartState = useSelector((state) => state.cart);

  const TotalAmount = useSelector(totalAmountSelector);

  const loadAddressFromLocalStorage = () =>{
    const address = localStorage.getItem("selectAddress")
    return address ? JSON.parse(address) : null
  }

  
const address = loadAddressFromLocalStorage();

console.log(address);


   
  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartState));
    loadAddressFromLocalStorage();
  },[cartState]);



  const HandlePayment = async (e) =>{

    var orderID = null;

    if(isAuthenticated){
    try {
      const Response = await Axios.post("/api/payment/create-order", JSON.stringify({
          amount: TotalAmount*100,
      }),
      {
        headers:{
        'Authorization':`Bearer ${authToken.token}`,
      },
        withCredentials: true
      }

    );
    orderID = (Response.data.OrderId);
    localStorage.setItem("ToUseThisOrderId",orderID )
    
    } catch(err){
      console.log(err);
    }

    var options = {
      key: "rzp_test_SYxQKFMJrZMFd7",
      amount: TotalAmount * 100,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderID,
      handler: function (response){
          localStorage.setItem("Razorpay_order_id",response.razorpay_order_id);
          localStorage.setItem("razorpay_payment_id",response.razorpay_payment_id);
          localStorage.setItem("razorpay_signature",response.razorpay_signature);
          ConfirmOrderRedirect();
          navigate("/account")
         

    },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
    },
    notes: {
      "address": "Razorpay Corporate Office"
    },
    theme: {
      "color": "#3399cc"
    }
    };
    var pay = new window.Razorpay(options);
    pay.open();

  } else{
    alert("Plese LogIn to Continue Your Purchase")
    navigate("/login")
  }

  const ConfirmOrderRedirect = async () =>{
    const PaymentResponse = await Axios.post("/api/payment/Check-order", JSON.stringify({
                
          order_id: localStorage.getItem("ToUseThisOrderId"),
          payment_id: localStorage.getItem("razorpay_payment_id"),
          razorpay_signature: localStorage.getItem("razorpay_signature")
      }),
      {
      headers:{
        'Authorization':`Bearer ${authToken.token}`,
      },
      }
      );

      if(PaymentResponse.data){
        localStorage.removeItem("ToUseThisOrderId");
        localStorage.removeItem("razorpay_payment_id");
        localStorage.removeItem("razorpay_signature");
        localStorage.removeItem("cartItems")
        HandleCartCheckOut();
      }

  }

  const HandleCartCheckOut = ()=>{
    
    const CartData = {
      fullAddress:{
        firstName: address.firstName,
        lastName: address.lastName,
        doorStreetArea: address.doorStreetArea,
        city: address.city,
        state: address.state,
        pinCode: address.pinCode,
        mobNumber: address.mobNumber,
        altMobNumber: address.altMobNumber,
        email: address.email
      },
      amount:TotalAmount,
      orderProductQuantityList: cartState.map((item) => ({
        productName: item.name,
        productImage:item.image,
        quantity: item.quantity,
      })),
    }

    Axios.post('http://localhost:8080/placeOrder', CartData, {
      headers: { 
        'Content-Type':'application/json',
        'Authorization':`Bearer ${authToken.token}` 
      },
      withCredentials: true
    });
    
  };
  }


  

  

  return (
    <>
    {
      cartState.length === 0 ?
      <div className='empty__cart'>
          <img src={emptyShopCart} alt="your shopping cart is empty" />
          <div className='empty_text'>
            <a href='/'>Return to Shop</a>
            <h1>Your Cart is Currently Empty</h1>
              <p className='p1'>Looks like you have not added anything to your cart. Go </p>
             <p className='p2'> ahead and explore top categories</p>
          </div>
      </div>
      :
      <>
      {
        ViewShoppingCart &&  
        <div className='CartPage__nav'>
            <h2>Shopping Cart</h2>
            <h4>{cartState.length} items</h4>
        </div>
      }
      
      {
        ViewShoppingCart && <ShoppingCart 
        SetViewAddress={SetViewAddress}
        SetViewShoppingCart={SetViewShoppingCart}
        SetViewSummary={SetViewSummary}
         />
      }
      {
        ViewAddress && 
        <AddressWindow
        SetViewAddress={SetViewAddress}
        SetViewShoppingCart={SetViewShoppingCart}
        SetViewSummary={SetViewSummary}
        />
      }
      {
        ViewSummary && <SummaryPage
        SetViewAddress={SetViewAddress}
        SetViewShoppingCart={SetViewShoppingCart}
        SetViewSummary={SetViewSummary}
        HandlePayment={HandlePayment} 
        TotalAmount={TotalAmount}/>
      }
         
      
         
          
      </>
  }
  </>
  )
}

export default Cart