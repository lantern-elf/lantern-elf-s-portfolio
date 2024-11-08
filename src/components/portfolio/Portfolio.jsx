import React from "react";
import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="pagesWrapper">
            <div className="pagesTitle">
                portfolio
            </div>
            <div className="portfolioMenuWrapper">
                <div className="content">
                    <div className="container card">
                        <a href="#">
                            <div className="thumbnail" style={{backgroundImage: 'url("/public/banner.png")'}} />
                            <div className="title">
                                2d arts
                            </div>
                        </a>
                    </div>
                    <div className="container card">
                        <a href="#">
                            <div className="thumbnail" style={{backgroundImage: 'url("public/code2.png")'}} />
                            <div className="title">
                                codes
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
