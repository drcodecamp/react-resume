import React from 'react'
import styled from 'styled-components'
import { Title } from './Stack.jsx'
import { useSelector } from 'react-redux'

import DEMO_WORK_ICON from '../assets/work.webp'

const ExperienceSection = () => {
  const { experience } = useSelector((state) => state.ResumeStore)
  return (
    <ExperienceSectionContainer>
      <Title>Experience</Title>
      {experience?.map((exp, idx) => {
        return <JobItem key={idx} job={exp} />
      })}
    </ExperienceSectionContainer>
  )
}

const JobItem = ({ job }) => {
  const { display } = useSelector((state) => state.ResumeStore)
  return (
    <JobCard>
      {display.jobIcons && (
        <JobImage>
          <img src={job.icon || DEMO_WORK_ICON} alt="work" />
        </JobImage>
      )}
      <div>
        <JobTitle>
          <div>{job.name}</div>
          <JobIndustry>{job.industry}</JobIndustry>
        </JobTitle>
        <div>{job.date}</div>
        <DescriptionText>{job.information}</DescriptionText>
      </div>
    </JobCard>
  )
}

export const DescriptionText = styled.div`
  padding-top: 0.35em;
  word-break: break-word;
  color: var(--subtitle);
`

export const JobImage = styled.div`
  aspect-ratio: 1;
  display: flex;
  padding: 0 10px;
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 15px;
  }
`

export const JobIndustry = styled.div`
  display: flex;
  padding-left: 0.2em;
  color: var(--primary-color);
  font-weight: bold;
`

export const JobCard = styled.div`
  display: flex;
  padding-top: 1em;
`

export const JobTitle = styled.div`
  display: flex;
  font-size: 1.25em;
  color: var(--main);
  font-weight: bold;
`
const ExperienceSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export default ExperienceSection
