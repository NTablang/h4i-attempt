import React from 'react'
import svg from '../media/images/head.svg'   


function Overlay() {
  return (
    <>
       <div> 
        <div className="dot-pattern h-screen w-screen opacity-[24%] absolute top-0 pointer-events-none">
        </div>
        <div className="absolute w-screen h-[108vh] top-[0px] overflow-hidden z-[-10] pointer-events-none">
            <div className="absolute top-[2px] left-[0px] h-[816px] w-[233px] md:w-[603px] z-[-1] pointer-events-none">
                <div className="absolute top-[-91px] h-[111%] left-[-101px] w-[395px] md:w-[600px] md:h-[131%] lg:h-[111%]
                bg-transparent skew-x-[-20deg] rounded-br-[90px] z-[-5] pointer-events-none dot-pattern ">
                </div>
            </div>
            <div className="w-screen relative ">           
            <object className="top-[-80px] z-[-10] right-[-244px] h-[650px] w-[650px] rotate-[220deg] 
              opacity-[70%] md:w-[950px] md:top-[-103px]  absolute md:rotate-[-138deg]" data={svg} type="image/svg+xml"></object>
        </div>
        </div>
      </div> 
    </>
  )
}

export default Overlay