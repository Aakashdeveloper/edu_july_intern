import React,{Component} from 'react';
import ViewDisplay from './ViewOrderDisplay';
import Header from '../Header';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/viewOrder"

class ViewOrder extends Component {
    constructor(){
        super()

        this.state={
            orders:''
        }
    }
    render(){
        return(
            <div className="container">
                <Header/>
                <ViewDisplay orderData={this.state.orders}/>
            </div>
        )
    }

    // get orders 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;