import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Footer from '../components/Footer';

import styles from '../scss/styles.scss';

const MoreInfo = () => {
    const [cosmetics, setCosmetics] = useState();
    const [isIngridients, setIsIngridients] = useState(false);
    const [isUsage, setIsUsage] = useState(false);
    const [isMeasuers, setIsMeasures] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const { id } = useParams();

    const showIngridients = () => {
        setIsIngridients(!isIngridients);
    };

    const showUsage = () => {
        setIsUsage(!isUsage);
    };

    const showMeasures = () => {
        setIsMeasures(!isMeasuers);
    };

    const toggleLike = () => {
        setIsLiked(!isLiked);
        const json = JSON.stringify(cosmetics);
        localStorage.setItem('liked', json);
    };

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
                        <img
                            src={isLiked ? '../assets/liked.png' : '../assets/like.png'}
                            onClick={toggleLike}
                        />
                    </div>
                    <button className="add">Добавить в корзину</button>
                    <h3>Описание</h3>
                    <p>{cosmetics.desc}</p>
                    <div className="cosmetics-properties">
                        <div className="ingridients">
                            <div className="flex">
                                <span>Ингриденты</span>
                                <span className="plus" onClick={showIngridients}>
                                    +
                                </span>
                            </div>
                            {isIngridients ? (
                                <p className="show">
                                    lorem ipsum dolorem lorem ipsum doloremlorem ipsum doloremlorem
                                    ipsum dolorem lorem ipsum dolorem
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="use">
                            <div className="flex">
                                <span>Применение</span>
                                <span className="plus" onClick={showUsage}>
                                    +
                                </span>
                            </div>
                            {isUsage ? (
                                <p className="show">
                                    lorem ipsum dolorem lorem ipsum doloremlorem ipsum doloremlorem
                                    ipsum dolorem lorem ipsum dolorem
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="measures">
                            <div className="flex">
                                <span>Меры предостороженности</span>
                                <span className="plus" onClick={showMeasures}>
                                    +
                                </span>
                            </div>
                            {isMeasuers ? (
                                <p className="show">
                                    lorem ipsum dolorem lorem ipsum doloremlorem ipsum doloremlorem
                                    ipsum dolorem lorem ipsum dolorem
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                    <span className="cosmetics-stars">
                        <img src="assets/Star-1.png" alt="star" />{' '}
                        <img src="assets/Star-1.png" alt="star" />{' '}
                        <img src="assets/Star-1.png" alt="star" />{' '}
                        <img src="assets/Star-1.png" alt="star" />{' '}
                        <img src="assets/Star-1.png" alt="star" />
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
