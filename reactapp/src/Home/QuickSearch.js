import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickSearch = (props) => {
  
    const listMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="breakfast"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(

        <div id="quicksearch">
        <span id="QuickHeading">
            Quick Searches
        </span>
        <span id="QuickSubHeading">
            Discover reståurânts by type of meal
        </span>
        <div id="mainTileContainer">
            {listMeal(props)}
        </div> 
    </div>
    )
}

export default QuickSearch;