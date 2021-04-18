import React, { useEffect, useState } from 'react';
import './Service.css';
import Service from './Service/Service';
import WebDev from '../../../images/webdev.png';
import Database from '../../../images/database.png';
import Server from '../../../images/server.png';
import Uiux from '../../../images/uiux.png';
import DigitalMarketing from '../../../images/dm.png';
import Android from '../../../images/android.png';

const Services = () => {

    const [services, setServices] = useState([]);

    const url = 'http://localhost:5000/service';
    
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    const ourServices = services.filter(ourService => ourService.category ==='service');
        
    
    
    return (
        <div className="services-container mt-5 pt-5">
            <h3 className="text-center text-brands">Our Service</h3>
            <h1 className="text-center ">We provide exclusive services 
            <br/> 
            for your business</h1>
            
            <div className='row mr-5'>
                {
                    ourServices.length === 0 && <div className="d-flex justify-content-center pt-5 mt-5">
                        <div class="text-primary spinner-grow" style={{width: '10rem', height: '10rem'}} role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                    </div>
                }
                {
                    ourServices.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;