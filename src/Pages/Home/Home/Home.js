import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <Feature></Feature>
        </div>
    );
};

export default Home;