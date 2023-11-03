import React from 'react'
import './Footer.css'
import MyProfile from '../Images/MyProfile.jpg.png'
import {MdLocationPin} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram,BsLinkedin,BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='Footer_wrapper'>

      {/* <=====  Information About Developer =====> */}

      <div className='Dev__Deatils'>
        <img className='Dev_Image' src={MyProfile} alt="Developer_dp" />

        <div className='Dev__Description'>
          <h1 className='Dev__name'>Hi, I'm Sridhar</h1>
          <h5 className='Dev__Role'>Full Stack Developer</h5>
          <p>Passionate about crafting seamless web experiences with expertise in front-end technologies (HTML, CSS, JavaScript, React, Redux) and a strong back-end foundation (Java, Spring Boot, MongoDB, PostgreSQL). Committed to pushing the boundaries of innovation and delivering top-notch solutions.</p>
        </div>

      </div>

      <div className='Contact__us'>
          <h4 className='Contact__h4'>Contact Us</h4>
          <p className='Contact__p'><MdLocationPin size={22}/> 6743 Street, New York, USA</p>
          <p className='Contact__p'><BsTelephoneFill size={20}/> +012 665-7737</p>
          <p className='Contact__p'><HiMail size={21}/>  info@example.com</p>

          <div className='Contact__Social_icons'>
                <span className='Social__icons'><FaFacebookSquare size={35}/></span>
                <span className='Social__icons'><BsInstagram size={35}/></span>
                <span className='Social__icons'><BsLinkedin size={35}/></span>
                <span className='Social__icons__YT'><BsWhatsapp size={35}/></span>
                
          </div>
      </div>

      <div className='NewsLetter'>
        <h4 className='Contact__h4'>Newsletter</h4>
        <p className='Contact__p'> Subscribe to our newsletter and never miss out on exclusive offers and sales</p>
        <div className='Newsletter__innput'>
              <input className='Newsletter__inpt__field' type="text" name="" id="" />
              <button className='Subcribe__btn'>Subcribe</button>
        </div>

        <p className='Newsletter__p'>Copyright © 2023</p>
      </div>

    </div>
  )
}

export default Footer