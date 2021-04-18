import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css';

const HeaderMain = () => {
    
    return (
        <div className="main-header">
          
           <div className="main-content text-center">
               <h1 className="text-white">Welcome To <span className="text-brands">NEXT IT</span> </h1>
               <br/>
               <h2 className="text-white">Perfect IT Solution For Your Business</h2>
               <br/>
               <Link to="#OurClient" className="btn btn-primary">Learn More</Link>
            </div> 
        </div>
    );
};

export default HeaderMain;