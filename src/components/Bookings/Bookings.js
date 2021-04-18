import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import Navbar from '../Home/Header/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Bookings.css';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const Bookings = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        const bookingData = {
            service: service.name,
            email: data.email,
            deadline: data.deadline,
            detail: data.detail,
            category: data.category
        };
        const url = `http://localhost:5000/addBookings`;

        console.log(bookingData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(res => console.log('server res', res))
        alert('Details Submitted, Please Payment Below')
    };


    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    console.log(id);
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/bookings/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data[0]));
        
    }, [])
    return (
        <div className="row">
            <div className="col-md-4">
            <Sidebar></Sidebar>
            
            </div>
            <div className="col-md-6 mt-5 text-center">
                <h1>Welcome <span>{loggedInUser.name}</span> </h1>
                <br/>
                <h3>Your Booking is <span>{service.name}</span> </h3>
                <br/>
                <h4>Enter your work details</h4>
                <form className=" mt-5 mt-5"  onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" defaultValue="email" {...register("email")} />
                    <br/>
                    <input type="date" placeholder="Your Deadline" className="form-control" defaultValue="Deadline" {...register("deadline")} />
                    <br/>
                    <input className="form-control" defaultValue="Booking" {...register("category")} />
                    <br/>
                    
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="form-control" {...register("detail", { required: true })} placeholder="Work Details"/>
      {/* errors will return when field validation fails  */}
      <br/>
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input className="btn btn-danger" type="submit" />
                    </form>
                    <h5 className="mt-5 pt-5">Pay Here</h5>
                    <ProcessPayment></ProcessPayment>
                    <p className="pt-5">After submitting an executive will be contact with you soon !</p>
            </div>
        </div>
    );
};

export default Bookings;