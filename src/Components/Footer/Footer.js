import React from 'react'
import { FaFacebookF, FaFacebookMessenger, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <p className="footer-text">
                Rent a Property is your one stop solution to the check the rentals available Worldwide
            </p>
            <div>
                <FaFacebookF className='footer-icons' />
                <FaFacebookMessenger className='footer-icons' />
                <FaInstagram className='footer-icons' />
                <FaTwitter className='footer-icons' />
                <FaLinkedin className='footer-icons' />
            </div>
        </footer>
    )
}

export default Footer