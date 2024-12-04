import React from 'react'
import PageContainer from './PageContainer'
import TextContainer from './TextContainer'
import textData from '../text/aboutText.json'
import AboutItem from './AboutItem'

const About = () => {
  return (
    <PageContainer
      title={"About"}
    >
      {textData?.about?.map((item) => {
        return <div 
          key={item.id}
          className='flex relative max-w-[1000px] w-full px-5 md:px-[80px] pt-[40px] h-fit self-center items-center'
        >
          <div
            className='h-fit w-full grid grid-cols-1'
          >
            <h2 className='pe-4 tracking-tight'>
              {item.title}
            </h2>
            <ul className='flex relative flex-col'>
              {item.items.reverse().map(point => {
                return <AboutItem
                  id={point.id}
                  name={point.name}
                  date={point.date}
                  desc={point.desc}
                  tasks={point.tasks}
                />
              })}
            </ul>
          </div>
        </div>
      })}
    </PageContainer>
  )
}

export default About