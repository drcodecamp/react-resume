import React from 'react'
import { useSelector } from 'react-redux'
import {
  ContentSection,
  InnerContentPadding,
} from '../shared/ContentSection.js'
import { selectResumeEducation } from '../../store/resumeSlice.js'
import { Title } from '../shared/Title.jsx'
import EducationItem from './EducationItem.jsx'

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

export default EducationSection
