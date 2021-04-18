import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    return (
        <div class="flip-card col-md-4 mt-5 ms-5 p-5">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={service.imageURL} alt="Avatar" style={{width:"100px", height: "100px"}}/>
        
        <h4 className="pt-5">{service.name}</h4>
    </div>
    <div class="flip-card-back">
        <img className="w-25" src={service.imageURL} alt=""/>
        <br/>
      <h3>{service.name}</h3>
      <br/>
      <p>{service.detail}</p> 
      <Link to={`/bookings/${service._id}`} className="btn btn-outline-warning">Book Now</Link>
    </div>
  </div>
</div>
    );
};

export default Service;