import React from 'react'

const PageContainer = ({title, children}) => {
  return (
    <div className='flex relative flex-col pt-[60px] justify-center items-center w-full h-full min-h-screen bg-white dark:bg-slate-900 transition-all z-0'>
      <h1 className='xl:self-start self-center flex top-[90px] sticky px-[30px] text-[47px] font-bold xl:bg-none xl:shadow-none shadow-[0_0_15px_rgba(0,0,0,0.5)] dark:bg-slate-900 bg-opacity-70 backdrop-blur-lg rounded-full text-black dark:text-gray-400 z-10'>
        {title}
      </h1>
      {children}
    </div>
  )
}

export default PageContainer