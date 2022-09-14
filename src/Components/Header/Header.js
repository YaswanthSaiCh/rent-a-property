import React from 'react'
import { RiHomeSmile2Fill } from 'react-icons/ri'
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <RiHomeSmile2Fill className='icon' />
                <h3 className='appName'>Rent a Property</h3>
            </div>
            <div>
                <button> Add a Property</button>
            </div>
        </nav>
    )
}

export default Header