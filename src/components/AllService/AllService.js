import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MyService from './MyService';

const AllService = () => {
    const [services, setServices] = useState([]);

    const url = 'http://localhost:5000/service';
    
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    const ourServices = services.filter(ourService => ourService.category ==='service');
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-6 ms-5'>
                <h1 className="mt-5 mb-5 text-warning">All Service</h1>
                {
                    ourServices.length === 0 && <div className="d-flex justify-content-center pt-5 mt-5">
                        <div class="text-primary spinner-grow" style={{width: '10rem', height: '10rem'}} role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                    </div>
                }
                {
                    ourServices.map(service => <MyService service={service}></MyService>)
                }
        </div>
        </div>
    );
};

export default AllService;