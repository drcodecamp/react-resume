import { Outlet } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../constants/GlobalStyle.jsx'
import AppHeader from '../components/AppHeader.jsx'
import { useDispatch } from 'react-redux'
import { setThemeColor, toggleRenderer } from '../store/resumeSlice.js'
import '../assets/Square-Regular.otf'
import '../index.css'

function RootLayout() {
  const dispatch = useDispatch()

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
      <AppHeader />
      <main>
        <GlobalStyle />
        <Layout>
          <Outlet />
        </Layout>
      </main>
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
export default RootLayout
