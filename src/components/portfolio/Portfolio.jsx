import React from "react";
import './portfolio.css';

const Portfolio = React.forwardRef((props, ref) => {
    return (
        <div className="pagesWrapper"  ref={ref}>
            <div className="pagesTitle">
                portfolio
            </div>
            <div className="portfolioMenuWrapper">
                <div className="container">
                    <div className="card item">
                        <a href="#">
                            <img src="./images/banner.png" alt="" />
                            <label className="title content">
                                2d arts
                            </label>
                        </a>
                    </div>
                    <div className="card item">
                        <a href="#">
                            <img src="./images/code.png" alt="" />
                            <label className="title content">
                                codes
                            </label>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Portfolio;
