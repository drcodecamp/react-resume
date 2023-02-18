import React from 'react'
import styled from 'styled-components'
import HeaderSection from './Header'
import StackSection from './Stack'
import ProjectsSection from './Projects.jsx'
import ExperienceSection from './Experience'
import EducationSection from './Education'
import { useSelector } from 'react-redux'

const ResumeContent = () => {
  const { display } = useSelector((state) => state.ResumeStore)
  return (
    <ResumeContentContainer>
      <HeaderSection />
      {display.projects && <ProjectsSection />}
      {display.stack && <StackSection />}
      {display.experience && <ExperienceSection />}
      {display.education && <EducationSection />}
    </ResumeContentContainer>
  )
}

const ResumeContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
  section {
  }
`

export default ResumeContent
