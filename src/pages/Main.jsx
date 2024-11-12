import React from 'react';
import { useRef } from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Portfolio from '../components/portfolio/Portfolio';
import AboutMe from '../components/aboutMe/AboutMe';
import './style.css'

const Main = () => {
    const homeRef = useRef(null)
    const portfolioRef = useRef(null)
    const aboutRef = useRef(null)

    const handleRef = (pagesToScroll) => {
        if (pagesToScroll.current) {
            const scrollPosition = pagesToScroll.current.offsetTop + -55.5;
            window.scrollTo({ top: scrollPosition });
        }
    }

    return(
        <>  
            <nav>
                <Navbar homeRef={homeRef} portfolioRef={portfolioRef} aboutRef={aboutRef} handleRef={handleRef} />
            </nav>
            <main>
                <Hero ref={homeRef} />
                <AboutMe ref={aboutRef} />
                <Portfolio ref={portfolioRef} />
            </main>
        </>
    )
}

export default Main