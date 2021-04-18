import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const UserTestimonial = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            location: data.location,
            category: data.category,
            review: data.review
        };
        const url = `http://localhost:5000/addReview`;


        console.log(reviewData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log('server response' ,res))
    };
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
            <h1 className="ms-5 mt-5">Give us a review</h1>
            <form className="ms-5 mt-5 pt-5"  onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" defaultValue="name" {...register("name")} />
                    <br/>
                    <input className="form-control" defaultValue="location" {...register("location")} />
                    <br/>
                    <input className="form-control" defaultValue="review" {...register("category")} />
                    <br/>
                    
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="form-control" {...register("review", { required: true })} placeholder="review"/>
      {/* errors will return when field validation fails  */}
      <br/>
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input className="btn btn-danger" type="submit" />
                    </form>
            </div>
        </div>
    );
};

export default UserTestimonial;