import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Listing from './listing/listingApi';
import Home from './Home/Home';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:mealId" component={Listing}/>
        </BrowserRouter>
    )
}

export default Routing