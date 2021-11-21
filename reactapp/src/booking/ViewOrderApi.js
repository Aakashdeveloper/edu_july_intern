import React,{Component} from 'react';
import ViewDisplay from './ViewOrderDisplay';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/viewOrder";
const url1 = "https://zomatoajulypi.herokuapp.com/updateOrder"

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
        if(this.props.location){
            var qparams = this.props.location.search;
            if(qparams){
                var data = {
                    "status":"Delivered",
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank_status":qparams.split('&')[0].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1]
                }
                var id = qparams.split('&')[1].split('=')[1].split('_')[1];
                fetch(`${url1}/${id}`,
                    {
                        method:'PUT',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(data)
                    })
            }
        }
        axios.get(`${url}?email=${sessionStorage.getItem('userData').split(',')[1]}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;