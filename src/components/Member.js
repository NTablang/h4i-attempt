import React from 'react'

function Member({imgsrc, name, team, position}) {
  return (

        <div class="flex flex-col items-baseline md:max-w-[180px] md:min-w-[250px] md:pl-6 justify-baseline col-span-1 mmdLin-h-[30vh] md:max-h-[30vh] md:mb-[2vh] lg:mb-[7vh]">
           
            <div class="relative p-5">
                <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-[#efb500] opacity-[20%]"></div>
                <img class="relative z-20 max-w-[180px] min-w-[180px] rounded-full" src={imgsrc}/>
            </div>
            <div class="mt-3 space-y-2 text-center w-full  ">
                <div class="space-y-1 text-lg font-medium leading-6 break-words" >
                    <h3 className="text-[#5E0000] font-Monument">{name}</h3>
                    <p class="text-[#cc4803] w-full text-clip text-center align-middle  break-words">{team}</p>
                    <p class="text-[#cc4803] w-full overflow-hidden text-clip">{position}</p>
                </div>
            </div>
        </div>   
  )
}

export default Member




