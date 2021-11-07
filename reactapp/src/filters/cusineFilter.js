import React, {Component} from 'react';
import axios from 'axios';
import './filter.css';

const url = "https://zomatoajulypi.herokuapp.com/filter"


class CuisineFilter extends Component{
    filterCuisine = (event) => {
        let mealId = sessionStorage.getItem('mealId');
        let cuisineId = event.target.value;
        let filterUrl;
        if(cuisineId == ""){
            filterUrl = `${url}/${mealId}`
        }else{
            filterUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(filterUrl)
        .then((res) => {this.props.restPerCusinie(res.data)})
    }
    render(){
        return(
            <div className="cusineFilter">
                <center><h3>Cuisine Filter</h3></center>
                <div onChange={this.filterCuisine}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5"/>Street Food
                    </label>
                </div>
            </div>
        )
    }
}

export default CuisineFilter
