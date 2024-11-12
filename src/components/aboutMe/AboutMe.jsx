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
                        <img className="photoImg" src="./images/profile_picture.png" />   
                    </div>
                    <div className="info cardContainer">
                        <label className="title">
                            <label className="name">lantern elf</label>
                            <label className="headline">-2D Artist | Programmer-</label>
                        </label>
                        <label className="contentsInfo">
                            Greetings. I am Lantern, a 2D Artist and programmer, based on Indonesia. 
                            I specialized in art and coding. My expertise includes illustrations, concept art, 
                            front-end website development, and game development.
                        </label>
                        <div className="interact">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe