import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hirsqdh', 'template_hjoug0o', form.current, 'user_dZRoKd0doSPXOHif41XOB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        // 
        <>
            <form ref={form} onSubmit={sendEmail} className="text-gray-600 body-font">
  <div className=" px-0 lg:px-5  mx-auto">
    <div className="lg:w-2/2 md:w-3/3 mx-auto">
      <div className="flex flex-wrap ">
        <div className="p-2 w-full">
          <div className="">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" name="user_name" id="name" className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" name="user_email" id="email" className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <input type="submit" value="Send" className="flex w-full text-white text-center  bg-red-500 border-0 py-2 justify-center focus:outline-none hover:bg-red-600 rounded text-lg"/>
        </div>
   
      </div>
    </div>
  </div>
</form>
        </>
    );
};

export default Form;