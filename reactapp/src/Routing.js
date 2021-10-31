import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Listing from './listing/listingApi';
import Home from './Home/Home';
import RestDetails from './details/restDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:mealId" component={Listing}/>
            <Route path="/details/:restId" component={RestDetails}/>
        </BrowserRouter>
    )
}

export default Routing