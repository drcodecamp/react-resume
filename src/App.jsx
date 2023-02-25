import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import GlobalStyle from './constants/GlobalStyle.jsx'
import Controller from './components/ResumeOptions.jsx'
import AppHeader from './components/AppHeader.jsx'
import Renderer from './widgets/Renderer.jsx'
import './index.css'
import './assets/Square-Regular.otf'

const App = () => {
  const ref = useRef(null)
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
  }

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <Layout>
        <Controller documentRef={ref} />
        <Renderer ref={ref} />
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export default App
