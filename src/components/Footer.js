import React from 'react'
import fb from "../media/images/facebook.png"
import git from "../media/images/githubb.png"
import ig from "../media/images/instagram.png"
import h4i from "../media/images/hack4impact.png"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div class="footer h-full pt-[50px] pr-[20px] md:pr-[40px] pb-[50px] pl-[40px] text-[#696e73] lg:pr-[0px]
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
  )
}

export default Footer
/*



*/