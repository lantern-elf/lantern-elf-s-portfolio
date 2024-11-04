import React from "react";
import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="pagesWrapper">
            <div className="pagesTitle">
                portfolio
            </div>
            <div className="portfolioMenuWrapper">
                <a href="#">
                    <div className="container card">
                        <div className="thumbnail" style={{backgroundImage: 'url("/public/banner.png")'}} />
                        <div className="title">
                            2D ARTS
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="container card">
                        <div className="thumbnail codes" style={{backgroundImage: 'url("public/code2.png")'}} />
                        <div className="title">
                           CODES
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
