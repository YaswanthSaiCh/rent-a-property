import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='text-header'>
                <h1 className='heading'>Search Properties for Rent</h1>
                <div className='search-box'>
                    <input type='text' className='search' />
                    <button className='search-button'>Search</button>
                </div>
            </div>
            <div className='filter-box'>
                <div className='filter'>
                    <h3>Location</h3>
                    <input type='text' />
                </div>
                <div className='filter'>
                    <h3>Location</h3>
                    <input type='menu' />
                </div>
                <div className='filter'>
                    <h3>Location</h3>
                    <input type='date' />
                </div>
                <div className='filter'>
                    <h3>Location</h3>
                    <input type='text' />
                </div>
                <button className='filter-search'>Search</button>
            </div>
        </header>
    )
}

export default Header