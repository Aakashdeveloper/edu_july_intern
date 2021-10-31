import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component {
    constructor(props){
        super()

        this.state={
            restaurantList:''
        }
    }

    render(){
        return(
            <div className="row">
                <ListingDisplay listData={this.state.restaurantList}/>
            </div>
        )
    }

    // callapi 
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }

}

export default Listing