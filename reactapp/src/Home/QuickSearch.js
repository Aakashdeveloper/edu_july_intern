import React from 'react';
import './QuickSearch.css'

const QuickSearch = () => {
    return(
        <div id="quicksearch">
        <span id="QuickHeading">
            Quick Searches
        </span>
        <span id="QuickSubHeading">
            Discover reståurânts by type of meal
        </span>
        <div id="mainTileContainer">

            <div class="tileContainer">
                <div class="tileComponent1">
                    <img src="sacks.png" alt="breakfast"/>
                </div>
                <div class="tileComponent2">
                    <div class="componentHeading">
                        Breakfast
                    </div>
                    <div class="componentSubHeading">
                        Start Your Day with Best Offers
                    </div>
                </div>
            </div>
            <div class="tileContainer">
                <div class="tileComponent1">
                    <img src="dinner.png" alt="dinner"/>
                </div>
                <div class="tileComponent2">
                    <div class="componentHeading">
                        Dinner
                    </div>
                    <div class="componentSubHeading">
                        End Your Day with Best Offers
                    </div>
                </div>
            </div>
            <div class="tileContainer">
                <div class="tileComponent1">
                    <img src="drinks.png" alt="drinks"/>
                </div>
                <div class="tileComponent2">
                    <div class="componentHeading">
                        Drinks
                    </div>
                    <div class="componentSubHeading">
                        Party Hard with our best offers
                    </div>
                </div>
            </div>
            <div class="tileContainer">
                <div class="tileComponent1">
                    <img src="nightlife.png" alt="nightlife"/>
                </div>
                <div class="tileComponent2">
                    <div class="componentHeading">
                        NightLife
                    </div>
                    <div class="componentSubHeading">
                        Party Hard with our best offers
                    </div>
                </div>
            </div>
            <div class="tileContainer">
                <div class="tileComponent1">
                    <img src="lunch.png" alt="lunch"/>
                </div>
                <div class="tileComponent2">
                    <div class="componentHeading">
                        Lunch
                    </div>
                    <div class="componentSubHeading">
                        Have Lunch with our best offers
                    </div>
                </div>
            </div>
            <div class="tileContainer">
                <div class="tileComponent1">
                    <img src="sacks.png" alt="snacks"/>
                </div>
                <div class="tileComponent2">
                    <div class="componentHeading">
                        Snacks
                    </div>
                    <div class="componentSubHeading">
                        Mumching with our best offers
                    </div>
                </div>
            </div>
        </div> 
    </div>
    )
}

export default QuickSearch;