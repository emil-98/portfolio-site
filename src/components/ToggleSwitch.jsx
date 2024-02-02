import React, { useEffect, useState } from 'react'

const ToggleSwitch = ({offIcon, onIcon}) => {

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark').matches
  const [isChecked, setIsChecked] = useState(!prefersDark)


  useEffect(() => {
    if(!isChecked){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isChecked])

  return (
    <>
      <span className='px-1'>{`${offIcon}`}</span>
      <label className='flex relative align-middle h-[24px] w-[40px] rounded-full bg-black dark:bg-slate-400 duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]'> {/* Outer piece of switch */}
        <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} className='opacity-0 w-[40px] h-[24px] align-middle peer cursor-pointer'/>
        <span className='flex absolute left-[2px] top-[2px] h-[20px] w-[20px] rounded-full transition-all duration-100 bg-white dark:bg-slate-950 peer peer-checked:translate-x-[16px] cursor-pointer'></span> {/* Slider inside switch */}
      </label>
      <span className='px-1'>{`${onIcon}`}</span>
    </>
  )
}

export default ToggleSwitch