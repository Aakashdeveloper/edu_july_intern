import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';

const Home = () => {
    return(
        <div id="main">
            <Search/>
            <QuickSearch/>
        </div>
    )
}

export default Home;