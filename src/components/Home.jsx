import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import GlowImage from "./GlowImage";
import PageContainer from "./PageContainer";

const Home = () => {
  return(
    <PageContainer>
      <GlowImage imgSrc={'src/assets/IMG_6222.jpeg'}/>

      <h1 className="text-5xl sm:text-7xl py-5 font-bold text-blue-500 dark:text-gray-400">Emil Welton</h1>
      <p className="text-xl sm:text-2xl max-w-[400px] dark:text-gray-200">
        is a software engineer specializing in full-stack web and mobile development.
      </p>
    </PageContainer>
  )
}

export default Home