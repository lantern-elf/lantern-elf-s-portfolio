import React, { useState, useEffect } from 'react';
import Hamburger from '../hamburger/Hamburger';
import './navbar.css';

const Navbar = ({ homeRef, portfolioRef, aboutRef, socialRef }) => {
    const [getHamburger, setHamburger] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0); // Track the active menu item

    const menuList = [
        { name: 'home', ref: homeRef },
        { name: 'about', ref: aboutRef },
        { name: 'portfolio', ref: portfolioRef },
        { name: 'social', ref: socialRef },
    ];

    const showFull = () => {
        setHamburger((prevHamburger) => !prevHamburger);
    };

    // Function to handle scroll and set the active menu item
    const handleScroll = () => {
        const offsets = menuList.map((item) =>
            item.ref.current.getBoundingClientRect().top
        );
        const visibleIndex = offsets.findIndex(
            (offset) => offset >= 0 && offset < window.innerHeight / 2
        );
        if (visibleIndex !== -1 && visibleIndex !== activeIndex) {
            setActiveIndex(visibleIndex);
        }
    };

    // Attach the scroll listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeIndex]); // Update effect when activeIndex changes

    return (
        <div className="wrapper">
            <div className="section logo">
                <a href="/">
                    <img src="./images/Emblem.png" alt="" />
                    <label>lantern elf</label>
                </a>
            </div>
            <ul className="section menu">
                {menuList.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            const offset = window.innerHeight * -0.08;
                            window.scrollTo({
                                top: item.ref.current.offsetTop + offset,
                                behavior: 'smooth',
                            });
                        }}
                        className={`menuItem ${getHamburger ? 'slide-in' : 'slide-out'}`}
                    >
                        <a className={activeIndex === index ? 'active' : ''}>
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        </a>
                    </li>
                ))}
                <li>
                    <Hamburger showFull={showFull} hamburgerState={getHamburger} />
                </li>
                <ul className={`hamburgerMenu ${getHamburger ? 'slide-in' : 'slide-out'}`}>
                    {menuList.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                const offset = window.innerHeight * -0.08;
                                window.scrollTo({
                                    top: item.ref.current.offsetTop + offset,
                                    behavior: 'smooth',
                                });
                                showFull();
                            }}
                        >
                            <a className={activeIndex === index ? 'active' : ''}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
};

export default Navbar;
