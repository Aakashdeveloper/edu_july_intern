import React from 'react';

const ViewDisplay = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>Rs.{item.tPrice}</td>
                        <td>{item.status}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div>
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Rest Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default ViewDisplay;