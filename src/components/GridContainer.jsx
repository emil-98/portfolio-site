import React from 'react'

const GridContainer = ({children, title, id, gridcols}) => {
  
  const cols = `md:grid-cols-${gridcols}`

  return (
    <div
      key={id}
      className='flex shrink relative max-w-[1000px] w-fit px-[40px] py-[40px] h-fit self-center items-center'
    >
      <div className='h-fit'>
        <h2 className='col-span-1 md:col-span-2'>
          {title}
        </h2>
        <div className={`grid grid-cols-4 gap-8`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default GridContainer