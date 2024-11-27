import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faBluesky, faGithub } from '@fortawesome/free-brands-svg-icons'
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
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">
                            <div className="image-wrapper">
                                <img src="./images/profile_picture.png" alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="about-info">
                        <p>
                            Greetings. I am <b>Lantern</b>. I am a <i>2D Artist</i> and a <i>programmer</i>, based on Indonesia.
                            I specialize in <b>art</b> and <b>coding</b>. My expertise includes illustrations, concept art, 
                            front-end website development, and game development.
                        </p>
                    </div>
                    <div className="about-links">
                        <a href="https://twitter.com/lantern_elf" target="black"><FontAwesomeIcon icon={faTwitter} className="twitter-icon"/></a>
                        <a href="https://www.instagram.com/lantern_elf" target="black"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://bsky.app/profile/lanternelf.bsky.social" target="black"><FontAwesomeIcon icon={faBluesky} /></a>
                        <a href="https://www.facebook.com/lanternelf" target="black"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://github.com/lantern-elf" target="black"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About