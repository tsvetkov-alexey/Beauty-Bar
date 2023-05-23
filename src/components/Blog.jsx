import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="read">
            <h2>Читай в блоге</h2>
            <div className="read-info">
                <div className="image">
                    <img src="../assets/spf.jpg" alt="SPF" />
                </div>
                <div className="text">
                    <h3>Защита от солнца:</h3>
                    <br />
                    <Link to="/NotReady">
                        <p>Все что нужно знать о SPF →</p>
                    </Link>
                    <div className="stain"></div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
