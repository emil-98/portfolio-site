import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

const ProjectItem = ({id, title, skillsUsed, github, link, body, image}) => {

  console.log(skillsUsed)

  const coverImg = `/assets/projectimages/${image}`

  const [expanded, setExpanded] = useState(false)
  const handleClick = () => setExpanded(!expanded)

  return (
    <div 
      key={id}
      className={`flex flex-col duration-300 group h-fit col-span-4 md:col-span-2 overflow-hidden  bg-white dark:bg-slate-950 rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
    >
      <div 
        style={{'--cover-src':`url(${coverImg})`}}
        className={`w-full h-[250px] bg-[image:var(--cover-src)] bg-cover bg-center bg-no-repeat`}></div>

      <div className={`transition-all duration-300 w-full p-4 `}>
        <h2>
          {title}
        </h2>
        <div className='flex w-full h-[36px] justify-between'>
          <ul className='flex h-fit w-fit list-none self-center'>
            {skillsUsed.map((icon, index) => {

              const imgSrc = `/assets/techlogos/${icon}`
              
              return (
                <li 
                  key={index} 
                  style={{'--logo-src':`url(${imgSrc})`}}
                  className={'w-[24px] h-[24px] bg-[image:var(--logo-src)] bg-contain bg-center bg-no-repeat rounded-md'}
                ></li>
              )
            })}
          </ul>
          <div className='flex space-x-4'>
            {github && <a href={github} className='duration-300 w-fit h-fit self-end dark:text-gray-200 border-2 dark:border-gray-500 border-gray-600 dark:hover:border-blue-500 hover:border-blue-500 rounded-full px-2 py-1'>View on Github</a>}
            {link && <a href={link} className='duration-300 w-fit h-fit self-end dark:text-gray-200 border-2 dark:border-gray-500 border-gray-600 dark:hover:border-green-500 hover:border-green-500 rounded-full px-2 py-1'>Run App</a>}
          </div>
        </div>
        
        <p className={`${expanded ? '' : 'line-clamp-2 pb-0'}`}>
          {body}
        </p>
      </div>
      <div 
        className='transition-all duration-300 flex justify-center hover:bg-[rgba(0,0,0,0.1)] dark:hover:bg-[rgba(255,255,255,0.1)] text-black dark:text-gray-200 p-2'
        onClick={handleClick}
      >
        {expanded ? <FaChevronUp/> : <FaChevronDown/>}
      </div>
    </div>
  )
}

export default ProjectItem