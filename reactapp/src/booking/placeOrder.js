import React,{Component} from 'react';
import './placeorder.css';

const url = "https://zomatoajulypi.herokuapp.com/menuItem";
const PostUrl = "https://zomatoajulypi.herokuapp.com/placeOrder";

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            details:'',
            amount:0,
            hotel_name:this.props.match.params.restName,
            name:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[0]:'',
            phone:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[2]:'',
            email:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[1]:'',
            address:'',
            status:'Pending'
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(PostUrl,
            {
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            }
        )
        .then(console.log("payment gateway"))
    }

    renderItems =  (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="items" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs {item.menu_price}</h4>
                    </div>
                    
                )
            })
        }else{
            return(
                <img src="/images/loader.gif" alt="loader"/>
            )
        }
    }

    render(){
        if(!sessionStorage.getItem('userData')){
            return(
                <div>
                    <h1>Login first to place booking</h1>
                </div>
            )
        }
        console.log(this.state)
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
                    <form method="POST" action="http://zompay.herokuapp.com/paynow">
                        <div className="row">
                            
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name" value={this.state.name}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>EmailId</label>
                                        <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control" name="phone" value={this.state.phone}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" name="address" value={this.state.address}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                
                            </div>
                            <input type="hidden" name="amount" value={this.state.amount}/>
                            <input type="hidden" name="id" value={this.state.id}/>
                        </div>
                        {this.renderItems(this.state.details)}
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Cost is Rs.{this.state.amount}</h2>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit} 
                        type="submit">
                                    Checkout
                        </button>
                        </form>
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
            var Totalprice = 0;
            data.map((item) => {
                Totalprice = Totalprice+parseInt(item.menu_price)
                return 'ok'
            })
            this.setState({details:data,amount:Totalprice})
        })

        
    }
}

export default PlaceOrder