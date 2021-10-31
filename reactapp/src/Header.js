import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header id="header">
            <div id="logo_main">
                <Link to="/"><h1 id="headingListing">E!</h1></Link>
            </div>
        </header>
    )
}

export default Header;

