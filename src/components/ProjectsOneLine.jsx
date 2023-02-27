import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Title } from './Stack'

const ProjectsOneLine = () => {
  const { projects } = useSelector((state) => state.ResumeStore)

  return (
    <ProjectsSectionContainer>
      <Title>Projects</Title>
      {projects.map((project) => {
        return (
          <ProjectItem key={project.id}>
            <CardA>
              <ProjectImage>
                <img src={project.image} alt="proj" />
              </ProjectImage>
              <ProjectData>
                <ProjectName>{project.name}</ProjectName>
                <ProjectInfo>{project.info}</ProjectInfo>
              </ProjectData>
              <Actions>
                <ProjectSourceCode
                  href={project.codeLink || '#'}
                  target="_blank"
                >
                  Code
                </ProjectSourceCode>
                <ProjectDemoButton
                  href={project.demoLink || '#'}
                  target="_blank"
                >
                  Demo
                </ProjectDemoButton>
              </Actions>
            </CardA>
          </ProjectItem>
        )
      })}
    </ProjectsSectionContainer>
  )
}

const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: goldenrod;
  overflow: hidden;
  img {
    width: 140px;
    height: 95px;
    object-fit: cover;
    object-position: center;
  }
`

const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 0.5em;
`

const Actions = styled.div`
  padding-top: 0.2em;
  display: flex;
  width: 33%;
  justify-content: space-evenly;
  gap: 0.75em;
  align-items: center;
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  max-height: 250px;
  width: 100%;
  margin: 0.5em;
  border-radius: 25px;
  box-shadow: 0 4px 1em rgb(0 0 0 / 10%);
`

const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: var(--main);
`

const ProjectInfo = styled.div`
  color: var(--subtitle);
  font-size: 0.9em;
  padding: 0.2em 0;
  word-break: break-word;
  width: 100%;
`
const ProjectSourceCode = styled.a`
  font-size: 1em;
  color: var(--subtitle);
  cursor: pointer;
  text-decoration: none;
`

const ProjectDemoButton = styled.a`
  font-weight: bolder;
  color: white;
  background-color: #0053f5;
  font-size: 1em;
  padding: 0.3em 0.5em;
  border-radius: 7px;
  cursor: pointer;
`

const CardA = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  word-break: break-word;
  height: 100%;
  width: 100%;
  padding: 2em;
`

export default ProjectsOneLine
