import React from "react";
import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <a href="#">
                <div className="container card">
                    <div className="thumbnail" style={{backgroundImage: 'url("/public/banner.png")'}}>
                        
                    </div>
                    <div className="title">
                        <label className="titleLabel" htmlFor="title 2D ARTS">2D ART</label>
                    </div>
                </div>
            </a>
            <a href="">
                <div className="container card">
                    <div className="thumbnail">
                        
                    </div>
                    <div className="title">
                    <label className="titleLabel" htmlFor="title CODES">CODES</label>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Portfolio;
