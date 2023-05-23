import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <>
            <Header />
            <h2 className="aboutUsTitle">О нас</h2>
            <img src="assets/aboutus-1.jpg" alt="body" className="aboutUsImg" />
            <p className="aboutUsText">
                <b>Beauty Bar</b> - маркетплейс уходовой и декоративной косметики от российских
                производителей
            </p>
            <div className="info-about">
                <img src="assets/aboutus-2.jpg" alt="body" />
                <p>
                    Мы собрали более 100 российских брендов на одной площадке. Выбирай и заказывай
                    по самым приятным ценам!
                </p>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
