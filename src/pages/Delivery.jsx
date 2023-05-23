import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Delivery = () => {
    return (
        <>
            <Header />
            <h2 className="delivery-header">Доставка</h2>
            <div className="delivery-block">
                <div className="delivery-block-text">
                    <p>
                        Мы доставляем продукцию по России курьерскими службами СДЭК, Яндекс.Доставка
                        и почта России. Бесплатная доставка осуществляется до пунктов выдачи СДЭК и
                        Яндекс.Доставка, постаматов и почтовых отделений по РФ при заказе от 1000
                        рублей!
                    </p>
                    <br />
                    <p>
                        После того, как заказ обработан, вы получаете на электронную почту
                        трек-номер для отслеживания отправления.
                    </p>
                </div>
                <img src="../assets/delivery-1.jpg" alt="returnBack" />
            </div>
            <div className="return-back">
                <h2>Возврат</h2>
                <p>
                    Если Вы получили поврежденный или несоответствующий заказу товар — сообщите нам!
                    Мы оперативно исправим ситуацию!
                </p>
                <img src="../assets/delivery-2.png" alt="returnBack" />
            </div>
            <Footer />
        </>
    );
};

export default Delivery;
