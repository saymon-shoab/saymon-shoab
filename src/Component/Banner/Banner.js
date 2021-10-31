import React from 'react';
import {LazyLoadImage } from 'react-lazy-load-image-component';
import saymon from './../../image/saymon2.png'
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typical from 'react-typical'

const Banner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center"
        style={{
            // background: '#091c29',
          }}
        >
            <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="w-full w-3/3">
            <LazyLoadImage src={saymon} delayTime="5000"  placeholderSrc=""/>
            </div>

            <div className="md:text-left w:2/5">
               <h2 className="text-4xl font-bold text-gray-200"> HI, I am </h2> 
               <h2 className="text-4xl font-bold text-gray-300">Saymon Shoab</h2>
               <Typical
                steps={['MERN Stuck Developer. ',
                2000,
                'Web-Developer.',
                2000,
                'Front-End-Developer.',
                2000,
                'Javascript Developer.',
                2000,
                'React Developer.',
                2000,
                'Programmer.',
                2000,
            ]}
                loop={Infinity}
                wrapper="p"
                className="inline-block text-red-600 font-bold text-3xl"
                style={{color:"#red",}}
                /> 
               <p className="text-white text-1xl w-2/3" >A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.</p> 
               <button className=" text-blue-50 menu-list-item px-3 py-3 flex font-semibold hover:bg-red-500 bg-red-700 rounded-md" type="">
                <a href="https://drive.google.com/file/d/1UoIz18v9F6j4-bMDYAnBF5vBB-0i0mMO/view" target="blank" alt="/">   Download Resume</a>
                </button>
            </div>
            </div>
        </div>
    );
};

export default Banner;