import React, { useState } from 'react'
import './Header.css'

const Header = ({ filterData, searchData, state, setState }) => {
    const [inputChange, setInputChange] = useState({
        location: '',
        price: '',
        type: ''
    })

    const handleLocationInput = event => {
        setInputChange({
            ...inputChange,
            location: event.target.value
        })
    }
    const handlePriceInput = event => {
        setInputChange({
            ...inputChange,
            price: event.target.value
        })
    }
    const handleTypeInput = event => {
        setInputChange({
            ...inputChange,
            type: event.target.value
        })
    }

    const handleChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const searchResult = searchData.filter(
            (data) => data.title.split(",")[0].toLowerCase().includes(searchTerm)
        );
        setState({
            ...state,
            propertyData: searchResult
        });
    }
    const handleFilterSubmit = (event) => {
        event.preventDefault();
        handleLocationChange(event)
        handlePriceChange(event)
        handleCheckinChange(event)
        handleTypeChange(event)
    }

    const handleLocationChange = (event) => {
        const searchTerm = event.target.location.value.toLowerCase();
        const searchResult = searchData.filter(
            (data) => data.city.toLowerCase().includes(searchTerm)
        );
        setState({
            ...state,
            propertyData: searchResult
        });
    }

    const handlePriceChange = (event) => {
        const searchTerm = event.target.price.value.toLowerCase();
        const searchResult = searchData.filter(
            (data) => data.price.toLowerCase().includes(searchTerm)
        );
        setState({
            ...state,
            propertyData: searchResult
        });
    }
    const handleCheckinChange = (event) => {
        const searchTerm = event.target.checkin.value.toLowerCase();
        const searchResult = searchData.filter(
            (data) => data.checkin.toLowerCase().includes(searchTerm)
        );
        setState({
            ...state,
            propertyData: searchResult
        });
    }
    const handleTypeChange = (event) => {
        const searchTerm = event.target.roomType.value.toLowerCase();
        const searchResult = searchData.filter(
            (data) => data.roomType.toLowerCase().includes(searchTerm)
        );
        setState({
            ...state,
            propertyData: searchResult
        });
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
                    <select id='location' onChange={handleLocationInput}>
                        <option value=''>All</option>
                        {filterData.location.map((city, idx) => (
                            <option key={idx} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className='filter'>
                    <h3>Price</h3>
                    <div className='price-input'>
                        <input type='range' min='50' max='1500' step='2' id='price' onInput={handlePriceInput} />
                        <input className='rangebox' id='amount' defaultValue={inputChange.price} />
                    </div>
                </div>
                <div className='filter'>
                    <h3>Check-in Date</h3>
                    <input type='date' id='checkin' />
                </div>
                <div className='filter'>
                    <h3>Property Type</h3>
                    <select id='roomType' onChange={handleTypeInput}>
                        <option value=''>All</option>
                        {filterData.propertyType.map((type, idx) => (
                            <option key={idx} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className='filter'>
                    <input className='filter-search' value='Search' type='submit' />
                </div>
            </form>
        </header>
    )
}

export default Header