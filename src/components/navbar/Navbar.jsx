import React from 'react';
import ThemeToggle from '../themeToggle/ThemeToggle';
import './navbar.css'

const Navbar = () => {
    return(
        <div className="wrapper">
            <div className='section logo'>
                <img src="public/Emblem.png" alt=""/>
                <label htmlFor="">lantern elf</label>
            </div>
            <ul className='section menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Social</a></li>
            </ul>
            <ul className='section option'>
                <ThemeToggle />
            </ul>
        </div>
    )
}
export default Navbar