import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import { HiMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../components/Logo"
import ToggleSwitch from './ToggleSwitch'

const Navbar = () => {
  const [nav, toggleNav] = useState(false);
  const handleClick = () => toggleNav(!nav);

  return(
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-white dark:bg-slate-950 dark:text-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <div>
        <Logo/>
      </div>

      {/* Desktop Menu */}
      
      <div className='hidden md:flex'>
        <ToggleSwitch
          offIcon={'🌚'}
          onIcon={'🌞'}
        />
        <ul className='flex'>
          <li className=' drop-shadow-none duration-300 hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'><a href='/'>Home</a></li>
          <li className=' drop-shadow-none duration-300 hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'><a href='/about'>About</a></li>
          <li className=' drop-shadow-none duration-300 hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'><a href='/skills'> Skills</a></li>
          <li className=' drop-shadow-none duration-300 hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'><a href='/projects'>Projects</a></li>
          <li className=' drop-shadow-none duration-300 hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'><a href='/contact'>Contact</a></li>
        </ul>
      </div>
      
      

      {/* Hamburger */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>


        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>


        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-500">
              <a href="https://www.linkedin.com/in/emil-welton" className="flex justify-between items-center w-full text-gray-300">
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-gray-900">
              <a href="https://github.com/emil-98" className="flex justify-between items-center w-full text-gray-300">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-red-600">
              <a href="mailto:ewelton98@gmail.com" className="flex justify-between items-center w-full text-gray-300">
                Email <HiMail size={30}/>
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-gray-600">
              <a href="/" className="flex justify-between items-center w-full text-gray-300">
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Navbar;