import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import './themeToggle.css'

const ThemeToggle = () => {
    const [getTheme, setTheme] = useState(false);

    const changeTheme = () => {
        setTheme(prevTheme => !prevTheme);
        
        // Toggle theme value and log
        const themeValue = getTheme ? "dark" : "light";
        console.log(themeValue === "dark" ? "Night" : "Day");
    }

    return(
        <label htmlFor="theme-toggle" className={`iconButton ${getTheme ? 'lightIconButton' : 'darkIconButton' }`} onClick={changeTheme}>
            <FontAwesomeIcon
                icon={getTheme ? faMoon : faSun}
                className={`themeIcon ${getTheme ? 'sunIcon' : 'moonIcon' }`}
            />
        </label>
    )
}

export default ThemeToggle