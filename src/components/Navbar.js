import React from 'react'
import h4ilogo from '../media/images/umdh.png'   
import { Link } from "react-router-dom"
import $ from 'jquery';
import Hamburger from 'hamburger-react';




function Navbar() {
  $(window).scroll(function() {
    $('#nav').css('background', 'transparent');
    if ($(window).scrollTop() >= 50) {
      $('#nav').css('background', 'rgba(255,255, 255, 1)')
      .css("border-color", "rgba(0,0,0,1)");
      
       
    } else {
      $('#nav').css('background', 'transparent')
      .css("border-color", "rgba(0,0,0,0.2)");
      
    }
  });


  return (
    <>
    <div id="nav" className="z-[100] sticky top-0  h-[70px] text-[#5f0303] justify-center items-center px-5 py-3 
    rounded-b-[25px] gradient-opacity bg-transparent">
        <div className="h-full w-full  flex justify-between items-center">
            <div className="w-auto shrink-0">
                <Link to="/"> <img src={h4ilogo} onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' });}}className="w-[200px] h-auto"/> </Link>
            </div>
            <div className="text-[#5f0303] md:w-auto md:gap-[2vw]   hidden md:inline md:flex md:text-lg  font-medium
             justify-center items-center ">
                <div><Link to="/about" className="hover:underline "> About Us</Link></div>
                <div><Link to="/projects" className="hover:underline"> Projects </Link></div>
                <div><Link to="/students" className="hover:underline"> Students </Link></div>
                <div><Link to="/nonprofits" className="hover:underline"> Nonprofits </Link></div>
                <div><Link to="/contact" className="hover:underline"> Contact Us </Link></div>
            </div>
            <div className="md:hidden">
              <Hamburger id="menu" size={20}toggled={console.log("opened")} toggle={console.log("opened1")} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar