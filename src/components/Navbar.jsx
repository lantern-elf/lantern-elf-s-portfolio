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
                <li><button type="button">Home</button></li>
                <li><button type="button">About</button></li>
                <li><button type="button">Portfolio</button></li>
                <li><button type="button">Abilities</button></li>
                <li><button type="button">Social</button></li>
            </ul>
        </div>
    )
}
export default Navbar