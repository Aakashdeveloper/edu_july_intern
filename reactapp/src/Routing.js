import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Listing from './listing/listingApi';
import Home from './Home/Home';
import RestDetails from './details/restDetails';
import PlaceOrder from './booking/placeOrder';
import ViewOrder from './booking/ViewOrderApi';
import Register from './login/registerComponent';
import Login from './login/loginComponent'
import Header from './Header';

const Routing = () => {
    return(
        <BrowserRouter forceRefresh={true}>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:mealId" component={Listing}/>
            <Route path="/details/:restId" component={RestDetails}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewOrder" component={ViewOrder}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    )
}

export default Routing