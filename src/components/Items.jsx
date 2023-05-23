import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ id, title, fullTitle, price, imageUrl, likeUrl, cartUrl }) => {
    return (
        <div className="card">
            <Link to={`/items/${id}`}>
                <img src={imageUrl} alt="cream" className="cream" />
            </Link>

            <img src={likeUrl} alt="like" className="like" />
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
