import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setThemeColor } from '../store/resumeSlice.js'
import CustomRow from '../components/shared/CustomRow.jsx'
import { Switch } from 'antd'

const ThemeWidget = () => {
  const dispatch = useDispatch()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { themeColor } = useSelector((state) => state.resume)
  const handleColorChange = (e) => {
    let r = document.querySelector(':root')
    r.style.setProperty('--primary-color', e.target.value)
    dispatch(setThemeColor(e.target.value))
  }
  const toggleDarkMode = () => {
    const colorModeOverride = localStorage.getItem('color-mode')
    let r = document.querySelector(':root')
    if (colorModeOverride === 'dark') {
      document.documentElement.setAttribute('data-force-color-mode', 'light')
      localStorage.setItem('color-mode', 'light')
      dispatch(setThemeColor('#1d1aff'))
      r.style.setProperty('--primary-color', '#1d1aff')
    } else {
      document.documentElement.setAttribute('data-force-color-mode', 'dark')
      localStorage.setItem('color-mode', 'dark')
      dispatch(setThemeColor('#F65164'))
      r.style.setProperty('--primary-color', '#F65164')
    }
  }
  useEffect(() => {
    const colorModeOverride = localStorage.getItem('color-mode')
    if (colorModeOverride === 'light') {
      setIsDarkMode(false)
    } else {
      setIsDarkMode(true)
    }
  })
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
        Toggle light / Dark Mode (light mode is MOST Recommended!)
        <Switch checked={isDarkMode} onChange={() => toggleDarkMode()} />
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
