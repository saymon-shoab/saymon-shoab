import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ProjectCard = ({pd}) => {
    // console.log('pd', pd)
    return (
        <>
           <div className="py-5 transition-transform duration-100 ease-in-out">
               <div className="rounded overflow-hidden shadow-lg max-w-sm bg-gray-800">
                   <img src={pd.picture} alt="/" className="w-full ml-5"/>
               </div>
               <div className="px-6 py-4">
                   <div className="text-gray-300 font-bold text-xl mb-2">
                       {pd.title}
                   </div>
                   <p className="text-gray-300 font-bold text-xl mb-2">Technology: {pd.technology}</p>
                   <p className="text-gray-300 font-bold text-xl mb-2">{pd.description}</p>
               </div>
               <div className="grid grid-flow-col gap-3 pb-2 px-6">
              
               <a href={pd.liveLink} target="blank" alt="/"> <button className="px-3 py-2 hover:bg-red-500 bg-red-700 rounded font-bold text-center text-gray-300 hover:translate-y-2 transition-transform duration-10000 ease-in-out" type="">Live link  </button> </a>

               <a href={pd.fGitlink} target="blank" alt="/"> <button className="px-3 py-2  hover:bg-red-500 bg-red-700 rounded font-bold text-center text-gray-300" type="">Github  </button> </a>
               
               </div>
           </div> 
        </>
    );
};

export default ProjectCard;