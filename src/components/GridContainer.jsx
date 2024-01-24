import React from 'react'

const GridContainer = ({children, title, id}) => {
  
  return (
    <div
      key={id}
      className='flex relative max-w-[1000px] w-fit px-5 md:px-[80px] py-[40px] h-fit self-center items-center'
    >
      <div className='h-fit grid grid-cols-1 gap-2'>
        <h2 className='col-span-2'>
          {title}
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 col-span-3 gap-8'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default GridContainer