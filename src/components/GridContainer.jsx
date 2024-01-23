import React from 'react'

const GridContainer = ({children}) => {
  
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
      {children}
    </div>
  )
}

export default GridContainer