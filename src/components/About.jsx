import React from 'react'
import PageContainer from './PageContainer'
import TextContainer from './TextContainer'
import textData from '../text/aboutText.json'

const About = () => {
  return (
    <PageContainer
      title={"About"}
    >
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