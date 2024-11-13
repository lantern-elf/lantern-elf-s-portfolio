import React from 'react';
import './hero.css'

const Hero = React.forwardRef((props, ref) => {
    return(
        <div className='pagesWrapper' ref={ref}>
            <div className='headerImg' style={{backgroundImage: 'url("./images/banner.png")'}}>
                <div className='hero'>
                    <div className='heroTitle'>
                        <div className='heroTitleName' htmlFor="">Lantern Elf</div>
                        <div className='heroTitleHeadline' htmlFor="">-2D Artist | Programmer-</div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Hero