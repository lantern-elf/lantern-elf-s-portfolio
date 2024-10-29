import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
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