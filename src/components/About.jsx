import React from 'react'
import PageContainer from './PageContainer'
import TextContainer from './TextContainer'
import textData from '../text/aboutText.json'

const About = () => {
  return (
    <PageContainer>
      <h1 className='xl:self-end self-center flex top-[90px] fixed px-[60px] text-[47px] font-bold text-black dark:text-gray-400'>
        About
      </h1>
      {textData?.about?.map((item) => (
        <TextContainer
          title={item.title}
          body={item.text}
        />
      ))}
    </PageContainer>
  )
}

export default About