import React, { useEffect, useState } from 'react';
import UserTestimonial from '../../UserTestimonial/UserTestimonial';
import Testimonial from './Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = `https://fast-dusk-22522.herokuapp.com/service`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    const ourReviews = reviews.filter(review => review.category ==='review');
    return (
        <div className="main-testimonial ">
            <div className="mt-5 pt-5 ms-5 ">
                <div className="ms-5 text-white">
                    <h4>TESTIMONIAL</h4>
                    <h1>What Our Client Says</h1>
                </div>
                <div className="row">
                {
                    ourReviews.length === 0 && <div className="d-flex justify-content-center pt-5 mt-5">
                        <div class="text-danger spinner-grow" style={{width: '10rem', height: '10rem'}} role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                    </div>
                }
                    {
                        ourReviews.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
                

            </div>
        </div>
    );
};

export default Testimonials;