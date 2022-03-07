import React from 'react'


const intializeBanner = () => {
    let banners = []
    // make 25 sliding divs containing banner content (necessary for illusion
    // of an infinite banner text)
    for (let i= 0; i < 60; i++) {
        banners.push(
            <div className="text-[15px] md:text-[28px]">
                grand challenges demand fearless ideas · &nbsp;
            </div>
        )
    }
    
    return banners;
}

function Divider() {
  return (
    <div id="text-banner" className="font-Monument  bg-[#efb500] -rotate-6 z-6
    flex justify-center items-center text-[#cc4803] h-[6vh] md:h-[8vh] overflow-hidden">
        <div className="inline-block justify-center align-center">
            <div className="whitespace-nowrap banner-loop m-auto w-auto flex justify-center items-center">
                {intializeBanner()}
            </div>
        </div>
    </div>
  )
}

export default Divider