import React from 'react';
import { Link } from 'react-router-dom';


export const Menu = () => {
    document.body.classList.remove('background-no')
    return (
        <div className="menu" style= {{ display: "flex"}}>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                 <Link to="/rain">Rain</Link>
            </div>
            {/* <div>
                <Link to="/fronteras">Fronteras</Link>
            </div> */}
            <div>
                <Link to="/tiktok">TikTok</Link>
            </div>
            <div>
                <Link to="/twitter">Twitter</Link>
            </div>
        </div>
    )
}

export const isMobile = () => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true
       }
       return false
    }