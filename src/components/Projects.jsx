import React from 'react'
import styled from 'styled-components'
import { Title } from './Stack'
import SRC from '../assets/bg.png'
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
                  <img src={project.image || SRC} alt="proj" />
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
  border-radius: 11%;
  background-color: goldenrod;
  aspect-ratio: 1/0.8;
  width: 100%;
  overflow: hidden;
  img {
    width: 110%;
    height: 110%;
    object-fit: cover;
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
  background-color: white;
  max-height: 320px;
  width: 33%;
  margin: 1em;
  border-radius: 25px;
  box-shadow: 0 4px 30px rgb(0 0 0 / 15%);
`
const ProjectName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: black;
`

const ProjectInfo = styled.div`
  color: #858585;
  font-size: 0.85em;
`
const ProjectSourceCode = styled.a`
  font-size: 1.1em;
  color: #858585;
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
  padding: 1em;
`

const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 1em;
`

export default ProjectsSection
