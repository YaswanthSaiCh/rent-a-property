import React, { useEffect, useState } from 'react'
import CardsList from './Cards/CardsList'
import Footer from './Footer/Footer'
import Header from './Header/Header'


const Home = () => {
    const [state, setState] = useState({
        propertyData: [],
        isLoaded: false,
        favItems: []
    })
    const [searchData, setSearchData] = useState()

    useEffect(() => {
        fetchApi()
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
        } catch (error) {
            throw new Error(error)
        }
    }

    const handleChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const searchResult = searchData.filter(
            (data) =>
                data.title.split(",")[0].toLowerCase().includes(searchTerm)
        );
        setState({
            ...state,
            propertyData: searchResult
        });
    }


    const addToFavorite = id => {
        const data = this.state.books.find(item => item.id === id)
        setState({
            favItems: [...state.favItems, data]
        })
    }

    return (
        <div className='App'>
            <Header handleChange={handleChange} />
            <CardsList state={state} />
            <Footer />
        </div>

    )
}

export default Home