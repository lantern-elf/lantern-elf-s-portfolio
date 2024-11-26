import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import './about.css'

const About = () => {
    return(
        <>
            <Helmet>
                <title>{`Lantern Elf | About`}</title>
            </Helmet>
            <Navbar
                menuState1={false}
                menuState2={false}
                menuState3={false}
                menuState4={true}
            />
            <div className="pages-wrapper"> 
                <div className="about">
                    <div className="about-title">
                        about me
                    </div>
                    <div className="profile-picture">
                        <div className="image-wrapper">
                            <img src="./images/profile_picture.png" alt="" />
                        </div>
                    </div>
                    <div className="about-info">
                        <p>
                            Greetings. I am Lantern, a 2D Artist and programmer, based on Indonesia.
                            I specialized in art and coding. My expertise includes illustrations, concept art, 
                            front-end website development, and game development.
                        </p>
                    </div>
                    <div className="about-links">
                    </div>
                </div>
            </div>
        </>
    )
}

export default About