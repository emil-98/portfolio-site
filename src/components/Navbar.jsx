import React, {useState} from 'react'
import {FaBars, FaGithub, FaLinkedin, FaXmark} from "react-icons/fa6"
import { HiMail } from 'react-icons/hi'
import Logo from "../components/Logo"
import ToggleSwitch from './ToggleSwitch'
import { NavLink } from 'react-router-dom'
import navbarLinkText from '../text/navbarLinkText.json'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const underline = "transition-all duration-200 border-b-2 border-blue-500 pb-0"
  const noUnderline = "transition-all duration-200 border-b-2 border-transparent pb-[2px]"

  return(
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-white dark:bg-slate-950 dark:text-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-30">
      <div>
        <Logo/>
      </div>

      {/* Combined desktop/mobile menu */}
      
      <div className='flex place-items-center'>
        <ToggleSwitch
          offIcon={'🌚'}
          onIcon={'🌞'}
          currState={localStorage.getItem("theme") === "light"}
        />
        <ul className='hidden md:flex'>
          {navbarLinkText.items.map(item => {
            return <li 
              key={item.id}
              className='drop-shadow-none duration-200 hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'>
                <NavLink className={({isActive}) => isActive ? underline : noUnderline} 
                  to={item.route}
                >
                  {item.text}
                </NavLink>
            </li>
          })}
        </ul>

        {/* Hamburger */}
        <div className="flex md:hidden ps-4 z-50" onClick={handleClick}>
          {!nav ? <FaBars size={'32'}/> : <FaXmark size={'32'}/>}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`overflow-hidden shadow-[0_0_1000px_rgba(0,0,0,1)] transition-all text-2xl absolute z-40 top-0 end-0 h-screen bg-white dark:bg-slate-950 bg-opacity-70 backdrop-blur-lg flex flex-col space-y-6 items-start ${!nav ? 'w-0 p-0 text-transparent' : 'w-5/6 p-6'}`}>
        {navbarLinkText.items.map(item => {
          return <li 
            onClick={handleClick} 
            className='py-6'
            key={item.id}
          >
            <NavLink 
              className={({isActive}) => isActive ? underline : noUnderline}  
              to={item.route}
            >
              {item.text}
            </NavLink>
          </li>
        })}
      </ul>


      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-500">
            <a href="https://www.linkedin.com/in/emil-welton" className="flex justify-between items-center w-full text-white">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-gray-900">
            <a href="https://github.com/emil-98" className="flex justify-between items-center w-full text-white">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-red-600">
            <a href="mailto:ewelton98@gmail.com" className="flex justify-between items-center w-full text-white">
              Email <HiMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;