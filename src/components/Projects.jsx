import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Title } from './Stack'
import SRC from '../assets/bg1.webp'
import SRC2 from '../assets/bg2.webp'
import SRC3 from '../assets/bg3.webp'
import { useSelector } from 'react-redux'

const ProjectsSection = () => {
  const { projects } = useSelector((state) => state.ResumeStore)
  return (
    <ProjectsSectionContainer>
      <Title>Projects</Title>
      <ProjectList>
        {projects.map((project, idx) => {
          return (
            <ProjectItem key={idx}>
              <CardA>
                <ProjectImage>
                  <img src={project.image} alt="proj" />
                </ProjectImage>
                <ProjectName>{project.name}</ProjectName>
                <ProjectInfo>{project.info}</ProjectInfo>
                <Actions>
                  <ProjectSourceCode
                    href={project.codeLink || '#'}
                    target="_blank"
                  >
                    Code
                  </ProjectSourceCode>
                  |
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
      </ProjectList>
    </ProjectsSectionContainer>
  )
}

const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: goldenrod;
  width: 100%;
  overflow: hidden;
  img {
    width: 125%;
    height: 125px;
    object-fit: cover;
    object-position: center;
  }
`

const ProjectList = styled.div`
  display: flex;
  justify-content: stretch;
`

const Actions = styled.div`
  padding-top: 0.2em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--card-bg);
  max-height: 250px;
  width: 33%;
  margin: 0.5em;
  border-radius: 25px;
  box-shadow: 0 4px 1em rgb(0 0 0 / 10%);
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
  min-height: 50px;
`
const ProjectSourceCode = styled.a`
  font-size: 1.1em;
  color: var(--subtitle);
  cursor: pointer;
  text-decoration: none;
`

const ProjectDemoButton = styled.a`
  font-weight: bolder;
  color: var(--primary-color);
  font-size: 1.25em;
  cursor: pointer;
`

const CardA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-word;
  height: 100%;
  width: 100%;
  padding: 0.5em;
`

const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 0.5em;
`

export default ProjectsSection
