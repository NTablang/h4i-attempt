import React from 'react'
import Overlay from "./Overlay"
import NewSocialCircle from "./NewSocialCircle"
import arrow from "../media/images/arrow.svg"
import underline from "../media/images/underline4.svg"


function TopFeed() {
    return (
        <div className="text-purple-500 h-[100vh] md:h-full lg:mb-[10vh] xl:h-full overflow-hidden w-screen outline-8 max-w-full overflow-x-hidden
        text-clip md:text-md" >
            <Overlay />
            <div className="flex outline outline-10 outline-green-500 h-full justify-center px-9 pt-[15vh] flex-wrap md:flex-nowrap mt-[-10vh] md:mt-[-12vh]">
                <div className="outline outline-2 outline-blue-500 md:pl-[40px] ">
                    <div class="font-Monument tracking-[-1px] text-[30px] md:text-[60px]  mt-[-20px]  md:pt-[40px]  md:pr-[10px] 
                    pb-[5px] text-[#A73400] h-full flex flex-col">
                        <div className="text-[30px]  md:text-[60px] md:pl-[2vw] lg:pl-[0px] lg:text-[60px] lg:pr-[80px]">When common good meets</div>
                        <div class="md:hidden lg:inline-block text-[30px] md:text-[60px] md:pl-[2vw] md:mt-[1px] lg:mt-[0px] lg:pl-[0px] h-[1.6em] md:h-[1.60em] lg:h-[1.1em] leading-[1.3em] md:leading-[1.26em] lg:leading-[1.2em] relative overflow-hidden w-[10em] inline-block">
                            <span className="absolute top-0 roll-down text-[#5E0000]">
                                tech*<br/>
                                energy*<br/>
                                creativity*<br/>
                                compassion*
                            </span>
                        </div>
                        <div className="hidden md:inline-block lg:hidden text-[#5E0000] md:pl-[2vw]">initiative*</div>
                        <div  class="under-cont  md:text-[40px] md:pl-[2vw] md:mt-[-2vh] lg:mt-[0px] lg:pl-[0px]">
                            <object class="sm:w-[20vw] md:w-[50vw] lg:w-[35vw]" alt="svg" aria-label="svg" data={underline} type="image/svg+xml"></object>
                        </div>
                        <div className="text-[12px] md:text-[17px]  md:pl-[2vw] lg:pl-[0px]">
                            * a umd fearless collaboration <br/>
                            by do-gooders
                        </div>
                        <div className="md:pl-[2vw] lg:pl-[0vw]">
                            <a onClick={() => document.getElementById("opp").scrollIntoView({behavior:"smooth"})} class="mr-[auto] ml-[auto] mt-10 mb-[8vh] lg:hidden relative inline-block 
                            px-5 py-3 font-medium font-Monument group text-sm md:text-xl md:pl-[vw] lg:pl-[0px]">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5f0303] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-[#efb205] border-2 border-[#5f0303] group-hover:bg-[#5f0303]"></span>
                                <span class="relative text-[#5f0303] group-hover:text-[#efb205]">Let's work together!</span>
                            </a>
                        </div>
                        <div class="bottom-text" className="text-[#5E0000] text-[50%]  md:pt-[0px] md:text-[35%] md:mt-auto md:pb-44 lg:pb-20  md:pl-[2vw] lg:pl-[0px]">
                            <div>
                                Hack4Impact-UMD is a group of University of Maryland students who work with 
                                local and national non-profits to create software that improves the world around us. 
                                This club was founded in 2020 and is a chapter of the Hack4Impact, a national 501(c)3 
                                organization.
                            </div>
                            <object className="hidden md:inline lg:hidden h-[10vh] opacity-[78%] ml-[100%] pb-[5vh] " data={arrow} type="image/svg+xml"></object>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:inline-block">
                    <div id="right-pane" className="hidden md:inline outline outline-2 outline-violet-500  gap-4 md:flex 
                    rounded-lg border-dashed justify-center items-center flex-col 
                    pr-[20px] pb-20">
                        <NewSocialCircle/>
                        <a onClick={() => document.getElementById("opp").scrollIntoView({behavior:"smooth"})} class="relative inline-block px-5 py-3 font-medium font-Monument group text-sm ">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5f0303] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-[#efb205] border-2 border-[#5f0303] group-hover:bg-[#5f0303]"></span>
                            <span class="relative text-[#5f0303] group-hover:text-[#efb205]">Let's work together!</span>
                        </a>
                        <div  class="  under-cont sm:pl-[100%] mt-auto">
                                <object className="h-[10vh] opacity-[78%]" data={arrow} type="image/svg+xml"></object>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFeed