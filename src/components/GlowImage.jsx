import React from 'react'

const GlowImage = ({imgSrc}) => {
  return (
    <div className="flex relative w-fit h-fit items-center justify-center z-0">
      <div 
        style={{'--image-src':`url(${imgSrc})`}}
        className={`flex fixed blur-xl w-[300px] h-[300px] rounded-full bg-[image:var(--image-src)] bg-no-repeat bg-cover bg-center z-10`}>
      </div>
      <div 
        style={{'--image-src':`url(${imgSrc})`}}
        className={`flex w-[300px] h-[300px] rounded-full bg-[image:var(--image-src)] bg-no-repeat bg-cover bg-center z-20`}>
      </div>
    </div>
  )
}

export default GlowImage