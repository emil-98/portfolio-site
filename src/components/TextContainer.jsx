import React from 'react'

const TextContainer = ({title, body}) => {
  return (
    <div className='max-w-[1000px] w-full px-[80px] py-[40px] h-fit items-center'>
      <div className='h-fit grid grid-cols-1 md:grid-cols-5'>

        <h2 className='text-black dark:text-gray-200 text-[28px] font-bold col-span-2'>
          {title}
        </h2>
        <p className='max-w-[450px] text-black dark:text-gray-400 text-justify col-span-3 whitespace-pre-line'>
          {body}
        </p>
      </div>
    </div>
  )
}

export default TextContainer