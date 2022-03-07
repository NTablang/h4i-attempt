import React from 'react'
import Member from "../components/Member"
import { Link } from "react-router-dom"
import svg from '../media/images/head.svg'  
import fb from "../media/images/facebook.png"
import git from "../media/images/githubb.png"
import ig from "../media/images/instagram.png"
import h4i from "../media/images/hack4impact.png"

let data = require("../media/graphFile.json");
const members = data.nodes;

function About() {
  return (
    <div className="overflow-hidden w-screen">
        <div className="h-screen absolute pointer-events-none">
            <div className="w-screen relative absolute top-[50vh] left-[-80vw]
            rotate-2 z-[-100] opacity-[27%]">           
                <object className="top-[-80px] z-[-10] right-[-244px] h-[650px] w-[650px] rotate-[220deg] 
                opacity-[70%] md:w-[950px] md:top-[-103px]  absolute md:rotate-[-138deg]" data={svg} type="image/svg+xml"></object>
            </div>
        </div>
        <section class="relative py-20 overflow-hidden bg-transparent">
            <span class="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
                <span class="container hidden w-screen h-32 max-w-xs md:mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-[#efb500] opacity-[50%]"></span>
            </span>
            <span class="absolute bottom-0 left-0"> </span>
            <div class="relative px-11 md:px-16 mx-auto max-w-5xl md:max-w-7xl">
                <h3 className="text-sm pb-2 text-[#cc4803]">OUR TEAM</h3>
                <h2 class="relative max-w-lg md:mt-5 mb-10  font-semibold text-[#5E0000] leading-tight font-Monument text-2xl md:text-3xl">Fearless contributions made by fellow do-gooders</h2>
                <div class="w-full gap-[50px] flex flex-wrap justify-baseline align-baseline lg:gap-[80px] pl-[10vw]  sm:pr-[10vw] md:pr-0">
                    {
                        members.map(element => 
                        <Member imgsrc={element.icon} name={element.name} 
                        team={element.team} position={element.position}/>
                        )
                    }
                </div>
            </div>
            <div className="h-screen absolute pointer-events-none">
        </div>
        </section>
        <div className="w-screen  relative absolute top-[-90vh] left-[0vw]
            rotate-2 z-[-100] opacity-[27%]">           
            <object className="top-[-80px] z-[-10] right-[-244px] h-[650px] w-[650px] rotate-[220deg] 
            opacity-[70%] md:w-[950px] md:top-[-103px]  absolute md:rotate-[-138deg]" data={svg} type="image/svg+xml"></object>
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

export default About

