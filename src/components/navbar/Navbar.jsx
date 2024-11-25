import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar.css"

const Navbar = ({ menuState1, menuState2, menuState3, menuState4, dark=true}) => {
    const navigate = useNavigate()
    const menuList = [
        {
            name: "Home",
            url: "/home" ,
            state: menuState1
        },
        {
            name: "Arts",
            url: "/arts",
            state: menuState2
        },
        {
            name: "Codes",
            url: "/codes",
            state: menuState3
        },
        {
            name: "About",
            url: "/about",
            state: menuState4
        },
    ];

    return(
        <nav className={`wrapper`}>
            <ul className="logo" onClick={() => navigate('/')}>
                <img src="./Emblem.png"/>
                <span>lantern elf</span>
            </ul>
            <ul className="menu">
            {
                menuList.map((item, index) => (
                    <button key={index} className={item.state ? 'active' : ''} onClick={() => navigate(item.url)}>{item.name}</button>
                ))
            }
            </ul>
        </nav>
    )
}

export default Navbar