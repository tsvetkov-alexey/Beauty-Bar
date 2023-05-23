import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <div className="content">
            <div className="first-column">
                <p>
                    Российские бренды и эффективные продукты для лица и тела.Помощь в подборе
                    идеального ухода
                </p>

                <div className="stain-1"></div>
                <div className="stain-2"></div>
            </div>
            <div className="second-column">
                <h2>Лучший уход за вашей кожей</h2>
                <Link to="/NotReady">
                    <button>Посмотреть →</button>
                </Link>
            </div>
            <div className="third-column">
                <img src="../assets/fst_scr.jpg" alt="cosmetics" />
            </div>
        </div>
    );
};

export default Introduction;
