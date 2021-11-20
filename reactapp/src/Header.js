import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom'

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        this.setState({userData:''});
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userData');
        this.props.history.push('/')

    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArry = [data.name,data.email,data.phone,data.role];
            sessionStorage.setItem('userData', outputArry);
            return(
                <>
                    <button className="btn btn-info">Hi {this.state.userData.name}</button>
                    &nbsp;
                    <button className="btn btn-warning" onClick={this.handleLogout}>Logout</button>
                </>
            )
        }else{
            return(
                <>
                    <Link to="/login" className="btn btn-success">
                        <span className="glyphicon glyphicon-log-in"> LogIn</span>
                    </Link> &nbsp;
                    <Link to="/register" className="btn btn-warning">
                        <span className="glyphicon glyphicon-user"> Register</span>
                    </Link>
                </>
            )
            
        }
    }
    render(){
        return(
            <header id="header">
                <div id="logo_main">
                    <Link to="/"><h1 id="headingListing">E!</h1></Link>
                    <Link to="/viewOrder">Orders</Link>
                </div>
                <div className="logoRight">
                    {this.conditionalHeader()}
                    
                </div>
            </header>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => { 
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);

