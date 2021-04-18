import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    let makeAdmin;
    let role = 'user';
    if (admin.length > 0) {
        makeAdmin = admin.find(make => make.email === loggedInUser.email);
        if (makeAdmin) {
            role = 'admin';
        }

    }
    console.log(role);

    return (
        <div className="sidebar-container fixed">
            <Link to="/" className="text-white ms-5">Dashboard</Link>
            <div className="ms-5 mt-5 pt-5">
                {
                    role === 'admin' ?
                        <div>
                            <Link to="/bookings/id">Book</Link>
                            <br />
                            <Link to="/bookingList">Booking List</Link>
                            <br />
                            <Link to="/addReview">Add Review</Link>
                            <br />
                            <Link to="/addService">Add Service</Link>
                            <br />
                            <Link to="/allService">All Service</Link>
                            <br />
                            <Link to="/addAdmin">Add Admin</Link>
                            <br />

                        </div>
                        : <div>
                            <Link to="/bookings/id">Book</Link>
                            <br />
                            <Link to="/bookingList">Booking List</Link>
                            <br />
                            <Link to="/addReview">Add Review</Link>
                        </div>
                }



            </div>
        </div>
    );
};

export default Sidebar;