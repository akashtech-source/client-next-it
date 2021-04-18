import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    
    return (
        <div className="col-md-4 mt-5 w-25 pt-5 review-container">
            <h6>{testimonial.review}</h6>
            <div className="pt-5">
            <h4>{testimonial.name}</h4>
            <p>{testimonial.location}</p>
            </div>
            
        </div>
    );
};

export default Testimonial;