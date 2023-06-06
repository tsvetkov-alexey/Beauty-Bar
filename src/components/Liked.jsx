import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Liked = () => {
    const cosmeticsItems = JSON.parse(localStorage.getItem('liked'));
    console.log(cosmeticsItems);
    return (
        <>
            <Header />
            <div className="liked-page">
                <h2>Понравившееся</h2>
                <div className="cards">
                    <div className="card">
                        <Link to={`/items/${cosmeticsItems.id}`}>
                            <img src={cosmeticsItems.imageUrl} alt="cream" className="cream" />
                        </Link>

                        <br />
                        <span>{cosmeticsItems.title}</span>
                        <br />
                        <br />
                        <p>{cosmeticsItems.fullTitle}</p>
                        <Link to={`/items/${cosmeticsItems.id}`}>
                            <button>
                                <span>{cosmeticsItems.price} руб.</span>
                                <img src={cosmeticsItems.cartUrl} alt="cart" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Liked;
