import React from 'react'
import PageContainer from './PageContainer'
import skillData from '../text/skillData.json'
import GridContainer from './GridContainer'
import SkillItem from './SkillItem'

const Skills = () => {
  
  return (
    <PageContainer
      title={"Skills"}
    >
      {skillData?.skills?.map((item) => {
        return <GridContainer
          id={item.id}
          title={item.section}
        >
          {item.items?.map((skill) => {
            return <SkillItem
              id={skill.id}
              title={skill.title}
              fileName={skill.filename}
              nopad={skill.nopad && skill.nopad}
            />
          })}
        </GridContainer>
      })}
    </PageContainer>
  )
}

export default Skills