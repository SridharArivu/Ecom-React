import {useState, useEffect} from 'react'
import './Profile.css'
import {BsBoxSeam} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'
import {MdFavoriteBorder} from 'react-icons/md'
import {FiUser} from 'react-icons/fi'
import  {LuLock, LuHome, LuLogOut} from 'react-icons/lu'
import OrderDetails from './OrderDetails'
import Favorites from './Favorites'
import PersonalData  from './PersonalDT';
import ChagePass from './ChangePass';
import Address from './Address';
import { useNavigate } from 'react-router-dom'
import Axios from '../api/Axios';
import { useSelector } from 'react-redux'
import { accountActions } from '../store/account-slice'
import { useDispatch } from 'react-redux'


const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = useSelector((state)=> state.auth)
  const orderDetails = useSelector((state)=> state.account.orderDetails)
  const accountDetails = useSelector((state)=> state.account.accountDetails)

  const redirect = useNavigate();

  useEffect(()=>{
    fetchOrderDetails();
    fetchAccountDetails();
  })

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  const fetchOrderDetails = async ()=>{
    await Axios.get("account-details/order-details", {
       headers:{
         "Authorization": `Bearer ${authToken.token}`,
       }
     }).then((res)=>{
       dispatch(accountActions.orderDetailsDispatch(res.data) );
       localStorage.setItem("orderDetails",JSON.stringify(res.data))
     }).catch((err) =>{
      if(err.response.status === 403){
        redirect("/login");
      }
     })

 }

 const fetchAccountDetails = async ()=>{
  await Axios.get("account-details/user-details", {
     headers:{
       "Authorization": `Bearer ${authToken.token}`,
     }
   }).then((res)=>{
     dispatch(accountActions.userDetailsDispatch(res.data) );
     localStorage.setItem("userDetails",JSON.stringify(res.data))
   }).catch((err) =>{
    if(err.response.status === 403){
      redirect("/login");
    }
   })

}





  const [viewOrder, SetViewOrder ] = useState(true);
  const [viewFavrts, SetViewFavrts ] = useState(false);
  const [viewPrsnData, SetViewPrsnData ] = useState(false);
  const [viewChgPass, SetViewChgPass ] = useState(false);
  const [viewAddress, SetViewAddress ] = useState(false);


  const HandleSignOut = () =>{
    localStorage.removeItem("credentilas");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("credentilas");
    localStorage.removeItem("orderDetails");
    localStorage.removeItem("user-details");
    localStorage.removeItem("searchedProducts");
    localStorage.removeItem("Razorpay_order_id");
    localStorage.removeItem("rzp_checkout_anon_id");
    localStorage.removeItem("isAuthenticated");
    
    navigate("/login")
  }

  return (
    <div className='profile__wrapper'>

      {/* <=====/#/#/#/#/# DeskTop Components \#\#\#\#\# =====> */}
      
      <h2 className='my__account'>My Account</h2>

        {/* <===== Left Components=====> */}
      
        <div className='leftComponent'>
          <h3 className='user__name'>Welcome, user</h3>
          <button onClick={()=> 
            {SetViewOrder(true); 
            SetViewFavrts(false); SetViewPrsnData(false);
            SetViewChgPass(false); SetViewAddress(false);
            }}> <BsBoxSeam size={33} style={{marginLeft:"3.5px"}}/> <span>Orders</span> <AiOutlineRight size={25} className='right__icons'/></button>
          
          <button onClick={()=> 
            {SetViewFavrts(true); 
            SetViewOrder(false); SetViewPrsnData(false);
            SetViewChgPass(false);SetViewAddress(false); } }> <MdFavoriteBorder size={38} /> <span>Favorites</span> <AiOutlineRight size={25} className='right__icons'/></button>
          
          <button onClick={()=>
          {
            SetViewPrsnData(true);
            SetViewOrder(false); SetViewFavrts(false);
            SetViewChgPass(false);SetViewAddress(false);
          }}> <FiUser size={38}  /> <span>Personal Data</span> <AiOutlineRight size={25} className='right__icons'/></button>
          
          <button onClick={()=>{
            SetViewChgPass(true);
            SetViewOrder(false); SetViewFavrts(false);
            SetViewPrsnData(false);SetViewAddress(false);
          }}> <LuLock size={38} /> <span>Change Password</span> <AiOutlineRight size={25} className='right__icons'/> </button>
          
          <button onClick={()=>{
            SetViewAddress(true);
            SetViewOrder(false); SetViewFavrts(false);
            SetViewPrsnData(false);SetViewChgPass(false);
          }}> < LuHome size={38} /> <span>Address</span> <AiOutlineRight size={25} className='right__icons'/></button>
          
          <button onClick={() => HandleSignOut()} > <LuLogOut size={38} /> <span>Sign Out</span> <AiOutlineRight size={25} className='right__icons'/></button>
        </div>
        {/* <===== Right Components =====> */}
        <div className='rightComponent' >
          {
            orderDetails.map((items)=>{
              return(
                <>
                {viewOrder && <><h3>Orders</h3> <OrderDetails items={items} key={items.id}/> </>}
                </>
              )
            })
          }
          
          {viewFavrts && <><h3>Favorites</h3> <Favorites /></>}

          {viewPrsnData && <><h3>Personal Data</h3> <PersonalData 
          email={accountDetails.email}
          username={accountDetails.username}
          number={accountDetails.mobileNumber}
          orderDetails={orderDetails}
          /></>}

          {viewChgPass && <ChagePass/>}
          {viewAddress && <> <h3>Address</h3> <Address/> </> }
        </div>

        {/* <=====/#/#/#/#/# Mobile Components \#\#\#\#\# =====> */}
        <div className='Mobile__com__wrapper'>
          <h3 className='Mobile__com__heading'>Welcome, user</h3>
          <button onClick={()=> 
            {
            navigate('/orders')
            }}> <BsBoxSeam size={33} style={{marginLeft:"3.5px"}}/> <span>Orders</span> <AiOutlineRight size={25} className='right__icons'/></button>
          
          <button onClick={()=> 
            {
            
            }}> <MdFavoriteBorder size={38} /> <span>Favorites</span> <AiOutlineRight size={25} className='right__icons'/></button>
          
          <button onClick={()=>
          {
            navigate('/personal-Info')
          }}> <FiUser size={38}  /> <span>Personal Data</span> <AiOutlineRight size={25} className='right__icons'/></button>
          
          <button onClick={()=>{
    
          }}> <LuLock size={38} /> <span>Change Password</span> <AiOutlineRight size={25} className='right__icons'/> </button>
          
          <button onClick={()=>{
           navigate('/address')
          }}> < LuHome size={38} /> <span>Address</span> <AiOutlineRight size={25} className='right__icons'/></button>
          
          <button onClick={() => HandleSignOut()} > <LuLogOut size={38} /> <span>Sign Out</span> <AiOutlineRight size={25} className='right__icons'/></button>
        </div>
    </div>
  )
}

export default Profile