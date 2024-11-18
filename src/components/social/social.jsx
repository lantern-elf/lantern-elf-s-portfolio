import React from "react";
import './social.css'

const Social = React.forwardRef((props, ref) => {
    return(
        <div className="pagesWrapper socialWrapper" ref={ref}>
            <div className="socialItem"></div>
            <div className="socialItem"></div>
            <div className="socialItem"></div>
            <div className="socialItem"></div>
            <div className="socialItem"></div>
        </div>
    )
})

export default Social