import React, { useState } from "react";
import { BiBed, BiBath, BiHeart, BiX, BiShapeSquare } from "react-icons/bi";
import "./Card.css";

const Card = ({ item, state }) => {
    const [heart, setHeart] = useState(false);
    const handleChange = (event) => {
        setHeart(!heart);
        console.log(event.target.value);
    };
    return (
        <article className="card">
            <img src={item.images[0]} alt="/" />
            <div className="body">
                <div className="price">
                    <h3 className="price-heading">
                        {item.price}<span className="sub-heading">/{item.qualifier}</span>
                    </h3>
                    {heart ? (
                        <BiX
                            className="icon X"
                            size={"2em"}
                            onClick={(event) => handleChange(event)}
                        />
                    ) : (
                        <BiHeart
                            className="icon fav"
                            size={"2em"}
                            onClick={(event) => handleChange(event)}
                        />
                    )}
                </div>
                <div className="desc">
                    <h2 className="title">{item.title.split(",")[0]}</h2>
                    <h4 className="location">{item.publicAddress}</h4>
                </div>
            </div>
            <div className="card-footer">
                <div>
                    <BiBed className="icon" />
                    <p>{item.bedrooms}Beds</p>
                </div>
                <div>
                    <BiBath className="icon" />
                    <p>{Math.ceil(item.bathrooms)}Bathrooms</p>
                </div>
                <div>
                    <BiShapeSquare className="icon" />
                    <p>Sqft</p>
                </div>
            </div>
        </article>
    );
};

export default Card;
