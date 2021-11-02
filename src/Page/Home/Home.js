import React from 'react';
import Banner from '../../Component/Banner/Banner';
import ParticlesBg from 'particles-bg'
import Contact from '../../Component/Contact/Contact';
import About from '../../Component/About/About';
import Project from '../../Component/Project/Project';
const Home = () => {
    return (
        <>
        <div>
        <Banner />
        <ParticlesBg color="#" num={6} type="square" bg={true} />
        </div>
        <About />
        <Project />
        <Contact />
        </>
    );
};

export default Home;