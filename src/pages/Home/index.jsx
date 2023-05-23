import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Introduction from '../../components/Introduction';
import Blog from '../../components/Blog';
import Items from '../../components/Items';

import styles from '../../scss/styles.scss';

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://646a62a870b2302c85e426d4.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setLoading(false);
            });
        window.scrollTo(0, 0);
    }, []);

    const cosmeticsItems = items.map((obj) => <Items key={obj.id} {...obj} />);
    console.log(cosmeticsItems);

    return (
        <>
            <Header />
            <Introduction />

            <div className="new-items">
                <div className="new-sign">
                    <h2>Новинки</h2>
                    <div className="stain"></div>
                </div>
                <div className="cards">{cosmeticsItems}</div>
            </div>

            <Blog />
            <Footer />
        </>
    );
};

export default Home;
