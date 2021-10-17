import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>Developer Funnel {props.year} {props.month}</h3>
            </center>
        </React.Fragment>
    )
}

export default Footer;