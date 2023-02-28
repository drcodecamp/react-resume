import React from 'react'
import { Title } from './Stack.jsx'
import { useSelector } from 'react-redux'
import DEMO_EDU_ICON from '../assets/education.webp'
import { DescriptionText, JobCard, JobImage, JobTitle } from './Experience.jsx'
import { ContentSection, InnerContentPadding } from './shared/ContentSection.js'

const EducationSection = () => {
  const { education } = useSelector((state) => state.ResumeStore)
  return (
    <ContentSection>
      <Title>Education</Title>
      <InnerContentPadding>
        {education.map((edu, idx) => {
          return <EducationItem key={idx} edu={edu} />
        })}
      </InnerContentPadding>
    </ContentSection>
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

export default EducationSection
