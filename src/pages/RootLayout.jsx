import { Outlet } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../constants/GlobalStyle.jsx'
import AppHeader from '../components/shared/AppHeader.jsx'
import '../assets/Square-Regular.otf'
import '../index.css'

const RootLayout = () => {
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
  min-height: calc(100vh - 85px);
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`
export default RootLayout
