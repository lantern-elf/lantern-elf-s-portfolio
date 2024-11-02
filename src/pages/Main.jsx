import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Portfolio from '../components/portfolio/Portfolio';
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
            </main>
        </>
    )
}

export default Main