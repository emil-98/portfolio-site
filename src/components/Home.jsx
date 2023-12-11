import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import GlowImage from "./GlowImage";
import PageContainer from "./PageContainer";

const Home = () => {
  return(
    <PageContainer>
      <GlowImage imgSrc={'https://t4.ftcdn.net/jpg/00/63/22/59/360_F_63225999_1Jhp1HJRAogheidGZA74Asae2jFJelDV.jpg'}/>

      <h1 className="text-5xl sm:text-7xl py-5 font-bold text-blue-500 dark:text-gray-400">Emil Welton</h1>
      <p className="text-xl sm:text-2xl max-w-[400px] dark:text-gray-200">
        is a software engineer specializing in full-stack web and mobile development.
      </p>
    </PageContainer>
  )
}

export default Home