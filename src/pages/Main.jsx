import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Portfolio from '../components/portfolio/Portfolio';
import AboutMe from '../components/aboutMe/AboutMe';
import './style.css'

const Main = () =>{
    return(
        <>  
            <nav>
                <Navbar />
            </nav>
            <main>
                <Hero />
                <Portfolio />
                <AboutMe />
            </main>
        </>
    )
}

export default Main