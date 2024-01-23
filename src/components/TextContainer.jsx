import React from 'react'

const TextContainer = ({title, body}) => {
  return (
    <div className='flex relative max-w-[1000px] w-full px-5 md:px-[80px] py-[40px] h-fit self-center items-center'>
      <div className='h-fit grid grid-cols-1 md:grid-cols-5'>

        <h2 className='text-black dark:text-gray-200 col-span-2 tracking-tight'>
          {title}
        </h2>
        <p className='w-fit text-justify col-span-3 whitespace-pre-line '>
          {body}
        </p>
      </div>
    </div>
  )
}

export default TextContainer