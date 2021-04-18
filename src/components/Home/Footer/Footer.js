import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="row footer-container text-white mt-5 pt-5">
            <div className="col-md-3 ms-5">
                <h1>Next IT</h1>
                <p>At vero eoset accusamus et iusto odio <br/> 
                dignissimos ducimus qui blpraesentium voluptatum <br/> 
                deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
            <div className="col-md-3 ms-5">
                <h5>User Strategy</h5>
                <h5>Product Designing</h5>
                <h5>Marketing Strategy</h5>
                <h5>IT Consultancy</h5>
                <h5>Server Security</h5>
                <h5>Product Marketing</h5>
            </div>
            <div className="col-md-4 ms-5">
                <h5>About us</h5>
                <h5>Need a Consultant?</h5>
                <h5>Our Services</h5>
                <h5>Have Any Questions?</h5>
                <h5>Meet Our Team</h5>
                <h5>Contact Us</h5>
            </div>
            <div className="col-md-3">
            </div>
            <p className="ms-5"> Copyright 2020 Torun. All rights reserved.</p>
        </div>
    );
};

export default Footer;