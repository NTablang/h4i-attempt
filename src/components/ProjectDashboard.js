import React from 'react'
import SecondaryOverlay from "./SecondaryOverlay"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// the database for projects
let data = require("../media/projects.json");
// number of projects
const numberOfProjects = 6;
// necessary for choosing random projects for the dashboard
let anotherProj, randomProj = Math.floor(Math.random() * ((numberOfProjects - 1) - 0 + 1) ) + 0;
// to ensure we are not displaying the same project
do {
    anotherProj = Math.floor(Math.random() * ((numberOfProjects - 1) - 0 + 1) ) + 0;
} while (randomProj == anotherProj)
let project1 = data.projects[randomProj];
let project2 = data.projects[anotherProj];




function ProjectDashboard() {
  useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
  }, []);

  
  return (
    <div className="h-full md:h-full w-screen pb-[-5vh]  xl:mt-[-3vh]" id="proj">
        <SecondaryOverlay />
        <div className="flex justify-center md:pb-[2vh] h-full  md:pt-[5vh] ">
            <div className="flex gap-10 h-full  flex-col md:pb-[1vh] font-Monument text-[#5E0000] min-w-[90vw]  text-[3vh] overflow-hidden text-ellipsis">
               {/* <Link data-aos="fade-up"  to="/projects" className=" bg-black inline-block pl-[5vh] lg:pl-0"> */}
                <div>
                    <h2 className="hover:underline inline-block w-[auto] text-[2.5vh] md:text-[3vh] pl-[5vh] lg:pl-0">
                        <Link data-aos="fade-up"  to="/projects" >Featured Projects</Link>
                    </h2>
                </div>

                
                
                
                <div className="px-10 ">





                    <div class="flex flex-col items-center justify-center gap-10 antialiased pb-10 md:p-0">

                        <a href={project1.link}>
                            <div data-aos="fade-up" class="flex flex-col md:flex-row w-full overflow-hidden text-gray-900 bg-white rounded-lg shadow-md hover:shadow-xl max-w-md md:max-w-7xl p-3 border  border-solid border-gray-200">
                                
                                 <img src={project1.headerimg}
                                    alt="Computer with GitHub page opened in browser"
                                    class=" object-cover min-w-[20vh] max-w-[20vh] justify-center self-center md:justify-normal md:self-normal min-h-full max-h-full  lg:max-w-md  md:w-2/6 select-none sm:block  border rounded-md border-solid border-gray-300 "/>
                                                
                                
                                <div class="flex flex-col justify-between w-full p-5 md:pl-10">
                                    <div class="mb-10 ">
                                        <h2 class="mb-3 text-base text-black leading-tight md:text-2xl md:leading-none whitespace-normal">
                                            {project1.name}
                                        </h2>
                                        <h3 className="text-xs md:text-sm mt-[-12px] text-gray-500">{project1.date}</h3>
                                        <p class="leading-relaxed text-gray-700 text-sm md:text-base mt-[12px] font-bold tracking-[-0.01em] font-sans  ">
                                            {project1.description}
                                        </p>
                                    </div>

                                    <div className="text-sm text-[#5E0000]">
                                            Made with <br/>
                                        <div class>{project1.tech}</div>
                                    </div>

                                </div>
                            </div>
                        </a>



                        <a href={project2.link} className="md:mb-[10vh] lg:mb-0">
                            <div data-aos="fade-up" class="flex flex-col md:flex-row -full overflow-hidden text-gray-900 bg-white rounded-lg shadow-md hover:shadow-xl max-w-md md:max-w-7xl p-3 border   border-solid border-gray-200">
                                 <img src={project2.headerimg}
                                    alt="Computer with GitHub page opened in browser"
                                    class=" object-cover min-w-[20vh] max-w-[20vh] justify-center self-center md:justify-normal md:self-normal min-h-full max-h-full  lg:max-w-md  md:w-2/6 select-none sm:block  border rounded-md border-solid border-gray-300 "/>
                               

                                <div class="flex flex-col justify-between w-full p-5 md:pl-10">
                                    <div class="mb-10 ">
                                        <h2 class="mb-3 text-base text-black leading-tight md:text-2xl md:leading-none whitespace-normal">
                                            {project2.name}
                                        </h2>
                                        <h3 className="text-xs md:text-sm mt-[-12px] text-gray-500">{project2.date}</h3>
                                        <p class="leading-relaxed text-gray-700 text-sm md:text-base mt-[12px] font-bold tracking-[-0.01em] font-sans  ">
                                            {project2.description}
                                        </p>
                                    </div>

                                    <div className="text-sm text-[#5E0000]">
                                            Made with <br/>
                                        <div class>{project2.tech}</div>
                                    </div>

                                </div>
                            </div>
                        </a>

                        <Link to="/projects" class="relative inline-block px-5 py-3 font-medium font-Monument group md:mt-[-10vh] lg:mt-0 mb-5  ">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5f0303] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-[#efb205] border-2 border-[#5f0303] group-hover:bg-[#5f0303]"></span>
                            <span class="relative text-[#5f0303] group-hover:text-[#efb205]">See More!</span>
                        </Link>









                        
                    </div>









                </div>
                
            </div>
        </div>

    </div>
  )
}

export default ProjectDashboard