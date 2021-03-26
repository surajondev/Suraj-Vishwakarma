import React from 'react';
import logo_black from '../img/black.png'

const Header = ()=>{
    return(
        <div>
            <header>
                <ul className="nav-bar">
                    <li className="nav-link"><img className="logo-img" alt="surajondev" src={logo_black}></img></li>
                    <li className="nav-link">Projects</li>
                    <li className="nav-link">Resume</li>
                    <li className="nav-link">Contact Me</li>
                </ul>
            </header>
        </div>
        
    )
}


export default Header