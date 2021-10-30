import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom'

const ListingDisplay = () => {
    return(
        <>
        <header id="header">
            <div id="logo_main">
                <Link to="/"><h1 id="headingListing">E!</h1></Link>
            </div>
        </header>
        <div id="mainListing">
            <div id="filter">
                Filter
                <input type="radio"/>Female
                <input type="radio"/>Male
                <hr/>
                <input type="checkbox"/>Red
                <input type="checkbox"/>Yellow
                <input type="checkbox"/>Green
            </div>
            <div id="content">
                <div class="list_content">
                    Content 1
                </div>
                <div class="list_content">
                    Content 2
                </div>
                <div class="list_content">
                    Content 3
                </div>
            </div>
        </div>
        </>
    )
}

export default ListingDisplay;