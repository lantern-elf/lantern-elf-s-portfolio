import React from "react";
import './aboutMe.css'

const AboutMe = React.forwardRef((props, ref) => {
    return(
        <div className="pagesWrapper" ref={ref}>
            <div className="pagesTitle">
                about me
            </div>
            <div className="profileWrapper">
                <div className="profileCard">
                    <div className="photo cardContainer">
                        <div className="photoImg" style={{backgroundImage: 'url("./images/profile_picture.png")'}} />   
                    </div>
                    <div className="info cardContainer">
                        
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe