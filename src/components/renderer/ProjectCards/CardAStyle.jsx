import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Title } from '../../shared/Title.jsx'
import { ContentSection } from '../../shared/ContentSection.js'
import { useSelector } from 'react-redux'
import {
  selectFullResume,
  selectResumeProjects,
} from '../../../store/resumeSlice.js'

const CardAStyle = () => {
  const projects = useSelector(selectResumeProjects)
  const resume = useSelector(selectFullResume)
  console.log('rerendering')
  const projectListMode = useMemo(() => {
    switch (projects.length) {
      case 1:
        return 'flex-start'
      case 2:
        return 'flex-start'
      default:
        return 'space-between'
    }
  }, [projects.length])
  return (
    <ContentSection>
      <Title>Projects</Title>
      <ProjectList size={projectListMode}>
        {projects.map((project) => {
          return (
            <ProjectItem key={project.id}>
              <CardA>
                <ProjectImage>
                  <img src={project.image} alt="proj" />
                </ProjectImage>
                <ProjectName>{project.name}</ProjectName>
                <ProjectInfo>{project.info}</ProjectInfo>
                <Actions>
                  <ProjectSourceCode
                    href={'https://' + project.codeLink || '#'}
                    target="_blank"
                  >
                    code
                  </ProjectSourceCode>
                  |
                  <ProjectDemoButton
                    color={resume.themeColor}
                    href={'https://' + project.demoLink || '#'}
                    target="_blank"
                  >
                    demo
                  </ProjectDemoButton>
                </Actions>
              </CardA>
            </ProjectItem>
          )
        })}
      </ProjectList>
    </ContentSection>
  )
}

const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  overflow: hidden;

  img {
    width: 125%;
    height: 110px;
    object-fit: cover;
    object-position: center;
  }
`
const ProjectList = styled.div`
  display: flex;
  justify-content: ${({ mode }) => mode || 'stretch'};
  padding-top: 1em;
  gap: 1rem;
`
export const Actions = styled.div`
  padding-top: 0.25em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--card-bg);
  max-height: 270px;
  width: 33%;
  margin-right: 0.35em;
  border-radius: 25px;
  box-shadow: 0 4px 1em rgb(0 0 0 / 10%);
`

const ProjectName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: var(--main);
`

const ProjectInfo = styled.div`
  color: var(--subtitle);
  font-size: 0.875em;
  min-height: 50px;
`
const ProjectSourceCode = styled.a`
  font-size: 1em;
  color: var(--subtitle);
  cursor: pointer;
  text-decoration: none;
`

const ProjectDemoButton = styled.a`
  font-weight: bold;
  color: ${({ color }) => color || 'white'};
  padding: 0.25rem 0.5rem;
  font-size: 1em;
  border-radius: 8px;
  cursor: pointer;
`

const CardA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-word;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  padding: 1em;
`

export default CardAStyle
