import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isHidden, setIsHidden] = useState(true);
    const { likedCount, items, likedItems } = useSelector((state) => state.cart);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    const isMounted = useRef(null);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(likedItems);
            localStorage.setItem('liked', json);
        }
        isMounted.current = true;
    }, [items]);

    const blockStyles = {
        display: isHidden ? 'none' : 'block',
        opacity: isHidden ? 0 : 1,
        paddingTop: isHidden ? '0' : '40px',
        paddingBottom: isHidden ? '0' : '40px',
        transition: 'padding-top 0.5s ease',
    };

    return (
        <header>
            <div className="header-1">
                <Link to="/">
                    <h1>Beauty Bar</h1>
                </Link>
            </div>
            <div className="header-2">
                <ul className="info">
                    <Link to="/about-us">
                        <li>О нас</li>
                    </Link>
                    <Link to="/NotReady">
                        <li>Блог</li>
                    </Link>

                    <Link to="/delivery">
                        <li>Доставка</li>
                    </Link>
                    <Link to="/contacts">
                        <li>Контакты</li>
                    </Link>
                    <Link to="/NotReady">
                        <li>Партнерам</li>
                    </Link>
                </ul>
                <Search />
                <ul className="icons">
                    <li className="profile">
                        <img src="../assets/profile.png" alt="profile" />
                    </li>
                    <Link to="/liked">
                        <li className="liked">
                            <img src="../assets/liked.png" alt="profile" />
                        </li>
                    </Link>
                    <li className="cart">
                        <img src="../assets/cart.png" alt="profile" />
                    </li>
                </ul>
            </div>
            <div className="header-3">
                <div className="inside">
                    <ul>
                        <li>
                            <img
                                src="../assets/menu.png"
                                alt="menu"
                                className="header-3-menu"
                                onClick={toggleVisibility}
                            />
                        </li>

                        <div className="header-3-inside-icons" style={{ display: 'none' }}>
                            <Link to="/liked">
                                <li className="liked">
                                    <img src="../assets/liked.png" alt="profile" />
                                    <span className="count">{likedCount}</span>
                                </li>
                            </Link>
                            <li className="cart">
                                <img src="../assets/cart.png" alt="profile" />
                            </li>
                        </div>

                        <li className="header-3-el">Каталог</li>
                        <li className="header-3-el">Новинки</li>
                        <li className="header-3-el">Бренды</li>
                        <li className="header-3-el">Скидки</li>
                    </ul>
                </div>
            </div>

            <div className="header-4" style={blockStyles}>
                <ul>
                    <Link to="/NotReady" onClick={toggleVisibility}>
                        <li>
                            Каталог
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                    <Link to="/NotReady" onClick={toggleVisibility}>
                        <li>
                            Новинки
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                    <Link to="/NotReady" onClick={toggleVisibility}>
                        <li>
                            Бренды
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                    <Link to="/NotReady" onClick={toggleVisibility}>
                        <li>
                            Скидки
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                    <Link to="/delivery" onClick={toggleVisibility}>
                        <li>
                            Доставка
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                    <Link to="/about-us" onClick={toggleVisibility}>
                        <li>
                            О нас
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                    <Link to="/contacts" onClick={toggleVisibility}>
                        <li>
                            Контакты
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                    <Link to="/NotReady" onClick={toggleVisibility}>
                        <li>
                            Партнеры
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                    <Link to="/NotReady" onClick={toggleVisibility}>
                        <li>
                            Личный кабинет
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
