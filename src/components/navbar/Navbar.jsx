import React from 'react';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Hamburger from '../hamburger/Hamburger';
import './navbar.css'

const Navbar = ({ homeRef, portfolioRef, aboutRef, handleRef}) => {
    return(
        <div className="wrapper">
            <div className='section logo'>
                <a href="">
                    <img src="./images/Emblem.png" alt=""/>
                    <label htmlFor="">lantern elf</label>
                </a>
            </div>
            <ul className='section menu'>
                <li onClick={() => handleRef(homeRef)}>
                    <a>Home</a>
                </li>
                <li onClick={() => handleRef(portfolioRef)}>
                    <a>Portfolio</a>
                </li>
                <li>
                    <a>Abilities</a>
                </li>
                <li onClick={() => handleRef(aboutRef)}>
                    <a>About</a>
                </li>
                <li>
                    <a>Social</a>
                </li>
            </ul>
            <ul className='section option'>
                <ThemeToggle />
                <Hamburger />
            </ul>
        </div>
    )
}

export default Navbar