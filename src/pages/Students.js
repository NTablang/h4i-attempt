import React from 'react'
import svg from '../media/images/head.svg'   
import sol from "../media/images/studentscene1.svg"
import SecondaryOverlay from "../components/SecondaryOverlay"
import arrow from "../media/images/arrow.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import fb from "../media/images/facebook.png"
import git from "../media/images/githubb.png"
import ig from "../media/images/instagram.png"
import h4i from "../media/images/hack4impact.png"
import { Link } from "react-router-dom"
import terp from "../media/images/terp.jpg"
import mckeldin from "../media/images/mckeldin.jpg"
import iribe from "../media/images/iribe.jpg"


function Students() {
    useEffect(() => {
        AOS.init({duration: 1200});
        AOS.refresh();
      }, []);
  return (
    <div className="top-0 max-w-screen overflow-hidden">
        {/* OVERLAY */}
        <div className=" relative overflow-hidden w-full outline outline-2 outline-green-500 ">
            <div className="w-screen relative  top-[-2vh] left-[4vw]
            rotate-2 z-[-100] opacity-[27%]">           
                <object className="top-[-80px] z-[-10] right-[-244px] h-[650px] w-[650px] rotate-[220deg] 
                opacity-[70%] md:w-[950px] md:top-[-103px]  absolute md:rotate-[-138deg]" data={svg} type="image/svg+xml"></object>
            </div>
            {/* TOP FEED */}
            <div className="   w-screen md:pt-16 md:px-16  relative overflow-hidden">
                <div className="w-full overflow-hidden ">
                    <div className="w-full hidden h-[90vh] absolute top-0 left-0 dot-bg"></div>
                </div>
                <div className="bg-[rgba(0, 0, 0, 0)] h-full w-full pt-5 md:pt-16">
                    <section class="w-full  pt-10 bg-[rgba(0, 0, 0, 0)]  md:pb-10">
                        <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
                            <div class="box-border relative  max-w-lg px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-4xl lg:mb-0 md:w-1/2 xl:pl-10">
                                <img src={sol} class="p-2 pl-6 pr-5 w-[120vw] xl:pl-16 xl:pr-20 "/>
                            </div>
                            <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                                <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 text-[#5E0000] lg:text-3xl md:text-2xl font-Monument">
                                    Students
                                </h2>
                                <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-md">
                                We strive to both prepare students for socially conscious roles in tech while creating a supportive community. 
                                Here are some fun events we hold for our members and our application information.
                                </p>
                            </div>

                        </div>
                    </section>  
                    {/* ARROW */}
                    <div  class=" hidden md:inline-block under-cont md:pl-[50%] md:mt-60 lg:mt-28">
                        <object className="h-[10vh] animate-bounce opacity-[78%]" data={arrow} type="image/svg+xml"></object>
                    </div>
                    {/* STEPS */}
                    <div className="font-Monument text-4xl text-[#5E0000] pl-10 mt-14 md:mt-32">
                        Application Process
                    </div>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-5 mx-auto flex flex-wrap">

                            <div class="flex relative pt-10 pb-20 sm:items-center md:w-[70vw] mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div data-aos="fade-up" class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#5E0000] text-[#EFB205] relative z-10 title-font font-medium text-sm">1</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div data-aos="fade-up" class="flex-shrink-0 w-24 h-24 bg-[#5E0000] text-[#EFB205] rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 data-aos="fade-up" class="font-medium title-font text-gray-900 mb-1 text-xl">Written Application</h2>
                                <p data-aos="fade-up" class="leading-relaxed">New members can join in the beginning of both semesters. We accept written applications at the start of the fall or semester and a few weeks before the start of the spring semester. Written Applications via the 'apply' button below are open from three weeks before the start of the semester to the first two weeks of the semester. If you want to chat with us in person or have any questions, you can come see us at the First or Second Look Fairs or send us an email.</p>
                                </div>
                            </div>
                            </div>
                            <div class="flex relative pb-20 sm:items-center md:w-[70vw] mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div  data-aos="fade-up"class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#5E0000] text-[#EFB205] relative z-10 title-font font-medium text-sm">2</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div  data-aos="fade-up" class="flex-shrink-0 w-24 h-24 bg-[#5E0000] text-[#EFB205] rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                                </div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 data-aos="fade-up" class="font-medium title-font text-gray-900 mb-1 text-xl">Interview</h2>
                                <p data-aos="fade-up" class="leading-relaxed">We will reach out to schedule an interview if your time availability, interests and skills match what we are looking for. Don't stress about your interview! We want to get to know you and why you're passionate about joining H4I and our mission. If you are applying for a developer position, we may ask technical questions, but we encourage everyone to apply regardless of experience level.</p>
                                </div>
                            </div>
                            </div>

                            <div class="flex relative pb-10 sm:items-center md:w-[70vw] mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div data-aos="fade-up" class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#5E0000] text-[#EFB205] relative z-10 title-font font-medium text-sm">3</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div data-aos="fade-up" class="flex-shrink-0 w-24 h-24 bg-[#5E0000] text-[#EFB205] rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                </div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 data-aos="fade-up" class="font-medium title-font text-gray-900 mb-1 text-xl">Notified of Decision</h2>
                                <p data-aos="fade-up" class="leading-relaxed">We will email you when we have reached a decision on your application. Unfortunately, we are not able to accept every student who applies. The number of students in our club is determined by the number of nonprofit projects we take on for the year. However, we are taking on more and more projects and growing the number of students and positions every year.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-20">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0d9TaH1Dwa2NkEj3w8DG2ZvQL8_0p-9pXHIakw9YFROIOXw/viewform" class=" relative inline-block px-5 py-3 font-medium font-Monument group text-sm ">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5f0303] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-[#efb205] border-2 border-[#5f0303] group-hover:bg-[#5f0303]"></span>
                                <span class="relative animate-pulse text-[#5f0303] group-hover:text-[#efb205]">Apply Now</span>
                            </a>
                        </div>
                    </section>
                </div>
                <section class="text-gray-600 body-font">
                    <div className="w-screen relative  top-[20vh] left-[-90vw]
                    rotate-2 z-[-100] opacity-[27%]">           
                        <object className="top-[-80px] z-[-10] right-[-244px] h-[650px] w-[650px] rotate-[220deg] 
                        opacity-[70%] md:w-[950px] md:top-[-103px]  absolute md:rotate-[-138deg]" data={svg} type="image/svg+xml"></object>
                    </div>
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col">
                        <div class="h-1 bg-gray-200 rounded overflow-hidden">
                            <div class="w-24 h-full bg-[#5f0303]"></div>
                        </div>
                        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="sm:w-2/5 text-[#5f0303] font-medium title-font text-2xl mb-2 sm:mb-0 font-Monument">What we do</h1>
                        </div>
                        </div>
                        <div data-aos="fade-up" class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={mckeldin}/>
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Educational</h2>
                            <p class="text-base leading-relaxed mt-2">We start each year off with a bootcamp, which is your chance to learn what Hack4Impact UMD is all about! During bootcamp, our members attend workshops and get familiar with the tools they will use on their project team. Throughout the year we also host tech talks and speaker events with professors and other professionals.</p>

                        </div>
                        <div data-aos="fade-up" class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={terp}/>
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Giving Back</h2>
                            <p class="text-base leading-relaxed mt-2">We try to learn about our nonprofit partners' missions and work beyond our technical projects as well! We volunteer with every nonprofit we partner with for the year so that each member learns about their work, regardless of their project team.</p>

                        </div>
                        <div data-aos="fade-up" class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={iribe}/>
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Social</h2>
                            <p class="text-base leading-relaxed mt-2">We love our work because of our amazing members! We host social events so that all of our members can get to know each other and take a break from their school work. We would like to host game nights, events with other clubs, hikes, and a banquet every year to celebrate everyone's hard work.</p>

                        </div>
                        </div>
                    </div>
                </section>
                <section class="relative py-16 px-5 md:px-0 bg-white min-w-screen animation-fade animation-delay">
                    <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
                        <p class="text-xs font-bold text-left text-[#5f0303] uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
                            Curious? We got you!
                        </p>
                        <h3 class="mt-1 text-3xl font-bold text-left text-gray-800 sm:mx-6  md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                            Frequently Asked Questions
                        </h3>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">What types of roles can students have?</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-md">
                            We are currently recruiting for software developers, product managers, and designers on the project teams. 
                            You will be placed on project teams with nonprofit OR bootcamp team, depending on experience. 
                            We are also looking for people interested in marketing, finance, and nonprofit sourcing.</p>
                        </div>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">How much of a time commitment is Hack4Impact</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            Monthly GBMs for tech + social good talks, ethical software discussions, project demos, and more fun (1 hour per month). 
                            Weekly meetings with your project team (1 hour per week). 
                            Work on the projects in your own time (2 to 3 hours). 
                            Leadership roles, such as executive directors, project managers, and tech leads will spend more time, up to 10 hours a week.</p>
                        </div>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">Should students know any programming languages before applying?</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            It is not required to know any specific languages, but we do require students who are applying to become developers or 
                            product managers to have taken CMSC 131 or have basic programming skills (classes, arrays, maps, etc.) already. 
                            General web development skills like HTML, CSS, and JavaScript are also good to know. People with less programming and 
                            web development experience will be placed in the bootcamp group, which will allow you to get to know other people in 
                            Hack4Impact and improve your web development skills.</p>
                        </div>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">What stack do you use?</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            We mainly develop new projects on the MERN (MongoDB, Express.js, React, and Node.js) stack. 
                            However, we will also help out nonprofit organizations that have existing websites on other stacks, 
                            such as Django, Flask, or Ruby on Rails.
                            </p>
                        </div> 
                    </div> 
                </section>
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

export default Students