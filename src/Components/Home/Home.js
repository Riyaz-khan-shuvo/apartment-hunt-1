import React from 'react';
import Apartment from '../Apartment/Apartment';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Apartment></Apartment>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;