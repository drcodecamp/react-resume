import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import GlobalStyle from './constants/GlobalStyle.jsx'
import Controller from './components/ResumeOptions.jsx'
import AppHeader from './components/AppHeader.jsx'
import Renderer from './widgets/Renderer.jsx'
import './index.css'
import './assets/Square-Regular.otf'
import { setThemeColor } from './store/resumeSlice.js'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const { display } = useSelector((state) => state.ResumeStore)
  const initTheme = () => {
    const colorModeOverride = localStorage.getItem('color-mode')
    const hasColorModeOverride = typeof colorModeOverride === 'string'
    if (hasColorModeOverride) {
      document.documentElement.setAttribute(
        'data-force-color-mode',
        colorModeOverride
      )
    }
    if (!hasColorModeOverride) {
      document.documentElement.setAttribute('data-force-color-mode', 'light')
      localStorage.setItem('color-mode', 'light')
    }
    const initialColor = colorModeOverride === 'light' ? '#1d1aff' : '#F65164'
    dispatch(setThemeColor(initialColor))
  }

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <Layout>
        <Controller />
        <Renderer />
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  background-color: #1c1b1f;
  min-height: 100vh;
  overflow: hidden;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`

export default App
