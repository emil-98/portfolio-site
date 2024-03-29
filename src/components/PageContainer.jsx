import React from 'react'
import { useLocation } from 'react-router-dom'

const PageContainer = ({title, children}) => {
  const loc = useLocation();

  const alignment = loc.pathname === "/" ? "justify-center" : "justify-start"
  return (
    <div className={`flex relative flex-col xl:pt-0 pt-[60px] ${alignment} items-center w-full h-full min-h-screen bg-white dark:bg-slate-900 transition-all z-0`}>
      {title && 
        <h1 className='xl:self-start self-center flex top-[80px] sticky px-[30px] xl:bg-none dark:bg-slate-900 bg-white bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm rounded-full text-black dark:text-gray-200 z-10 tracking-[-0.035em]'>
          {title}
        </h1>
      }
      
      {children}
    </div>
  )
}

export default PageContainer