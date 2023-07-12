import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Items = ({ id, title, fullTitle, price, imageUrl, cartUrl }) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggle = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="card">
            <Link to={`/items/${id}`}>
                <img src={imageUrl} alt="cream" className="cream" />
            </Link>

            <div className="like-liked" onClick={toggle}>
                {isLiked ? (
                    <img src="../assets/liked.png" alt="liked" className="img-liked" />
                ) : (
                    <img src="../assets/like.png" alt="like" className="img-like" />
                )}
            </div>
            <br />
            <span>{title}</span>
            <br />
            <br />
            <p>{fullTitle}</p>
            <Link to={`/items/${id}`}>
                <button>
                    <span>{price} руб.</span>
                    <img src={cartUrl} alt="cart" />
                </button>
            </Link>
        </div>
    );
};

export default Items;
