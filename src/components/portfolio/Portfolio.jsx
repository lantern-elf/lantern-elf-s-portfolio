import React from "react";
import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="pageTitle">
                portfolio
            </div>
            <div className="portfolioMenuWrapper">
                <a href="#">
                    <div className="container card">
                        <div className="thumbnail" style={{backgroundImage: 'url("/public/banner.png")'}} />
                        <div className="title">
                            <label className="titleLabel" htmlFor="title 2D ARTS">2D ARTS</label>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="container card">
                        <div className="thumbnail codes" style={{backgroundImage: 'url("public/code2.png")'}} />
                        <div className="title">
                            <label className="titleLabel" htmlFor="title CODES">CODES</label>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
