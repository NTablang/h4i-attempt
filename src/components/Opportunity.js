import React from 'react'
import OppTop from "./OppTop"
import { Link } from "react-router-dom"
import student from "../media/images/student.svg"
import collab from "../media/images/collab3.svg"


function Opportunity() {
  return (
    <div className="h-[auto]  xl:mt-0 w-screen overflow-hidden bg-[#FFE9CE] pb-5">
        <OppTop />
        <section class="w-full bg-transparent pt-7  md:pt-20 md:pb-10">
            <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <img src={collab} class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/>
                </div>

                <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Nonprofit Organizations
                    </h2>
                    <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-md">
                        Does your nonprofit have a software-related issue you'd like to solve? We can help you design your website, 
                        improve your database, create data visualizations, and more! Although we prefer to work with nonprofits
                        in the Washington D.C. - Baltimore Metro Area, we have worked with nonprofits 
                        across the country. 
                    </p>
                    <Link to="/nonprofits" class="relative inline-block px-5 py-3 font-medium font-Monument group   ">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5f0303] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full bg-[#efb205] border-2 border-[#5f0303] group-hover:bg-[#5f0303]"></span>
                        <span class="relative text-[#5f0303] group-hover:text-[#efb205]">Nonprofits</span>
                    </Link>
                </div>
            </div>

            <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-10 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-10 md:flex-row max-w-7xl lg:px-16">
                <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                    <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Students
                    </h2>
                    <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-md">
                        Are you passionate about software and social impact? Are you looking to join a unique and close-knit 
                        community? Join Us! Hack4Impact-UMD provides a distinct experience to develop technical skills and 
                        interact with nonprofit clients all while applying your skills to impact real lives. 
                        We have 30 members and counting, and we would love to have you join us.
                    </p>
                    <Link to="/students" class="relative inline-block px-5 py-3 font-medium font-Monument group   ">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5f0303] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full bg-[#efb205] border-2 border-[#5f0303] group-hover:bg-[#5f0303]"></span>
                        <span class="relative text-[#5f0303] group-hover:text-[#efb205]">Students</span>
                    </Link>
                </div>
                <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                    <img src={student} class="pl-4  sm:pr-10 xl:pl-10 lg:pr-32"/>
                </div>
            </div>
        </section>             
    </div>
  )
}

export default Opportunity



