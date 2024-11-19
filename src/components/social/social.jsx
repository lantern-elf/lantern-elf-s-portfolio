import React from "react";
import './social.css'

const Social = React.forwardRef((props, ref) => {
    return(
        <div className="pagesWrapper" ref={ref}>
            <div className="pagesTitle">Social</div>
            <div className="socialWrapper">
                <div className="socialItem"></div>
                <div className="socialItem"></div>
                <div className="socialItem"></div>
                <div className="socialItem"></div>
                <div className="socialItem"></div>
            </div>
        </div>
    )
})

export default Social