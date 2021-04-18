import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Home/Header/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const [imageURL, setImageURL] = useState(null);
   
    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            detail: data.details,
            category: data.category,
            imageURL: imageURL
        };
        const url = `https://fast-dusk-22522.herokuapp.com/addService`;
        console.log(serviceData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server', res))

    };

    const handleLogoUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'c038bb38ddf1f0408f216e6bc85fd8a6');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="row">
            <div className="col-md-3">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 mt-5 pt-5 ms-5">
                <h3>Add a service</h3>
                <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue="Service Name" {...register("name")} />
                    <br/>
                <input className="form-control" defaultValue="Service Details" {...register("details")} />
                    <br/>
                <input className="form-control" defaultValue="service" {...register("category")} />
                    <br/>
                <input className="form-control"  type="file" onChange={handleLogoUpload}  />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="btn btn-warning" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddService;