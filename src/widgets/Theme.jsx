import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setThemeColor } from '../store/resumeSlice.js'
import CustomRow from '../components/shared/CustomRow.jsx'
import { Switch } from 'antd'

const ThemeWidget = () => {
  const dispatch = useDispatch()
  const { themeColor } = useSelector((state) => state.ResumeStore)
  const handleColorChange = (e) => {
    let r = document.querySelector(':root')
    r.style.setProperty('--primary-color', e.target.value)
    dispatch(setThemeColor(e.target.value))
  }
  const toggleDarkMode = () => {
    const colorModeOverride = localStorage.getItem('color-mode')
    if (colorModeOverride === 'dark') {
      localStorage.setItem('color-mode', 'light')
      document.documentElement.setAttribute('data-force-color-mode', 'light')
    } else {
      localStorage.setItem('color-mode', 'light')
      document.documentElement.setAttribute('data-force-color-mode', 'dark')
    }
  }
  return (
    <Container>
      <CustomRow>
        Select main color
        <ColorPicker
          type="color"
          value={themeColor}
          onInput={(e) => {
            handleColorChange(e)
          }}
        />
      </CustomRow>
      <CustomRow>
        Toggle light / Dark Mode (light is recommended!)
        <Switch onChange={() => toggleDarkMode()} />
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

export default ThemeWidget
