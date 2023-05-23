import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contacts = () => {
    return (
        <>
            <Header />
            <h2 className="contacts-block-header">Контактные данные</h2>
            <div className="contacts-block">
                <div className="contacts-block-info">
                    <div className="email">
                        <img src="assets/mail-1.png" alt="mail" />
                        <p>beautybar@mail.ru</p>
                    </div>
                    <div className="phone">
                        <img src="assets/phone-1.png" alt="phone" />
                        <p>+7 (913) 113 52 64</p>
                    </div>
                </div>
                <div className="stain"></div>
            </div>
            <Footer />
        </>
    );
};

export default Contacts;
