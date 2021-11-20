import React,{Component} from 'react';
import ViewDisplay from './ViewOrderDisplay';
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
        if(!sessionStorage.getItem('userData')){
            return(
                <div>
                    <h1>Login first to see booking</h1>
                </div>
            )
        }
        return(
            <div className="container">
                <ViewDisplay orderData={this.state.orders}/>
            </div>
        )
    }

    // get orders 
    componentDidMount(){
        axios.get(`${url}?email=${sessionStorage.getItem('userData').split(',')[1]}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;