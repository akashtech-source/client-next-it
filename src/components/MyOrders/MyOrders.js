import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MyOrders = ({bk}) => {
    console.log(bk);
    return (
        <div className="ms-5">
            <table className="table table-borderless">
            <thead className="bg-secondary">
                <tr>
                <th className="text-warning" scope="col">DeadLine</th>
                <th className="text-warning" scope="col">Details</th>
                <th className="text-warning" scope="col">Service</th>
                <th className="text-warning" scope="col">Email</th>
                
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <td>{bk.service}</td>
                        <td>{bk.deadline}</td>
                        <td>{bk.detail}</td>
                        <td>{bk.email}</td>
                    </tr>
                    
                
            </tbody>
        </table>
        </div>
    );
};

export default MyOrders;