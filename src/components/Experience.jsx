import React from 'react'
import styled from 'styled-components'
import { Title } from './Stack.jsx'
import { useSelector } from 'react-redux'
import DEMO_WORK_ICON from '../assets/work.webp'
import { ContentSection, InnerContentPadding } from './shared/ContentSection.js'

const ExperienceSection = () => {
  const { experience } = useSelector((state) => state.ResumeStore)
  return (
    <ContentSection>
      <Title>Experience</Title>
      <InnerContentPadding>
        {experience?.map((exp, idx) => {
          return <JobItem key={idx} job={exp} />
        })}
      </InnerContentPadding>
    </ContentSection>
  )
}

const JobItem = ({ job }) => {

  let inforamtionUpdate = []
  inforamtionUpdate = job.informationLi?.filter(item => item !== '')



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
        {display.experienceInFreeText ? <DescriptionText>{job.information}
        </DescriptionText>
          :
          <DescriptionLi>{inforamtionUpdate.map(item => {
            return <li>{item}</li>
          })}
          </DescriptionLi>}
      </div>
    </JobCard>
  )
}


export const DescriptionText = styled.div`
  padding-top: 0.35em;
  word-break: break-word;
  color: var(--subtitle);
`

export const DescriptionLi = styled.ul`
  padding-top: 0.35em;
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
  color: var(--primary-color);
  font-weight: bold;
`
export const JobCard = styled.div`
  display: flex;
  :nth-child(2) {
    padding-top: 1em;
  }
`
export const JobTitle = styled.div`
  display: flex;
  font-size: 1em;
  color: var(--main);
  font-weight: bold;
`

export default ExperienceSection
