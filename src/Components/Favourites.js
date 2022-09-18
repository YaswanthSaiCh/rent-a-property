import React, { useContext } from "react";
import { Favourite } from "../Context/Context";
import Card from "./Cards/Card";
import "./Cards/CardList.css";
import "./Favourites.css"

const Favourites = () => {
    const { favourites } = useContext(Favourite);
    return (
        <div className="favourites-component">
            {favourites.length === 0 ? (
                <h1 className="nofavourites"> No Favourites added</h1>
            ) : (
                <div>
                    <h1 className="favourites-header">Favourites</h1>
                    <div className="dataGrid">
                        {favourites.map((item) => (
                            <Card key={item.id} className="dataItem" item={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Favourites;
