import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ContentSection, InnerContentPadding } from './shared/ContentSection.js'

const initialSelectedSkills = ['javascript', 'react.js', 'node.js']

const StackSection = () => {
  const resume = useSelector((state) => state.ResumeStore)
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const skills = resume.stack.split(',')
    let skillsArray = []
    skills.forEach((skill, i) => {
      skillsArray[i] = {
        name: skill,
        isActivated: initialSelectedSkills.includes(skill),
      }
    })
    setSkills(skillsArray)
  }, [resume.stack])

  const handleClick = (idx) => {
    const skillsClone = [...skills]
    skillsClone[idx] = {
      ...skillsClone[idx],
      isActivated: !skillsClone[idx].isActivated,
    }
    setSkills(skillsClone)
  }
  return (
    <ContentSection>
      <Title>Stack</Title>
      <InnerContentPadding>
        <StackItems>
          {skills &&
            skills.map((skill, idx) => (
              <Tag
                onClick={() => handleClick(idx)}
                isActive={skill.isActivated}
                key={idx}
              >
                {skill.name[0].toUpperCase() +
                  skill.name.slice(1, skill.name.length)}
              </Tag>
            ))}
        </StackItems>
      </InnerContentPadding>
    </ContentSection>
  )
}

const Tag = styled.span`
  font-size: 1em;
  color: ${({ isActive }) =>
    isActive ? 'var(--primary-color)' : 'var(--subtitle)'};
  font-weight: ${({ isActive }) => (isActive ? 'bolder' : 'regular')};
  text-align: center;
  cursor: pointer;
  padding-right: 0.75em;
  padding-bottom: 0.35em;
`

const StackItems = styled.p`
  display: flex;
  gap: 0.25em;
  padding-top: 0.25em;
  flex-wrap: wrap;
`

export const Title = styled.p`
  padding: 0.5em 0;
  font-weight: 700;
  color: var(--main);
  font-size: 1.25em;
`

const StackSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export default StackSection
