import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './hamburger.css'

const Hamburger = () => {
    return(
        <>
            <FontAwesomeIcon icon={faBars} className='hamburgerIcon' />
        </>
    )
}

export default Hamburger
