import React, { useContext } from "react";
import { BiBed, BiBath, BiHeart, BiX, BiStar } from "react-icons/bi";
import { Favourite } from "../../Context/Context";
import "./Card.css";

const Card = ({ item }) => {

    const { favourites, setFavourites } = useContext(Favourite)

    const handleAddFav = () => {
        setFavourites([...favourites, item])
    }
    const handleDelFav = () => {
        setFavourites(favourites.filter(removeFav => removeFav.id !== item.id))
    }

    return (
        <article className="card">
            <img src={item.images[0]} alt="/" />
            <div className="body">
                <div className="price">
                    <h3 className="price-heading">
                        {item.price}<span className="sub-heading">/{item.qualifier}</span>
                    </h3>
                    {favourites.includes(item) ? (
                        <BiX
                            id={item.id}
                            className="icon X"
                            size={"2em"}
                            onClick={() => handleDelFav()}
                        />
                    ) : (
                        <BiHeart
                            id={item.id}
                            className="icon fav"
                            size={"2em"}
                            onClick={() => handleAddFav()}
                        />
                    )}
                </div>
                <div className="desc">
                    <h2 className="title">{item.title.split(",")[0]}</h2>
                    <h4 className="location">{item.publicAddress}</h4>
                    <p className="checkin">Check-in Date:{item.checkin}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="footer-items">
                    <BiBed className="icon" />
                    <h5 className="footer-icon-text">{item.bedrooms}Beds</h5>
                </div>
                <div className="footer-items">
                    <BiBath className="icon" />
                    <h5 className="footer-icon-text">{Math.ceil(item.bathrooms)}Bathrooms</h5>
                </div>
                <div className="footer-items">
                    <BiStar className="icon" />
                    <h5 className="footer-icon-text">{item.avgRating}</h5>
                </div>
            </div>
        </article>
    );
};

export default Card;
