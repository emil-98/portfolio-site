import React from 'react'

const PageContainer = (props) => {
  return (
    <div className='flex flex-col pt-[60px] justify-center items-center w-full h-full min-h-screen bg-white dark:bg-slate-900 transition-all z-0'>
      {props.children}
    </div>
  )
}

export default PageContainer