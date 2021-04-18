import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const myOrder = ({booking}) => {
    return (
        <div>
            <Sidebar></Sidebar>
            <h4>{booking.service}</h4>
            <h4>{booking.email}</h4>
            <h4>{booking.deadline}</h4>
        </div>
    );
};

export default myOrder;