import styled from 'styled-components'
import GlobalStyle from './constants/GlobalStyle.jsx'
import Controller from './components/ResumeOptions.jsx'
import SideNav from './components/SideNav.jsx'
import ResumeContent from './components/ResumeContent.jsx'
import React, { useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const { display } = useSelector((state) => state.ResumeStore)
  const ref = useRef()

  return (
    <Layout>
      <GlobalStyle />
      <Controller documentRef={ref} />
      <ResumeRenderContainer>
        <Resume ref={ref}>
          {display.sideNav && <SideNav />}
          <ResumeContent />
        </Resume>
      </ResumeRenderContainer>
    </Layout>
  )
}

const Resume = styled.div`
  display: flex;
  background: #ffffff;
  height: 1350px;
  aspect-ratio: 1/1.41;
  @media (max-width: 1024px) {
    width: 957px;
  }
`

const ResumeRenderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Layout = styled.div`
  display: flex;
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export default App
