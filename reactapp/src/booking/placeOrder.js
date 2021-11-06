import React,{Component} from 'react';
import './placeorder.css'

const url = "http://zomatoajulypi.herokuapp.com/menuItem"

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    renderItems =  (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="items">
                        <img src={item.menu_image} style={{height:200,width:200}}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs {item.menu_price}</h4>
                    </div>
                    
                )
            })
        }
    }

    render(){
        return(
            <div className="container">
                <br/>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>
                            Your order from {this.props.match.params.restName} is below:
                        </h3>
                    </div>
                    <div className="panel-body">
                        {this.renderItems(this.state.details)}
                    </div>
                </div>
            </div>
            
        )
    }

    componentDidMount(){
        var menuItem =  sessionStorage.getItem('menu');
        var orderId = []
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => 
        {
            this.setState({details:data})
        })
        
    }
}

export default PlaceOrder