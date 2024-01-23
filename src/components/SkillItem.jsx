import React from 'react'

const SkillItem = () => {
  return (
    <div 
      style={{'--logo-src':`url(${imgSrc})`}}
      className='w-[200px] h-[200px] rounded-xl bg-[image:var(--logo-src)] bg-cover bg-center bg-no-repeat'
    >
      <h1></h1>
    </div>
  )
}

export default SkillItem