import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import {aboutsaymon} from '../../Image/aboutsaymon.png'
const About = () => {
    return (
        <>
        <div className="min-h-screen  px-8 py-12 flex flex-wrap bg-gray-900">
            
            <div className="w-full lg:w-2/6 mt-11">
                <LazyLoadImage src="https://i.ibb.co/GJnVHcw/aboutsaymon.png" delayTime="2000"  placeholderSrc="" />
            </div>
            <div className="w-full lg:w-4/6 text-white">
                <h1 className="text-center  divide-y divide-yellow-500 text-4xl ">About Me</h1>
                
                <p className="text-white mt-5 ml-4">I'm an enthusiastic, responsible and hard working person. I’m always hungry for new technologies, a great fascination with programming and web development. I’m comfortable with Javascript (ES6), Node.js, React.js, Next.js, Express.Js, Bootstrap, Tailwind.css, Material UI, HTML5, CSS3, Firebase, and MongoDB.</p>
                <p className="mt-5 ml-4">I want to be Professional Full Stack Developer, it's my dream.I love to learn new tech and new languages.</p>
                
                <h1 className="text-center text-4xl ">Basic Info</h1>
            </div>
            </div>    
      
            
        </>
    );
};

export default About;