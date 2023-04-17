import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Title } from '../../shared/Title.jsx'
import { ContentSection } from '../../shared/ContentSection.js'
import { useSelector } from 'react-redux'
import {
  selectFullResume,
  selectResumeProjects,
} from '../../../store/resumeSlice.js'

const CardCStyle = () => {
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
              <ProjectImage>
                <img src={project.image} alt="proj" />
              </ProjectImage>
              <CardA>
                <ProjectName>{project.name}</ProjectName>
                <ProjectInfo>{project.info}</ProjectInfo>
              </CardA>
              <Actions>
                <ProjectDemoButton
                  color={resume.themeColor}
                  href={'https://' + project.demoLink || '#'}
                  target="_blank"
                >
                  DEMO
                </ProjectDemoButton>
              </Actions>
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
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 0;
  width: 50px;
  height: 50px;
  img {
    border-radius: 100px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`
const ProjectList = styled.div`
  display: flex;
  justify-content: ${({ mode }) => mode || 'stretch'};
  padding-top: 3em;
  padding-bottom: 2em;
  gap: 1rem;
`
export const Actions = styled.div`
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ProjectItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--card-bg);
  width: 33%;
  height: 150px;
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

const ProjectDemoButton = styled.a`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 45px;
  font-size: 1em;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  background-color: ${({ color }) => color};
`

const CardA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  padding: 1em;
  position: relative;
`

export default CardCStyle
