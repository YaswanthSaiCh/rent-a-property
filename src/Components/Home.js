import React, { useEffect, useState } from 'react'
import CardsList from './Cards/CardsList'
import Footer from './Footer/Footer'
import Header from './Header/Header'


const Home = () => {

    const [state, setState] = useState({
        propertyData: [],
        isLoaded: false,
    })

    const [searchData, setSearchData] = useState()

    const [filterData, setFilterData] = useState({
        location: [],
        propertyType: [],
        price: [],
        checkIn: []
    })
    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchApi = async () => {
        try {
            const response = await fetch('./db.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const data = await response.json()
            setState({
                ...state,
                propertyData: data,
                isLoaded: true
            })
            setSearchData(data)
            setFilterData({
                ...filterData,
                location: [...filterData.location, ...new Set(data.map(cities => cities.city))],
                price: [...filterData.price, ...new Set(data.map(prices => prices.price))],
                propertyType: [...filterData.propertyType, ...new Set(data.map(type => type.roomType))],
                checkIn: [...filterData.checkIn, ...new Set(data.map(check => check.checkin))],

            })
        } catch (error) {
            throw new Error(error)
        }
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
        // handlePriceChange(event)
        // handleCheckinChange(event)
    }

    const handleLocationChange = (event) => {
        const searchTerm = event.target.id.toLowerCase();
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

    return (
        <div className='App'>
            <Header handleChange={handleChange} filterData={filterData} handleFilterSubmit={handleFilterSubmit} />
            <CardsList state={state} />
            <Footer />
        </div>

    )
}

export default Home