import React from 'react';
import './navbar.css'

const Navbar = () => {
    return(
        <div className="wrapper">
            <div className='logo'>
                <img src="public/Emblem.png" alt="" style={{width: "48px", height: "48px"}} />
                <label htmlFor="">lantern elf</label>
            </div>
            <ul className='menu'>
                <a href="#"><li><button type="button">Home</button></li></a>
                <a href="#"><li><button type="button">Portfolio</button></li></a>
                <a href="#"><li><button type="button">About</button></li></a>
                <a href="#"><li><button type="button">Social</button></li></a>
            </ul>
        </div>
    )
}
export default Navbar