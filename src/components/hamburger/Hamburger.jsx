import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './hamburger.css'

const Hamburger = ({showFull, hamburgerState}) => {
    return(
        <FontAwesomeIcon icon={hamburgerState ? faX : faBars} className={`hamburgerIcon ${hamburgerState ? 'bordered' : ""  }`} onClick={() => showFull()} />
    )
}

export default Hamburger
