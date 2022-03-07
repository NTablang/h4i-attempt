import React from 'react'
import up from '../media/images/up.png'   

import { Link } from "react-router-dom"

const intializeBanner = () => {
    let banners = []
    // make 25 sliding divs containing banner content (necessary for illusion
    // of an infinite banner text)
    for (let i= 0; i < 25; i++) {
        banners.push(
            <div>
                <Link to="/" id="link" className="text-[7px] md:text-[8px]">
                    software for social good&nbsp;
                </Link>
            </div>
        )
        banners.push(
            <img src={up} alt="" id="arrow" className="h-[1vh] md:h-[2vh] inline-block align-middle mt-1 mr-1"/>
        )
    }
    
    return banners;
}

function BannerTop() {
  return (
    <div id="text-banner" className="font-Monument overflow-hidden bg-[#efb500] 
    flex justify-center items-center  text-[#cc4803] h-[2vh] md:h-[3vh]">
        <div className="inline-block justify-center align-center">
            <div className="whitespace-nowrap banner-loop m-auto w-auto flex justify-center items-center hover:underline">
                {intializeBanner()}
            </div>
        </div>
    </div>
  )
}

export default BannerTop