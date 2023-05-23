import React from 'react';

import styles from '../scss/styles.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotReady = () => {
    return (
        <>
            <Header />
            <div className="notReady">
                <h4>Упс!</h4>
                <p>Похоже данный раздел находится еще в разработке</p>
                <img src="assets/broken-heart.png" alt="brokenHeart" />
                <br></br>
                <button>
                    <Link to="/">
                        <span>Перейти на главную →</span>
                    </Link>
                </button>
            </div>
            <Footer />
        </>
    );
};

export default NotReady;
