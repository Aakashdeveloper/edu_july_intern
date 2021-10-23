import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import ProductDisplay from './productDisplay';

class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            product:JSON,
            filtered:JSON
        }
    }
    /*
    var a = [5,7,8,1,4,6,9,4];
    a.filter((data) => { return data>4})
    */

    filterProduct = (keyword) => {
        var output = this.state.product.filter((abc) => {
            return abc.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })

        this.setState({filtered:output})
    }

    render(){
        return(
            <>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <ProductDisplay prodData={this.state.filtered}/>
                <Footer year="2021" month="Oct"/>
            </>
        ) 
    }
}

export default Home