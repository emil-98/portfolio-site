import React from "react";
import GlowImage from "./GlowImage";
import PageContainer from "./PageContainer";

const Home = () => {
  return(
    <PageContainer>
      <div className='max-w-[1000px] flex flex-col justify-center items-center text-center h-full'>
        <GlowImage imgSrc={'/assets/emil_profile_pic.jpeg'}/>
        <h1 className="text-5xl sm:text-7xl py-5 font-bold bg-gradient-to-tr text-transparent bg-clip-text from-blue-500 to-purple-700 dark:text-transparent dark:bg-gradient-to-tr dark:from-slate-400 dark:to-blue-700">Emil Welton</h1>
        <p className="text-xl sm:text-2xl max-w-[400px] dark:text-gray-200">
          Software Engineer specializing in full-stack web development and interested in embedded systems programming.
        </p>
      </div>
      
    </PageContainer>
  )
}

export default Home