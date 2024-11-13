import React from 'react';
import { useState } from 'react';
// import ThemeToggle from '../themeToggle/ThemeToggle';
import Hamburger from '../hamburger/Hamburger';
import './navbar.css'

const Navbar = ({ homeRef, portfolioRef, aboutRef, socialRef, handleRef}) => {
    const [getHamburger, setHamburger] = useState(false)
    const [menuList, setMenuList] = useState([
        {
            name: 'home',
            ref: homeRef,
            state: false
        },
        {
            name: 'about',
            ref: aboutRef,
            state: false
        },
        {
            name: 'portfolio',
            ref: portfolioRef,
            state: false
        },
        {
            name: 'social',
            ref: socialRef,
            state: false
        }
    ])

    
    const showFull = () => {
        setHamburger(prevHamburger => !prevHamburger)
    }

    const toggleMenuState = (index) => {
        setMenuList(prevMenuList =>
            prevMenuList.map((item, i) => ({
                ...item,
                state: i === index
            }))
        );
    };

    return(
        <div className="wrapper">
            <div className='section logo'>
                <a href="">
                    <img src="./images/Emblem.png" alt=""/>
                    <label htmlFor="">lantern elf</label>
                </a>
            </div>
            <ul className='section menu'>
                {   
                    menuList.map((item, index) => (
                        <li key={index} 
                            onClick={() => {
                                item.ref && handleRef(item.ref);  
                                toggleMenuState(index);
                            }} 
                            className={`menuItem ${getHamburger ? 'slide-in' : 'slide-out'}`}
                        >
                            <a>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
                        </li>
                    ))
                }
                <li>
                    <Hamburger showFull={showFull} hamburgerState={getHamburger}/>
                </li>
                <ul className={`hamburgerMenu ${getHamburger ? 'slide-in' : 'slide-out'}`}>
                    {
                        menuList.map((item, index) => (
                            <li key={index} onClick={() => { item.ref && handleRef(item.ref); showFull();}}>
                                <a>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
                            </li>
                        ))
                    }
                </ul>
            </ul>
        </div>
    )
}

export default Navbar