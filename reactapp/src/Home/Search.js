import React from 'react';
import './Search.css'

const Search = () => {
    return(
        <div id="search">
            <div id="login">
                <br/><br/>
                <a href="https://facebook.com/">
                    Login
                </a>&nbsp;
                <a href="https://youtube.com/">
                Create an Account
                </a>
            </div>
            <div class="bike">
                <img src="bike.gif" style={{height:'80',width:'80'}}/>
            </div>
            <div id="logo">
                <span>e!</span>
            </div>
            <div id="heading">
                Find The Best Reståurânts, Cafés and bärs <span id="usercity"></span>
            </div>
            <div id="dropdown">
                <select id="city">
                    <option>---SELECT LOCATION---</option>
                </select>
                <select id="restaurants">
                    
                </select>
                
            </div>
        </div>
    )
}

export default Search;