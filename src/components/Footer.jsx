import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="columns">
                <div className="fst-column">
                    <h3>Beauty Bar</h3>
                    <ul>
                        <li>beautybar@mail.ru</li>
                        <li>8 (913) 113 52 64</li>
                    </ul>
                </div>
                <div className="scnd-column">
                    <ul>
                        <Link to="/delivery">
                            <li>Доставка и оплата</li>
                        </Link>
                        <Link to="/delivery">
                            <li>Правила возврата</li>
                        </Link>
                        <Link to="/NotReady">
                            <li>Есть вопросы?</li>
                        </Link>
                    </ul>
                </div>
                <div className="third-column">
                    <ul>
                        <Link to="/NotReady">
                            <li>Политика обработки персональных данных</li>
                        </Link>
                        <Link to="/NotReady">
                            <li>Оптовое сотрудничество</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
