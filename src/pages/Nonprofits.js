import React from 'react'
import svg from '../media/images/head.svg'   
import nonprof from "../media/images/nonprof.svg"
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




function Nonprofits() {
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
                            <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                                <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 text-[#5E0000] lg:text-3xl md:text-2xl font-Monument">
                                    Nonprofits
                                </h2>
                                <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-md">
                                At Hack4Impact, we understand that nonprofit organizations are a valuable asset to our community. 
                                We want to use our software and web development skills to help nonprofits.<br/> <br/><br/>
                                If you are interested in any technology development for your organization, please let us know by filling out the application or contacting us!
                                Our goal is to help your organization by providing software solutions.
                                </p>
                            </div>
                            
                            <div class="box-border relative  max-w-lg px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-4xl lg:mb-0 md:w-1/2 xl:pl-10">
                                <img src={nonprof} class="p-2 pl-6 pr-5 w-[150vw] xl:pl-16 xl:pr-20 "/>
                            </div>


                        </div>
                        {/* ARROW */}
                        <div  class=" hidden md:inline-block under-cont md:pl-[95%] md:mt-44 lg:mt-20">
                            <object className="h-[10vh]  opacity-[78%]" data={arrow} type="image/svg+xml"></object>
                        </div>
                    </section>  

                    <section class="text-gray-600 body-font">
                        <div class="container px-5 pt-40 md:pb-24 mx-auto">
                            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p class="leading-relaxed text-lg">This work is super critical. Community building and organization is so important... 
                            we can’t do it without having a credible website so this is ultra important. There are issues like air pollution, 
                            traffic, noise, waste within hundreds of feet of the community we have to organize and mobilize and this website is 
                            going to be a tremendous part of that.</p>
                            <span class="inline-block h-1 w-10 rounded bg-[#5E0000] mt-8 mb-6"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">GARRY HARRIS</h2>
                            <p class="text-gray-500">Founder of Center for Sustainable Communities - Atlanta</p>
                            </div>
                        </div>
                    </section>


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
                                <h2 data-aos="fade-up" class="font-medium title-font text-gray-900 mb-1 text-xl">Initial Contact</h2>
                                <h2 data-aos="fade-up" class="font-medium title-font text-gray-400 mb-1 text-md">Early June and Early December</h2>
                                <p data-aos="fade-up" class="leading-relaxed">Reach out to our team to get started in our application process! We are interested in hearing about your organization and potential projects you may have in mind.</p>
                                </div>
                            </div>
                            </div>

                            <div class="flex relative pt-10 pb-20 sm:items-center md:w-[70vw] mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div data-aos="fade-up" class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#5E0000] text-[#EFB205] relative z-10 title-font font-medium text-sm">2</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div  data-aos="fade-up" class="flex-shrink-0 w-24 h-24 bg-[#5E0000] text-[#EFB205] rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                                </div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 data-aos="fade-up" class="font-medium title-font text-gray-900 mb-1 text-xl">Informational Interview</h2>
                                <h2 data-aos="fade-up" class="font-medium title-font text-gray-400 mb-1 text-md">Late July to Early August; Early to Mid January</h2>
                                <p data-aos="fade-up" class="leading-relaxed">We will reach out to you to schedule an interview to discuss your project idea. We want to learn more about the problem, potential users, and additional factors that relate to your product.</p>
                                </div>
                            </div>
                            </div>

                            <div class="flex relative pt-10 pb-20 sm:items-center md:w-[70vw] mx-auto">
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
                                <h2 data-aos="fade-up" class="font-medium title-font text-gray-400 mb-1 text-md">Mid August and Mid January</h2>
                                <p data-aos="fade-up" class="leading-relaxed">The Hack4Impact board of directors will consider the feasibility of your project and how 
                                well it suits our teams and timeline. We want to ensure we are the right people to tackle your problem. We will let you know if we 
                                have chosen to take on your project. If we are at capacity, another Hack4Impact chapter may take on your project.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-20">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaeqcwOGt3QR0h4Lmo-fwW4mA108jpeb0p06upiivwxpDArw/viewform" class=" relative inline-block px-5 py-3 font-medium font-Monument group text-sm ">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5f0303] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-[#efb205] border-2 border-[#5f0303] group-hover:bg-[#5f0303]"></span>
                                <span class="animate-pulse relative text-[#5f0303] group-hover:text-[#efb205]">Apply Now</span>
                            </a>
                        </div>
                    </section>
                </div>
                <section class="relative py-16 px-5 md:px-0 bg-white min-w-screen animation-fade animation-delay">
                    
                    <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
                        <p class="text-xs font-bold text-left text-[#5f0303] uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
                            Have any quick inquiries? We got you!
                        </p>
                        <h3 class="mt-1 text-3xl font-bold text-left text-gray-800 sm:mx-6  md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                            Frequently Asked Questions
                        </h3>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">What types of projects do you undertake?</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-md">
                            Most of the projects we undertake are web applications. 
                            Common examples of problems we tackle include volunteer tracking forms, 
                            member directories, and data tracking softwares. Check out our 
                            <Link className="text-[#cc4803]" to="/projects"> projects page </Link>
                            to see some of our previous work, and feel free to contact us with any project ideas!
                            </p>
                        </div>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">How much does this cost?</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            These projects are free or low cost ($5- $15 / month) for the website and hosting expenses. 
                            We are building software to better help you serve your community, and we know how tight money 
                            can be so we try to keep these expenses as low as possible.</p>
                        </div>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">What does the project timeline look like?</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            Most development begins at the start of the new year and continues until around mid-April. Throughout all of this, 
                            we will remain in constant contact with you to ensure that we are building an application that you will want to use.</p>
                        </div>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">How much involvement is expected from nonprofits?</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            We strongly believe in continuous and transparent communication to ensure that your project is something that you will be happy 
                            with. This means we will be asking for constant feedback throughout the development cycle, including check-ins and surveys.
                            </p>
                        </div>
                        <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                            <h3 class="text-lg font-bold text-[#5f0303] sm:text-xl md:text-2xl">How does long term maintenance work?</h3>
                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            Once we hand the product off to you around mid-April, we want to give you time to experiment with it and find anything that needs to be changed. 
                            Once we end our school year in mid-June, we will no longer be able to make additions as easily due to limited resources on our end. 
                            If you encounter bugs on the site, we will attempt to correct these issues, but cannot guarantee that we will be able to.
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

export default Nonprofits