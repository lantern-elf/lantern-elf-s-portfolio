import React, {useState, useEffect, useRef} from 'react';
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

    // useEffect(() => {
    //     alert("Welcome")
    // }, [])

    const handleRef = (pagesToScroll) => {
        if (pagesToScroll.current) {
            const scrollPosition = pagesToScroll.current.offsetTop + -55.5;
            window.scrollTo({ top: scrollPosition });
        }
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