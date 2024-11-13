import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import AboutMe from '../components/aboutMe/AboutMe';
import Portfolio from '../components/portfolio/Portfolio';
import Social from '../components/social/social'
import './style.css'

const Main = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const portfolioRef = useRef(null)
    const socialRef = useRef(null)
    
    const [loading, setLoading] = useState(true); // Define loading state here

    const handleRef = (pagesToScroll) => {
        if (pagesToScroll.current) {
            const scrollPosition = pagesToScroll.current.offsetTop + -55.5;
            window.scrollTo({ top: scrollPosition });
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="loadingScreen">
                <FontAwesomeIcon icon={faSpinner} spinPulse />
            </div>
        );
    }

    return(
        <>  
            <nav>
                <Navbar homeRef={homeRef} aboutRef={aboutRef} portfolioRef={portfolioRef} socialRef={socialRef} handleRef={handleRef} />
            </nav>
            <main>
                <Hero ref={homeRef} />
                <AboutMe ref={aboutRef} />
                <Portfolio ref={portfolioRef} />
                <Social ref={socialRef} />
            </main>
        </>
    )
}

export default Main