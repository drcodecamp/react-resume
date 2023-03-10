import { useSelector } from 'react-redux'
import { selectDisplaySettings } from '../../store/resumeSlice.js'
import { DescriptionText, JobCard, JobImage, JobTitle } from './Experience.jsx'
import { SubTitle } from '../shared/SubTitle.jsx'
import React from 'react'

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

export default EducationItem
