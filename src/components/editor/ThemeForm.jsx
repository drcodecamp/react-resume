import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectFullResume,
  setThemeColor,
  toggleDarkMode,
} from '../../store/resumeSlice.js'
import CustomRow from '../shared/CustomRow.jsx'
import { Switch } from 'antd'

const ThemeForm = () => {
  const dispatch = useDispatch()
  const resume = useSelector(selectFullResume)
  const [color, setColor] = useState(resume.themeColor || '#FFF')

  const handleDarkModeChange = () => {
    dispatch(toggleDarkMode())
  }

  const handleChange = (event) => {
    setColor(event.target.value)
    dispatch(setThemeColor(color))
  }

  return (
    <Container>
      <CustomRow>
        Select main color
        <ColorPicker type="color" onChange={handleChange} value={color} />
      </CustomRow>
      <CustomRow>
        Toggle light / Dark Mode (light mode is MOST Recommended!)
        <Switch checked={resume.isDarkMode} onChange={handleDarkModeChange} />
      </CustomRow>
    </Container>
  )
}

const ColorPicker = styled.input`
  all: unset;
  width: 45px;
  height: 45px;
  padding: 0;
  margin: 0;
  border: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

export default ThemeForm
