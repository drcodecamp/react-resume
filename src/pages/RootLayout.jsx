import { Outlet } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../constants/GlobalStyle.jsx'
import AppHeader from '../components/AppHeader.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectFullResume,
  setThemeColor,
  toggleRenderer,
} from '../store/resumeSlice.js'
import '../assets/Square-Regular.otf'
import '../index.css'

const RootLayout = () => {
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
  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <Layout>
        <Outlet />
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
export default RootLayout
