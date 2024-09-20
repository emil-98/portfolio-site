import React from 'react'
import PageContainer from './PageContainer'
import {FaBars, FaGithub, FaLinkedin, FaXmark} from "react-icons/fa6"
import { HiMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import SkillItem from './SkillItem'

const Contact = () => {
  return (
    <PageContainer
      title={"Contact"}
    >
      <div className='flex flex-1 flex-col max-w-[1000px] self-center items-center justify-center space-y-10'>
        <a href="mailto:ewelton98@gmail.com"><h2 className='duration-300 hover:text-blue-500'>ewelton98@gmail.com</h2></a>
        <a href='https://www.linkedin.com/in/emil-welton'><h2 className='duration-300 hover:text-blue-500'>LinkedIn</h2></a>
        <a href='https://github.com/emil-98'><h2 className='duration-300 hover:text-blue-500'>Github</h2></a>
      </div>
    </PageContainer>
  )
}

export default Contact