import React, { useState } from 'react'
import './Header.css'

const Header = ({ handleChange }) => {
    return (
        <header className='header'>
            <div className='text-header'>
                <h1 className='heading'>Search Properties to Rent</h1>
                <input type='text' placeholder='Search by title' onChange={(event) => handleChange(event)} className='search-box' />
            </div>
            <div className='filter-box'>
                <div className='filter'>
                    <h3>Location</h3>
                    <input type='text' />
                </div>
                <div className='filter'>
                    <h3>Location</h3>
                    <input type='text' />
                </div>
                <div className='filter'>
                    <h3>Location</h3>
                    <input type='text' />
                </div>
                <div className='filter'>
                    <h3>Location</h3>
                    <input type='text' />
                </div>
                <div className='filter'>
                    <button className='filter-search'>Search</button>
                </div>
            </div>
        </header>
    )
}

export default Header