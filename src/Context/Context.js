import React, { createContext, useState } from 'react'

export const Favourite = createContext()
const Context = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    return (
        <Favourite.Provider value={{ favourites, setFavourites }}>
            {children}
        </Favourite.Provider>
    )
}

export default Context