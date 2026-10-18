import React from 'react';
import Banner from './HomeComponents/Banner/Banner';
import OurServices from './HomeComponents/OurServices/OurServices';
import AboutUs from './HomeComponents/AboutUs/AboutUs';
import Features from './HomeComponents/Features/Features';
import Projects from './HomeComponents/Projects/Projects';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
            <Features></Features>
            <Projects></Projects>
        </div>
    );
};

export default Homepage;