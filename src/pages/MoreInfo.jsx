import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Footer from '../components/Footer';

import styles from '../scss/styles.scss';

const MoreInfo = () => {
    const [cosmetics, setCosmetics] = useState();
    const { id } = useParams();
    useEffect(() => {
        async function fetchCosmetics() {
            try {
                const { data } = await axios.get(
                    'https://646a62a870b2302c85e426d4.mockapi.io/items/' + id,
                );
                setCosmetics(data);
            } catch (error) {
                console.log('ОШИБКА ПРИ ПОЛУЧЕНИИ КОСМЕТИКИ', error);
            }
        }

        fetchCosmetics();
    }, []);

    if (!cosmetics) {
        return (
            <div class="loaderContainer">
                <div class="loader"></div>
            </div>
        );
    }
    return (
        <div>
            <Header />
            <div className="moreInfo">
                <img src={cosmetics.imageUrl} className="cream" />
                <div className="info">
                    <p className="cosmetics-title">{cosmetics.title}</p>
                    <h2>{cosmetics.fullTitle}</h2>
                    <div className="addToCart">
                        <p>{cosmetics.price} руб.</p>
                        <img src={cosmetics.likeUrl} />
                    </div>
                    <button className="add">Добавить в корзину</button>
                    <h3>Описание</h3>
                    <p>{cosmetics.desc}</p>
                    <div className="cosmetics-properties">
                        <div className="ingridients">
                            <span>Ингриденты</span>
                            <span className="plus">+</span>
                        </div>
                        <div className="use">
                            <span>Применение</span>
                            <span className="plus">+</span>
                        </div>
                        <div className="measures">
                            <span>Меры предостороженности</span>
                            <span className="plus">+</span>
                        </div>
                    </div>
                    <span className="cosmetics-stars">
                        <img src="../assets/Star-1.png" alt="star" />{' '}
                        <img src="../assets/Star-1.png" alt="star" />{' '}
                        <img src="../assets/Star-1.png" alt="star" />{' '}
                        <img src="../assets/Star-1.png" alt="star" />{' '}
                        <img src="../assets/Star-1.png" alt="star" />
                        {cosmetics.stars}
                    </span>
                    <h2 className="review">Отзывы (0)</h2>

                    <button>Написать отзыв</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MoreInfo;
