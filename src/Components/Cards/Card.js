import React from "react";
import { BiBed, BiBath, BiHeart, BiShapeSquare } from "react-icons/bi";
import "./Card.css";

const Card = () => {
    return (
        <article className="card">
            <img
                src="https://a0.muscache.com/im/pictures/25624825/6ef8e934_original.jpg?im_w=720"
                alt="/"
            />
            <div className="body">
                <div className="price">
                    <h3>Price</h3>
                    <BiHeart className="icon fav" size={"2em"} />
                </div>
                <h3>Name</h3>
                <h5>Desc</h5>
            </div>
            <div className="footer">
                <div>
                    <BiBed className="icon" />
                    <p>Bed</p>
                </div>
                <div>
                    <BiBath className="icon" />
                    <p>Bath</p>
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
