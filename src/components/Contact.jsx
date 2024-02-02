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
      <div className='md:w-[400px] w-full h-[100px] rounded-[25px] p-2 dark:bg-slate-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
        <h2>
          Title
        </h2>
      </div>
    </PageContainer>
  )
}

export default Contact