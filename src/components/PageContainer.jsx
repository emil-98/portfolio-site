import React from 'react'

const PageContainer = (props) => {
  return (
    <div className='w-full h-screen bg-white dark:bg-slate-900 transition-all z-0'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center text-center h-full'>
        {props.children}
      </div>
    </div>
  )
}

export default PageContainer