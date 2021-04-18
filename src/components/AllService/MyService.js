import React from 'react';

const MyService = ({service}) => {

    const deleteService = (id) => {
            console.log(id);
            
    }

    return (
        
        <div>
            <div className="pt-5">
            <h4>Service Name : <span class="text-primary"> {service.name}</span></h4>
            <p> Short Details : {service.detail}</p>
            </div>
            <button onClick={() => {deleteService(service._id)}} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default MyService;