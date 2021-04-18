import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Bookings from './components/Bookings/Bookings';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import AddService from './components/AddService/AddService';
import myOrder from './components/myOrder/myOrder';
import PrivateRoute from '../src/components/Login/PrivateRoute/PrivateRoute';
import BookingList from './BookingList/BookingList';
import MyOrders from './components/MyOrders/MyOrders';
import AllService from './components/AllService/AllService';
import UserTestimonial from './components/UserTestimonial/UserTestimonial';
import AddAdmin from './components/AddAdmin/AddAdmin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/bookings/:id">
          <Bookings></Bookings>
        </PrivateRoute>
        <Route path ="/login">
          <Login></Login>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/allService">
          <AllService></AllService>
        </Route>
        <Route path="/bookingList">
          <BookingList></BookingList>
        </Route>
        <Route path="/addReview">
          <UserTestimonial></UserTestimonial>
        </Route>
        <Route path="/addAdmin">
          <AddAdmin></AddAdmin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
