import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StackSection = () => {
  const resume = useSelector((state) => state.ResumeStore)
  const [skills, setSkills] = useState([''])

  useEffect(() => {
    const skills = resume.stack.split(',')
    let skillsArray = []
    skills.forEach((skill, i) => {
      skillsArray[i] = {
        name: skill,
        isActivated: false,
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
    <StackSectionContainer>
      <Title>Stack</Title>
      <StackItems>
        {skills.map((skill, idx) => (
          <Tag
            onClick={() => handleClick(idx)}
            isActive={skill.isActivated}
            key={idx}
          >
            {skill.name}
          </Tag>
        ))}
      </StackItems>
    </StackSectionContainer>
  )
}

const Tag = styled.span`
  color: ${({ isActive }) => (isActive ? 'var(--primary-color)' : 'gray')};
  font-weight: ${({ isActive }) => (isActive ? 'bolder' : 'regular')};
  text-align: center;
  cursor: pointer;
  padding: 1em;
`

const StackItems = styled.p`
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.p`
  padding-bottom: 15px;
  font-weight: bold;
  color: #434343;
  font-size: 1.25em;
`

const StackSectionContainer = styled.section`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export default StackSection
