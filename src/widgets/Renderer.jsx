import React from 'react'
import styled from 'styled-components'
import SideNav from '../components/SideNav.jsx'
import ResumeContent from '../components/ResumeContent.jsx'
import { useSelector } from 'react-redux'

const Renderer = ({ ref }) => {
  const { display } = useSelector((state) => state.ResumeStore)
  return (
    <RendererContainer>
      <ResumeContainer ref={ref}>
        {display.sideNav && <SideNav />}
        <ResumeContent />
      </ResumeContainer>
    </RendererContainer>
  )
}

const ResumeContainer = styled.div`
  display: flex;
  background: #ffffff;
  width: 793.7px;
  height: 1122.5px;
  aspect-ratio: 1/1.41;
`

const RendererContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Renderer
