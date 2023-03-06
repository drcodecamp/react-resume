import React from 'react'
import { Title } from './Stack.jsx'
import { useSelector } from 'react-redux'
import { DescriptionText, JobCard, JobImage, JobTitle } from './Experience.jsx'
import { ContentSection, InnerContentPadding } from './shared/ContentSection.js'
import {
  selectDisplaySettings,
  selectResumeEducation,
} from '../store/resumeSlice.js'
import styled from 'styled-components'

const EducationSection = () => {
  const education = useSelector(selectResumeEducation)
  return (
    <ContentSection>
      <Title>Education</Title>
      <InnerContentPadding>
        {education &&
          education.map((educationItem) => (
            <EducationItem key={educationItem.id} edu={educationItem} />
          ))}
      </InnerContentPadding>
    </ContentSection>
  )
}

const EducationItem = ({ edu }) => {
  const display = useSelector(selectDisplaySettings)
  return (
    <JobCard>
      {display.educationIcons && (
        <JobImage>
          <img src={edu.icon} alt="work" />
        </JobImage>
      )}
      <div>
        <JobTitle>
          <div>{edu.name}</div>
          <SubTitle>{edu.duration}</SubTitle>
        </JobTitle>
        <DescriptionText>{edu.description}</DescriptionText>
      </div>
    </JobCard>
  )
}

export const SubTitle = styled.p`
  color: var(--subtitle);
  font-weight: normal;
`

export default EducationSection
