import React from 'react'

const ProjectItem = ({id, title, body, image}) => {
  return (
    <div 
      key={id}
      className='grid relative group h-fit col-span-4 md:col-span-2 overflow-hidden bg-white dark:bg-slate-950 rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.5)] z-0'
    >
      <div className={`w-full h-[250px] bg-[image:url(${image})] bg-cover bg-center bg-no-repeat`}>
        
      </div>
      <div className='w-full h-fit p-4'>
        <h2>
          {title}
        </h2>
        <ul className='flex list-none justify-between'>

        </ul>
        <p>
          {body}
        </p>
      </div>
      <div>

      </div>
    </div>
  )
}

export default ProjectItem