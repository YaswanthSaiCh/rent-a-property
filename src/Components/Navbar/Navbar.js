import React from 'react'
import { RiHomeSmile2Fill } from 'react-icons/ri'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <RiHomeSmile2Fill className='icon' />
                <h3 className='appName'>Rent a Property</h3>
            </div>
            <div>
                <button className='button'>Add a Property</button>
            </div>
        </nav>
    )
}

export default Navbar