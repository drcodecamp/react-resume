import React from 'react'
import styled from 'styled-components'
import { setSkills, toggleStack, removeSkill } from '../store/resumeSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Switch, Tag } from 'antd'
import { useState } from 'react'
import CustomRow from '../components/shared/CustomRow.jsx'

const StackWidget = () => {
  const dispatch = useDispatch()
  const { display, stack } = useSelector((state) => state.ResumeStore)
  const [userInput, setUserInput] = useState('')

  const handleOnEnter = () => {
    userInput.length > 0 && dispatch(setSkills(userInput)), setUserInput('')
    return
  }
  return (
    <Container>
      <CustomRow>
        Enable/Disable stack section
        <Switch
          onClick={() => dispatch(toggleStack())}
          checked={display.stack}
        />
      </CustomRow>
      <CustomRow>
        Enter skills here, to make skill bold, just click on it on the resume
        document!
      </CustomRow>
      <CustomRow>
        <StackItems>
          {stack &&
            stack.map((skill) => (
              <Tag
                key={skill.id}
                closable={true}
                onClose={() => {
                  dispatch(removeSkill(skill.id))
                }}
              >
                {skill.name}
              </Tag>
            ))}
        </StackItems>
        <Input
          placeholder="Add skill"
          value={userInput}
          disabled={!display.stack}
          size="small"
          onChange={({ target }) => setUserInput(target.value)}
          onPressEnter={handleOnEnter}
        />
      </CustomRow>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const StackItems = styled.p`
  display: flex;
  flex-wrap: wrap;
`

export default StackWidget
