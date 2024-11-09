import React from 'react';
import './hero.css'

const Hero = React.forwardRef((props, ref) => {
    return(
        <div className='pagesWrapper' ref={ref}>
            <div className='headerImg' style={{backgroundImage: 'url("./images/banner.png")'}}>
            </div>
        </div>
    )
})

export default Hero