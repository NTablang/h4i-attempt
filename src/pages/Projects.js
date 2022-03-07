import React from 'react'
import svg from "../media/images/solution.svg"
import SecondaryOverlay from "../components/SecondaryOverlay"
import Divider from "../components/Divider"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import fb from "../media/images/facebook.png"
import git from "../media/images/githubb.png"
import ig from "../media/images/instagram.png"
import h4i from "../media/images/hack4impact.png"
import { Link } from "react-router-dom"



let data = require("../media/projects.json").projects;
console.log(data);


function Projects() {
    useEffect(() => {
        AOS.init({duration: 1000});
        AOS.refresh();
    }, []);
  return (
    <div className="m-w-[100vh] overflow-x-hidden">
        <SecondaryOverlay />
        <div className=" h-screen  w-screen md:pt-16 md:px-16  relative overflow-hidden">
            <div className="w-full overflow-hidden ">
                <div className="w-full hidden h-[90vh] absolute top-0 left-0 dot-bg"></div>
            </div>
            <div className="bg-[rgba(0, 0, 0, 0)] h-full w-full pt-5 md:pt-16">
                <section class="w-full  pt-10 bg-[rgba(0, 0, 0, 0)]  md:pb-10">
                    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 text-[#5E0000] lg:text-3xl md:text-2xl font-Monument">
                                Building better solutions for those building a better world
                            </h2>
                            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-md">
                                Each school year, we partner with a few nonprofits to help them better serve their communities. 
                                Here are the projects we have worked on in the past and are currently working on.
                            </p>
                        </div>
                        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                            <img src={svg} class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/>
                        </div>
                    </div>
                </section>  
            </div>
        </div>
        {/** START PROJECT CARDS HERE */}
        <div className="relative w-screen  mb-[20vh]">
            <div className="absolute  w-screen ">
                <div className="absolute  w-full ml-[-0.3vw] left:0 ">
                    <Divider />
                </div>
            </div>
        </div>
        <div className="h-auto w-screen  px-12 ">
            <div className="bg-white w-full h-full gap-11 flex flex-col pt-10 pb-44">
                <div className="md:pl-40 text-4xl font-Monument">
                    Recent Projects
                </div>

                {data.map(project => {
                    return(
                    <div data-aos="fade-up" class="flex justify-center md:mb-10">
                        <div class="flex flex-col md:flex-row md:max-w-5xl gap-10 rounded-lg bg-white  pr-0 justify-between" >
                            <div className="min-w-[50px] max-w-[220px] flex mr-auto ml-auto md:ml-0 md:mr-0 md:flex-none md:min-w-[300px] md:max-w-[300px] h-auto">
                                <img class=" w-full h-auto md:max-h-64 self-center md:self-auto max-w-full object-cover mt-5  border-4 border-solid
                                border-[#efb500] border-opacity-75 rounded-sm" src={project.headerimg} alt="" />
                            </div>
                            <div class=" flex flex-col justify-start min-w-44" >
                                <h5 class="text-gray-900 text-md  text-clip md:text-xl font-Monument">{project.name}</h5>
                                <p class="text-gray-600 text-xs  mb-2">{project.date}</p>
                                {/* FOR EACH TECH STACK */}
                                <div className="flex flex-wrap justify-start gap-2">
                                    {project.tech.split(", ").map(tech => {
                                        return (
                                            <div
                                                class="w-auto text-xs mb-1 md:mb-5 inline-block flex font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
                                            >
                                                {tech}
                                            </div>
                                        )
                                    })}
                                </div>
                                <p class="text-gray-700 text-base mt-5 md:mt-0 mb-4">
                                    {project.description}
                                </p>
                                <p class="text-gray-700 text-base mb-4">
                                    Made by <br/>
                                    {project.contributors.split(", ").map(contributor => {return (<span>{contributor}, </span>)})}
                                </p>
                                <a href={project.link} className="w-auto mr-auto text-[#cc4803] hover:underline">Visit Site</a>
                                <a href={project.link} className="w-auto text-xs mr-auto text-gray-900 hover:underline">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        <div class="footer1 h-full pt-[50px] pr-[20px] md:pr-[40px] pb-[50px] pl-[40px] text-[#696e73] lg:pr-[0px]
        font-Monument text-[12px] flex flex-col md:flex-row gap-[5vh] md:gap-[27px] lg:gap-[10vw]">
            <div class="flex flex-col gap-[15px]">
                <img src={h4i} class="w-[60vw]  md:w-[40vw] lg:w-[20vw] xl:pr-[0px]"/>
                <div class="flex gap-[10px]">
                    <a href="https://github.com/Hack4Impact-UMD"><div class="social bg-[#4183c4]"><img src={git} class="w-[20px]"/></div></a>
                    <a href="https://www.facebook.com/hack4impactumd"><div class="social bg-[#3c5998]" ><img src={fb} class="w-[20px]"/></div></a>
                    <a href="https://www.instagram.com/hack4impactumd/"><div class="social bg-[#3f729c]"><img src={ig} class="w-[20px]"/></div></a>
                </div>
                <div class="text-[12px]">
                    If you have any questions, please contact <br/><a class="no-underline hover:underline" href="mailto:UMD@hack4impact.org">UMD@hack4impact.org</a>.
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-[10px] lg:gap-[5vw]">
                <div class="flex flex-col gap-[2px]">
                    <span className="text-[20px]">Quick Links</span>
                    <Link to="/about" class="no-underline hover:underline">About Us</Link>
                    <Link to="/projects" class="no-underline hover:underline">Projects</Link>
                    <Link to="/contact" class="no-underline hover:underline">Contact Us</Link>
                </div>
                <div class="flex flex-col gap-[2px]">
                    <span className="text-[20px]">Apply</span>
                    <Link to="/students" class="no-underline hover:underline">Students</Link>
                    <Link to="/nonprofits" class="no-underline hover:underline">Nonprofits</Link>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects