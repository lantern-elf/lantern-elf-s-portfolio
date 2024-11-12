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
                        <div className="contentsInfo">
                            <p>
                                Greetings. I am Lantern, a <i>2D Artist</i> and <i>Programmer</i>, based on Indonesia. 
                                I specialized in art and coding. My expertise includes illustration, concept art, 
                                front-end website development, and game development.
                            </p>
                        </div>
                        <div className="interest">
                            <a href="" download>
                                <button className="">Download Full</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe