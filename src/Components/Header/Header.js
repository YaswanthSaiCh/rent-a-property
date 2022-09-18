import React, { useState } from 'react'
import './Header.css'

const Header = ({ handleChange, filterData, handleFilterSubmit }) => {
    const [locationChange, setLocationChange] = useState()

    const handleSelectChange = event => {
        setLocationChange(event.target.value)
    }


    return (
        <header className='header'>
            <div className='text-header'>
                <h1 className='heading'>Search Properties to Rent</h1>
                <input type='text' placeholder='Search by title' onChange={(event) => handleChange(event)} className='search-box' />
            </div>
            <form className='filter-box' onSubmit={handleFilterSubmit}>
                <div className='filter'>
                    <h3>Location</h3>
                    <select id={locationChange} onChange={handleSelectChange}>
                        <option value=''>All</option>
                        {filterData.location.map((city, idx) => (
                            <option key={idx} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className='filter' >
                    <h3>Price</h3>
                    <input type='text' id='price' />
                </div>
                <div className='filter'>
                    <h3>Check-in Date</h3>
                    <input type='date' id='checkin' />
                </div>
                <div className='filter'>
                    <h3>Property Type</h3>
                    <input type='text' id='propertyType' />
                </div>
                <div className='filter'>
                    <input className='filter-search' value='Search' type='submit' />
                </div>
            </form>
        </header>
    )
}

export default Header