import React from 'react'
import styled from 'styled-components'
import { Title } from './Stack.jsx'
import { useSelector } from 'react-redux'
import DEMO_EDU_ICON from '../assets/education.webp'
import {
  DescriptionText,
  JobCard,
  JobImage,
  JobIndustry,
  JobTitle,
} from './Experience.jsx'

const EducationSection = () => {
  const { education } = useSelector((state) => state.ResumeStore)

  return (
    <EducationSectionContainer>
      <Title>Education</Title>
      {education.map((edu, idx) => {
        return <EducationItem key={idx} edu={edu} />
      })}
    </EducationSectionContainer>
  )
}

const EducationItem = ({ edu }) => {
  const { display } = useSelector((state) => state.ResumeStore)
  return (
    <JobCard>
      {display.educationIcons && (
        <JobImage>
          <img src={edu.icon || DEMO_EDU_ICON} alt="work" />
        </JobImage>
      )}

      <div>
        <JobTitle>
          <div>{edu.name}</div>
        </JobTitle>
        <div>{edu.duration}</div>
        <DescriptionText>{edu.description}</DescriptionText>
      </div>
    </JobCard>
  )
}

const EducationSectionContainer = styled.section`
  display: flex;
  padding-top: 1em;
  flex-direction: column;
`

export default EducationSection
