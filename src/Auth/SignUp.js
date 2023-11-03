import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {BiSolidLockAlt,BiSolidUser} from 'react-icons/bi'
import {FiPhone} from "react-icons/fi";
import './SignUp.css'
import { useState, useEffect } from 'react';
import  Axios  from '../api/Axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import {authActions} from '../store/auth-slice';

const SignUp = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const authState = useSelector((state)=> state.auth);

    const [user, SetUsername] = useState();
    const [emailId, SetEmail] = useState();
    const [pass, SetPassword] = useState();
    const [pwdMatch, SetPwdMatch] = useState();
    const [number, SetNumber] = useState();

    const [matchPassError, SetMatchPassError] = useState(false);


    useEffect(()=>{
      SetMatchPassError(false);
      if(pwdMatch!== pass ){
        SetMatchPassError(true);
      }else{
        SetMatchPassError(false);
      }
    },[pwdMatch,pass])

    useEffect(()=>{
      localStorage.setItem("credentilas", JSON.stringify(authState));
    },[authState])

   

    const REGISTER__URL = '/api/v1/auth/register';
    
    const HandleSubmit = async (e)=>{
      e.preventDefault();

      try {
        const Response = await Axios.post(REGISTER__URL, JSON.stringify({
            username:user,
            email:emailId.toLowerCase(),
            password:pass,
            mobileNumber:number
        }),
        {
          headers:{'Content-Type':'application/json'},
          withCredentials: true
        }
      );
      dispatch(authActions.tokenDispatch(Response.data.token))
      navigate("/")
      } catch(err){
        console.log(err);
      }
      

    }

  return (
    <div className='bg__signup'>
       <div className="signup__wrapper">
            <div className="form__box__signup">
               <h2>Register</h2> 
               <form onSubmit={HandleSubmit}>

                  {/* USENAME FEILD */}

               <div className="signup_input_box"> 
                    <span className='icon'><BiSolidUser/></span> 
                    <input 
                    type='text' 
                    required
                    onChange={(e) => SetUsername(e.target.value) }
                    />                 
                    <label className='signup_username_label'>Username</label>
                </div>

                 {/* EMAIL FEILD */}

                <div className="signup_input_box">
                    <span className='icon'><HiOutlineMail/></span>
                    <input 
                    type='text' 
                    required
                    onChange={(e) => SetEmail(e.target.value) }
                    />
                    <label className='signup_email_label'>Email</label>
                </div>

                 {/* PASSWORD FEILD */}

                <div className="signup_input_box">
                    <span className='icon'><BiSolidLockAlt/></span>
                    <input 
                    type='password' 
                    required
                    onChange={(e) => SetPassword(e.target.value) }
                    />
                    <label className='signup_pass_label'>Password</label>
                </div>

                 {/* CONFIRM PASSWORD FEILD */}

                
                    {
                    matchPassError !== true 
                    ? 
                    <div className="signup_input_box">
                    <span className='icon'><BiSolidLockAlt/></span>
                    <input 
                    type='password' 
                    required
                    onChange={(e) => SetPwdMatch(e.target.value) }
                    />
                    <label className='signup_confirm_pass_label'>Confirm Password</label>
                    </div>
                    :
                    <div className="signup_input_box">
                    <span className='icon'><BiSolidLockAlt/></span>
                    <input 
                    type='password' 
                    required
                    onChange={(e) => SetPwdMatch(e.target.value) }
                    />
                    <label className='signup_confirm_pass_label'>Confirm Password</label>
                    <span className='pass__error'>Password does not match</span>
                    </div>

                    }

                    {/* Mobile Number */}


                    <div className="signup_input_box">
                    <span className='icon'><FiPhone/></span>
                    <input 
                    type='tel' 
                    required
                    onChange={(e) => SetNumber(e.target.value) }
                    />
                    <label className='signup_number_label'>Mobile Number</label>
                    </div>
              


                <button type='submit' className='signup__btn'>signup</button>
                <div className="signup__register">
                    <p>already have an account? <a href="/login">Login</a></p>
                </div>
               </form>
            </div>
       </div>
    </div>
  )
}

export default SignUp