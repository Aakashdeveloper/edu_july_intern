import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import ProductDisplay from './productDisplay';

class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            product:JSON
        }
    }
    render(){
        return(
            <>
                <Header/>
                <ProductDisplay prodData={this.state.product}/>
                <Footer year="2021" month="Oct"/>
            </>
        ) 
    }
}

export default Home