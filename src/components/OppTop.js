import React from 'react'
import up from '../media/images/up.png'   

import { Link } from "react-router-dom"

const intializeBanner = () => {
    let banners = []
    // make 25 sliding divs containing banner content (necessary for illusion
    // of an infinite banner text)
    for (let i= 0; i < 150; i++) {
        banners.push(
            <div>
                <Link to="/" id="link" className="text-[22px] md:text-[22px]">
                    Opportunities · &nbsp;
                </Link>
            </div>
        )
    }
    return banners;
}

function OppTop() {
  return (
    <div id="text-banner" className="font-Monument overflow-hidden  
    flex justify-center items-center  text-[#5f0303] h-[3vh] md:h-[3vh] mt-10">
        <div className="inline-block justify-center align-center">
            <div className="whitespace-nowrap banner-loop m-auto w-auto flex justify-center items-center">
                {intializeBanner()}
            </div>
        </div>
    </div>
  )
}

export default OppTop