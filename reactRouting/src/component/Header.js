import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <React.Fragment>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link class="navbar-brand" to="/">Developer Funnel</Link>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr/>
        </React.Fragment>
    )
}

export default Header;