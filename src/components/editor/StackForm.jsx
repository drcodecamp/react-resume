import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import {
  removeSkill,
  selectDisplaySettings,
  selectResumeStack,
  setSkills,
  toggleActivatedSkill,
  toggleStack,
} from '../../store/resumeSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, Switch, Tag } from 'antd'
import CustomRow from '../shared/CustomRow.jsx'
import { MAX_STACK_ITEMS } from '../../constants/appSettings.js'

const StackForm = () => {
  const dispatch = useDispatch()
  const display = useSelector(selectDisplaySettings)
  const stack = useSelector(selectResumeStack)
  const [userInput, setUserInput] = useState('')

  const isAlreadyIncluded = useMemo(() => {
    return stack.some((skill) => skill.name === userInput)
  }, [userInput])

  const handleOnEnter = () => {
    if (stack.length >= MAX_STACK_ITEMS) return
    if (isAlreadyIncluded) return
    if (userInput.length) {
      dispatch(setSkills(userInput))
      setUserInput('')
    }
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
        Enter only important skills, to bold skill, first add it then click on
        the tag below.
        <StacksLeft>{stack.length} / 20 skills</StacksLeft>
      </CustomRow>
      <CustomRow>
        <SkillForm>
          <Input
            status={isAlreadyIncluded ? 'error' : ''}
            style={{ width: '200px' }}
            placeholder="Add skill"
            value={userInput}
            disabled={!display.stack}
            onChange={({ target }) => setUserInput(target.value)}
            onPressEnter={handleOnEnter}
          />
          <Button
            disabled={isAlreadyIncluded}
            type="primary"
            onClick={handleOnEnter}
            style={{ float: 'left', marginLeft: '20px' }}
          >
            Add
          </Button>
        </SkillForm>
      </CustomRow>
      <CustomRow>
        <StackItems>
          {stack &&
            stack.map((skill) => (
              <CustomTag
                closable
                key={skill.id}
                color={skill.isActivated ? 'blue' : ''}
                onClick={() => dispatch(toggleActivatedSkill(skill.id))}
                onClose={() => {
                  dispatch(removeSkill(skill.id))
                }}
              >
                {skill.name}
              </CustomTag>
            ))}
        </StackItems>
      </CustomRow>
    </Container>
  )
}

const StacksLeft = styled.div`
  padding-left: 1em;
`

const CustomTag = styled(Tag)`
  font-size: 1.2em;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;
  svg {
    font-size: 1.5em;
  }
  svg:hover {
    transform: scale(1.5);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const StackItems = styled.p`
  display: flex;
  flex-wrap: wrap;
`
const SkillForm = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
`

export default StackForm
