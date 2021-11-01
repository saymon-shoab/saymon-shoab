import { faMailBulk, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import email from '../../image/email.jpg'
import Form from './Form';
const Contact = () => {
    return (
        <>
            <div className="min-h-screen min-w-full bg-black container px-12 py-12">
                <div className="text-center text-white text-4xl">
                    <h1>Get In Touch <br/> <span className="text-red-600">-------</span></h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 text-center text-gray-50 text-1xl items-center justify-center">
                {/* <div className="flex flex-wrap  lg:col-span-3 md:col-span-3 sm:col-span-1  text-gray-50 text-1xl "> */}
                    <div className="">
                    <FontAwesomeIcon
                      style={{ width: "350px", height: "50px" }}
                      className=" text-red-600"
                      icon={faPhoneAlt}
                    />
                    <p>Call Me</p>
                    <p>01710393551</p>
                    </div>
                    <div className="">
                    <FontAwesomeIcon
                      style={{ width: "350px", height: "50px" }}
                      className=" text-red-600"
                      icon={faMapMarkedAlt}
                    />
                    <p>Location</p>
                    <p>Nikunja:2,Dhaka,Bangladesh</p>
                    </div>
                    <div className="">
                    <FontAwesomeIcon
                      style={{ width: "350px", height: "50px" }}
                      className=" text-red-600"
                      icon={faMailBulk}
                    />
                    <p>Email</p>
                    <p>mdsaymonshoab@gmail.com</p>
                    </div>
                </div>
                <p className="text-gray-50 mt-10 text-center">I'd Love to hear from you. Whether you have a question or just want to say Hi, feel free to drop a message. I'll try my best to get back to you!</p>
                <div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
                <div className="w-1/2">
                     <Form />
                </div>
                <div className="w-1/2 ">
                    <img className="w-96" src="https://i.ibb.co/HxwmdXs/Mobile-messaging-Modern-communication-technology-online-chatting-SMS-texting-Modern-leisure-activity.jpg" />
                </div>
               
                </div>
                
                
            </div>
        </>
    );
};

export default Contact;