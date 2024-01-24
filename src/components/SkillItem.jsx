import React from 'react'

const SkillItem = ({id, title, fileName, nopad}) => {

  const padding = !nopad && "bg-origin-content"
  const imgSrc = `/assets/techlogos/${fileName}`

  return (
    <div 
      key={id}
      className='flex relative group w-fit h-fit overflow-hidden bg-white dark:bg-slate-900 rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.5)] z-0'>
      <div 
        style={{'--logo-src':`url(${imgSrc})`}}
        className={`flex duration-200 blur-none relative w-[150px] h-[150px] bg-[image:var(--logo-src)] group-hover:blur-md justify-center items-center bg-contain bg-center bg-no-repeat ${padding} p-[32px] z-10`}
      >
        
      </div>
      <div className='absolute h-full w-full justify-center z-20'>
        <h3 className='relative transition-opacity duration-200 opacity-0 group-hover:opacity-100 w-fit left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-center'>{title}</h3>
      </div>
    </div>
  )
}

export default SkillItem