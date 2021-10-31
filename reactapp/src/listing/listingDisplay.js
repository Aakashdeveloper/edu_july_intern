import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom';
import Header from '../Header';

const ListingDisplay = (props) => {

    const renderList = ({listData}) => {
        if(listData){
            return listData.map((item) => {
                return(
                    <div className="item">
                            <div className="row">
                                <div className="col-md-5">
                                    <img className="Image" src={item.restaurant_thumb}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name rating">{item.rating_text}</div>
                                        <div className="city_name rating">Rs.{item.cost}</div>
                                        <div class="labelDiv">
                                            <span className="label label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;
                                            <span className="label label-success">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="label label-warning">
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="label label-danger">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                )
            })
        }else{
            return(
                <div>
                    <img src="/images/loader.gif"/>
                    <h3>loading....</h3>
                </div>
            )
            
        }

    }

    return(
        <>
        <Header/>
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
                {renderList(props)}
            </div>
        </div>
        </>
    )
}

export default ListingDisplay;