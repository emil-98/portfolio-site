import React from "react";
import GlowImage from "./GlowImage";
import PageContainer from "./PageContainer";

const Home = () => {
  return(
    <PageContainer>
      <div className='max-w-[1000px] flex flex-col justify-center items-center text-center h-full'>
        <GlowImage imgSrc={'/assets/IMG_6222.jpeg'}/>
        <h1 className="text-5xl sm:text-7xl py-5 font-bold text-blue-500 dark:text-gray-400">Emil Welton</h1>
        <p className="text-xl sm:text-2xl max-w-[400px] dark:text-gray-200">
          Software Engineer specializing in full-stack web and mobile development
        </p>
      </div>
      
    </PageContainer>
  )
}

export default Home