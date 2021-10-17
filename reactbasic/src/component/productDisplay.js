import React from 'react';
import './product.css';

const ProductDisplay = (props) => {

    const renderProduct = props.prodData.map((item) => {
        return(
            <>
                <div className="d-flex">
                    <img src={item.image}/>
                    <div>
                        <h4>{item.name}</h4>
                        <h5>{item.usess}</h5>
                        <p>{item.description}</p>
                        <p>Rs.{item.cost}</p>
                    </div>
                    
                </div>
                <hr/>
            </>
           
        )
    })

    return(
       <>
        <div className="container">
            {renderProduct}
        </div>
       </>
    )
}

export default ProductDisplay;