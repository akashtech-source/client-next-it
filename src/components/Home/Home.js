import React from 'react';
import Header from './Header/Header';
import OurClients from './OurClients/OurClients';
import Services from './Services/Services';
import Teams from './Teams/Teams';
import Testimonials from './Testimonials/Testimonials';
import Footer from '../Home/Footer/Footer';
const Home = () => {
    return (
        <div >
            <Header></Header>
            <Services></Services>
            <Teams></Teams>
            <OurClients></OurClients>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;