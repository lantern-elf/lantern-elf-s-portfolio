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
                            <img src="./src/assets/images/banner.png" alt="" />
                            <label>
                                2d arts
                            </label>
                        </a>
                    </div>
                    <div className="card item">
                        <a href="#">
                            <img src="./src/assets/images/code.png" alt="" />
                            <label>
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
