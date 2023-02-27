import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './constants/GlobalStyle.jsx'
import Controller from './components/ResumeOptions.jsx'
import AppHeader from './components/AppHeader.jsx'
import Renderer from './widgets/Renderer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setThemeColor, toggleRenderer } from './store/resumeSlice.js'
import './assets/Square-Regular.otf'
import './index.css'

const App = () => {
  const dispatch = useDispatch()
  const { display } = useSelector((state) => state.ResumeStore)

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

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
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowDimensions.width <= 1300) {
      dispatch(toggleRenderer())
    }
  }, [])

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <Layout>
        <Controller />
        {display.renderer && <Renderer />}
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  background-color: #1c1b1f;
  min-height: 100vh;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`

export default App
