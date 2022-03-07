import React from 'react'
import svg from '../media/images/head.svg'   

function SecondaryOverlay() {
  return (
    <div className="h-screen absolute overflow-hidden outline outline-2 outline-green-500 pointer-events-none">
        <div className="w-screen relative absolute top-[18vh] left-[-72vw]
        rotate-2 z-[-100] opacity-[27%]">           
            <object className="top-[-80px] z-[-10] right-[-244px] h-[650px] w-[650px] rotate-[220deg] 
              opacity-[70%] md:w-[950px] md:top-[-103px]  absolute md:rotate-[-138deg]" data={svg} type="image/svg+xml"></object>
        </div>
    </div>
  )
}

export default SecondaryOverlay