import React from 'react'
import PageContainer from './PageContainer'
import GridContainer from './GridContainer'
import ProjectItem from './ProjectItem'
import projectData from '../text/projectData.json'

const Projects = () => {
  return (
    <PageContainer
      title={"Projects"}
    >
      <GridContainer
        gridcols={3}
      >
        {projectData?.projects?.map((project) => {
          return <ProjectItem
                   title={project.title}
                   body={project.desc}
                   image={project.image}
                 />
        })}
        
      </GridContainer>
    </PageContainer>
  )
}

export default Projects