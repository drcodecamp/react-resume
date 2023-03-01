import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ContentSection, InnerContentPadding } from './shared/ContentSection.js'
import { toggleActivatedSkill } from '../store/resumeSlice.js'

const StackSection = () => {
  const { stack } = useSelector((state) => state.ResumeStore)
  const dispatch = useDispatch()

  return (
    <ContentSection>
      <Title>Stack</Title>
      <InnerContentPadding>
        <StackItems>
          {stack &&
            stack.map((skill, index) => (
              <Tag
                onClick={() => dispatch(toggleActivatedSkill(index))}
                isActive={skill.isActivated}
                key={skill.id}
              >
                {skill.name}
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
  flex-wrap: wrap;
`

export const Title = styled.p`
  padding-top: 0.5em;
  font-weight: bold;
  color: var(--main);
  font-size: 1.25em;
  text-decoration: underline;
`

const StackSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export default StackSection
