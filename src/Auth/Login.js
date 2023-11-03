import React, { useState } from 'react'
import './Login.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BiSolidLockAlt} from 'react-icons/bi'
import Axios from '../api/Axios'
import { useNavigate } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'
import Swal from 'sweetalert2'

const Login = () => {

  

  const dispatch = useDispatch();

  const redirect = useNavigate();

  const UserNotFound = () =>{
    Swal.fire({
        icon: 'error',
        position: 'top',
        title: "User Not Found",
      })
  }


  const [userDetails, SetUserDetails] = useState({
    email:"",
    password:""
  });

  const handleSubmit = (e)=>{
    e.preventDefault();

    Axios.post("/api/v1/auth/authenticate",{
      email:userDetails.email,
      password:userDetails.password
    })
    .then((res) =>{
      Swal.fire({
        icon: 'success',
        title: "Login Success !",
        timer: 1500,
        showConfirmButton: false,
      })
      localStorage.setItem("credentilas",  JSON.stringify(res.data.token));
      localStorage.setItem("isAuthenticated",  JSON.stringify(true));
      dispatch(authActions.tokenDispatch(res.data.token));
      dispatch(authActions.setAuthentication("true"));
      
      redirect("/");
  })
    .catch(err => 
      {
        if(err.response.status === 403){
          UserNotFound();
        }
      }
      );
  }

  return (
    <div className='bg__login'>
       <div className="login__wrapper">
            <div className="form__box__login">
            
               <h2>Login</h2> 
               <form onSubmit={handleSubmit}>
                <div className="login_input_box">
                    <span className='icon'><HiOutlineMail/></span>
                    <input onChange={(e)=>SetUserDetails({...userDetails,email:e.target.value})} type='text' required/>
                    <label className='login_email_label'>Email</label>
                </div>
                <div className="login_input_box">
                    <span className='icon'><BiSolidLockAlt/></span>
                    <input onChange={(e)=>SetUserDetails({...userDetails,password:e.target.value})} type='password' required/>
                    <label className='login_pass_label'>Password</label>
                </div>
                <div className="login__remember__forgot">
                    <label><input type='checkbox'/>Remember me</label>
                    <a href="/login">Forgot Password ?</a>
                </div>
                <button type='submit' className='login__btn'>Login</button>
                <div className="login__register">
                    <p>Don't have an account? <a href="/signUp">Register</a></p>
                </div>
               </form>
            </div>
       </div>
    </div>
  )
}

export default Login