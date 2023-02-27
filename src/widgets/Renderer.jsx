import React from 'react'
import styled from 'styled-components'
import SideNav from '../components/SideNav.jsx'
import ResumeContent from '../components/ResumeContent.jsx'
import { useSelector } from 'react-redux'

const Renderer = () => {
  const { display } = useSelector((state) => state.ResumeStore)
  return (
    <RendererContainer>
      <ResumeContainer>
        {display.sideNav && <SideNav />}
        <ResumeContent />
      </ResumeContainer>
    </RendererContainer>
  )
}

const ResumeContainer = styled.div`
  display: flex;
  width: 793.7px;
  height: 1122.5px;
  aspect-ratio: 1/1.41;
  background: var(--bg-secondary);
`

const RendererContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`

export default Renderer
