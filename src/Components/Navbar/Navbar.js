import React from 'react'
import { RiHomeSmile2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Favourites from '../Favourites'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='logo'>
                <RiHomeSmile2Fill className='icon' />
                <h3 className='appName'>Rent a Property</h3>
            </Link>
            <div className='actions'>
                <Link to='/favourites' className='fav-button'>Favourites</Link>
                <Link to='/add-a-property' className='button'>Add a Property</Link>
            </div>
        </nav>
    )
}

export default Navbar