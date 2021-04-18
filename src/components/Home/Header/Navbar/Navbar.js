import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const {id} = useParams();
    return (
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand ms-5" href="#">Next IT</Link>
    
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav navbar-link">
        <Link to="/"class="nav-link active">Home</Link>
        <Link to="/bookings/id"class="nav-link active">Dashboard</Link>
        <Link to="login"class="nav-link active"> Login</Link>
        
      </div>
    </div>
  </div>
</nav>



    );
};

export default Navbar;