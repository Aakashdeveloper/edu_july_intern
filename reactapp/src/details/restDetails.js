import React,{Component} from 'react';
import Header from '../Header'
import axios from 'axios';
import './details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuDisplay'

const url = "http://zomatoajulypi.herokuapp.com/details"
const menu = "https://zomatoajulypi.herokuapp.com/menu"

class Details extends Component {
    constructor(){
        super()

        this.state={
            details:'',
            menuList:''
        }
    }
    render(){
        //let details = this.state.details
        let {details} = this.state
        return(
            <>
                <Header/>
                <br/>
                <div className="container">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3>{this.state.details.restaurant_name}</h3>
                        </div>
                        <div className="panel-body">
                            <img src={details.restaurant_thumb} className="sliderImage"/>
                            <button className="btn btn-danger galButton" type="button" data-toggle="modal" data-target="#myGal">Click to See Image Gallery</button>
                           
                            <hr/>
                            <h2>{details.restaurant_name}</h2>
                            <h2>{details.rating_text}</h2>
                            <h2>{details.average_rating} Star</h2>
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Contact</Tab>
                                    <Tab>Menu</Tab>
                                </TabList>

                                <TabPanel>
                                    <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Menu</h2>
                                    <MenuDisplay menudata={this.state.menuList}/>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

    //api 
    async componentDidMount(){
        let restId = this.props.match.params.restId;
        let response = await axios.get(`${url}/${restId}`);
        let menudata = await axios.get(`${menu}/${restId}`);
        console.log(response.data)
        console.log(menudata.data)
        this.setState({details:response.data[0],menuList:menudata.data})
    }
}

export default Details;