import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Introduction from '../../components/Introduction';
import Blog from '../../components/Blog';
import Items from '../../components/Items';

import '../../scss/styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../redux/slices/cartSlice';

const Home = () => {
    const { items, searchValue } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const search = searchValue ? `?search=${searchValue}` : '';

    useEffect(() => {
        setLoading(true);
        fetch(`https://646a62a870b2302c85e426d4.mockapi.io/items${search}`)
            .then((res) => res.json())
            .then((arr) => {
                dispatch(setItems(arr));
                setLoading(false);
            });
        window.scrollTo(0, 0);
    }, [search]);

    const cosmeticsItems = items.map((obj) => <Items key={obj.id} {...obj} />);

    return (
        <>
            <Header />
            {searchValue ? (
                <div className="new-items">
                    <h2>Поиск по запросу: {searchValue}</h2>
                    {cosmeticsItems.length > 0 ? (
                        <div className="cards">{cosmeticsItems}</div>
                    ) : (
                        'К сожалению по вашему запросу ничего не найдено'
                    )}
                </div>
            ) : (
                <>
                    <Introduction />
                    <div className="new-items">
                        <div className="new-sign">
                            <h2>Новинки</h2>
                            <div className="stain"></div>
                        </div>
                        <div className="cards">{cosmeticsItems}</div>
                    </div>

                    <Blog />
                </>
            )}
            <Footer />
        </>
    );
};

export default Home;
