import React from 'react'
import styled from 'styled-components'
import HeaderSection from './Header'
import StackSection from './Stack'
import ProjectsSection from './Projects.jsx'
import ExperienceSection from './Experience'
import EducationSection from './Education'
import { useSelector } from 'react-redux'
import ProjectsOneLine from './ProjectsOneLine'
import { selectDisplaySettings } from '../store/resumeSlice.js'

const ResumeContent = () => {
  const display = useSelector(selectDisplaySettings)
  return (
    <ResumeContentContainer>
      <HeaderSection />
      <FlexArea>
        {display.projects &&
          (display.oneLineProjects ? <ProjectsOneLine /> : <ProjectsSection />)}
        {display.stack && <StackSection />}
        {display.experience && <ExperienceSection />}
        {display.education && <EducationSection />}
      </FlexArea>
    </ResumeContentContainer>
  )
}

const FlexArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`

const ResumeContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
`

export default ResumeContent
