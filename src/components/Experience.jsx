import React from 'react'
import styled from 'styled-components'
import { Title } from './Stack.jsx'
import { useSelector } from 'react-redux'
import DEMO_WORK_ICON from '../assets/work.webp'
import { ContentSection, InnerContentPadding } from './shared/ContentSection.js'
import {
  selectDisplaySettings,
  selectFullResume,
  selectResumeExp,
} from '../store/resumeSlice.js'

const ExperienceSection = () => {
  const experience = useSelector(selectResumeExp)
  return (
    <ContentSection>
      <Title>Experience</Title>
      <InnerContentPadding>
        {experience &&
          experience?.map((exp) => <JobItem key={exp.id} job={exp} />)}
      </InnerContentPadding>
    </ContentSection>
  )
}

const JobItem = ({ job }) => {
  const resume = useSelector(selectFullResume)
  const display = useSelector(selectDisplaySettings)
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
          <JobIndustry color={resume.themeColor}>{job.industry}</JobIndustry>
        </JobTitle>
        <div>{job.date}</div>
        {display.experienceInFreeText ? <DescriptionText>{job.information}
        </DescriptionText>
          :
          <DescriptionList>{job.informationList && job.informationList.map((item) => {
            if (item.val === '') return
            return <li key={item.id}>{item.val}</li>
          }
          )
          }
          </DescriptionList>}
      </div>
    </JobCard>
  )
}


export const DescriptionText = styled.div`
  padding-top: 0.35em;
  word-break: break-word;
  color: var(--subtitle);
`

export const DescriptionList = styled.ul`
  padding-top: 0.80em;
  padding-left:25px;
  word-break: break-word;
  color: var(--main);
`
export const JobImage = styled.div`
  aspect-ratio: 1;
  display: flex;
  padding-right: 10px;
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
  color: ${({ color }) => color || 'white'};
  font-weight: bold;
`
export const JobCard = styled.div`
  display: flex;
  padding-top: 1em;
`
export const JobTitle = styled.div`
  display: flex;
  font-size: 1em;
  color: var(--main);
  font-weight: bold;
`

export default ExperienceSection
