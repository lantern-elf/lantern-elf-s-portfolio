import React from "react";
import './portfolio.css';

const Portfolio = React.forwardRef((props, ref) => {
    return (
        <div className="pagesWrapper"  ref={ref}>
            <div className="pagesTitle">
                portfolio
            </div>
            <div className="portfolioMenuWrapper">
                <div className="content">
                    <div className="container card">
                        <a href="#">
                            <div className="thumbnail" style={{backgroundImage: 'url("./images/banner.png")'}} />
                            <div className="title">
                                2d arts
                            </div>
                        </a>
                    </div>
                    <div className="container card">
                        <a href="#">
                            <div className="thumbnail" style={{backgroundImage: 'url("./images/code2.png")'}} />
                            <div className="title">
                                codes
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Portfolio;
