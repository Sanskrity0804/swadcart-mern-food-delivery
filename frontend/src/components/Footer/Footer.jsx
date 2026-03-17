import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img className="logo-img" src={assets.logo_swadcart} alt="" /> */}
                <h2 className="footer-logo">SwadCart.</h2>
                <p>SwadCart is a food delivery platform that brings tasty meals from your favorite restaurants right to your doorstep. We focus on fast delivery, fresh food.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-877-346-2467</li>
                    <li>contact@swarcart.com</li>
                </ul>

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2026 © swadcart.com - All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
