import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import aboutsaymon from '../../image/aboutsaymon.png'
const About = () => {
    return (
        <>
        <div className="min-h-screen container flex flex-wrap  bg-gray-900">
            
            <div className="w-4/12 items-center justify-center">
                <LazyLoadImage src={aboutsaymon} delayTime="2000"  placeholderSrc="" />
            </div>
            <div className="w-8/12">
                <h1 className="text-center text-white text-4xl ">About Me</h1>
            </div>
            </div>    
      
            
        </>
    );
};

export default About;