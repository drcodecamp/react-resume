import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
  selectFullResume,
  selectResumeProjects,
} from '../../../store/resumeSlice.js'
import { Title } from '../../shared/Title.jsx'
import {
  ContentSection,
  InnerContentPadding,
} from '../../shared/ContentSection.js'

const CardLinearStyle = () => {
  const projects = useSelector(selectResumeProjects)
  const resume = useSelector(selectFullResume)
  return (
    <ContentSection>
      <Title>Projects</Title>
      <InnerContentPadding>
        {projects &&
          projects.map((project) => {
            return (
              <ProjectItem key={project.id}>
                <CardA>
                  <ProjectData>
                    <ProjectInfo>
                      <Span>{project.name}</Span>
                      {project.info}
                    </ProjectInfo>
                  </ProjectData>
                  <Actions>
                    <ProjectSourceCode
                      href={'https://' + project.codeLink || '#'}
                      target="_blank"
                    >
                      code
                    </ProjectSourceCode>
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
      </InnerContentPadding>
    </ContentSection>
  )
}

const Actions = styled.div`
  padding-top: 0.2em;
  display: flex;
  width: 150px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 100%;
`

const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`

const ProjectInfo = styled.div`
  font-size: 1em;
  word-break: break-word;
  width: 100%;
  color: var(--subtitle);
`
const Span = styled.span`
  color: var(--main);
  font-weight: bolder;
  display: flex;
`

const ProjectSourceCode = styled.a`
  font-size: 1em;
  color: var(--subtitle);
  cursor: pointer;
`

const ProjectDemoButton = styled.a`
  font-weight: bolder;
  color: ${({ color }) => color || 'white'};
  font-size: 1em;
  border-radius: 7px;
  cursor: pointer;
`

const CardA = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 0.5em;
`

export default CardLinearStyle
