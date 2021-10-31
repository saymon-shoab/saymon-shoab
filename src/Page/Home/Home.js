import React from 'react';
import Banner from '../../Component/Banner/Banner';
// import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg'
import Footer from '../../Component/Share/Footer/Footer'
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
         <Footer />
        </>
    );
};

export default Home;