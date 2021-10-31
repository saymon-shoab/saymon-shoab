import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from './ProjectData'
const Project = () => {
    return (
        <div className=" min-h-screen bg-black pt-5 pb-20">
            <h1 className="mt-10 mb-2 text-center capitalize text-white text-4xl">some of <span className="text-red-600 font-semibold">my projects</span> </h1>
            <hr className="w-1/5  mx-auto"/>
            <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-5 justify-items-center mt-20">
                {
                    projectData.map((pd)=> <ProjectCard key={pd.id} pd={pd}/>)
                }
            </div>
        </div>
    );
};

export default Project;