import React from 'react'
import styled from 'styled-components'
import { setSkills, toggleStack } from '../store/resumeSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Switch } from 'antd'
import CustomRow from '../components/shared/CustomRow.jsx'

const StackWidget = () => {
  const dispatch = useDispatch()
  const { display, stack } = useSelector((state) => state.ResumeStore)
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
        Enter skills seperated by comma , to make skill bold, just click on it
        on the resume document!
      </CustomRow>
      <CustomRow>
        <Input
          disabled={!display.stack}
          value={stack}
          onChange={({ target }) => dispatch(setSkills(target.value))}
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

export default StackWidget
