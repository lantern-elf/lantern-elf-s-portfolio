import React from "react";
import './social.css'

const Social = React.forwardRef((props, ref) => {
    return(
        <div className="pagesWrapper" ref={ref}>
            <div className="socialWrapper">
                <div className="socialItem social"></div>
                <div className="socialItem email"></div>
            </div>
        </div>
    )
})

export default Social