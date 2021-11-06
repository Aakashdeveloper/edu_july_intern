import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class MenuDisplay extends Component {
    constructor(props){
        super(props);

    }

    orderId = []
    placeOrder = (id) => {
        this.orderId.push(`${id}`)
        this.props.finalOrder(this.orderId)
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <img src={item.menu_image} style={{height:80,width:80}}/>
                            &nbsp;&nbsp; {item.menu_name} - {item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={() => {this.placeOrder(item.menu_id)}}>Add</button>
                        </div>
                        <br/>
                    </div>
                )
            })
        }
    }

    render(){
        // console.log(">>>>menu",this.props)
        return(
            <div>
                <div className="col-md-12 bg-info">
                {this.renderMenu(this.props)}
                
                </div>
            </div>
        )
    }
}

export default withRouter(MenuDisplay);