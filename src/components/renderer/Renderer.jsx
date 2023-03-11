import React, { useEffect } from 'react'
import styled from 'styled-components'
import SideNav from './SideNav.jsx'
import ResumeContent from './ResumeContent.jsx'
import { useSelector } from 'react-redux'
import {
  selectDisplaySettings,
  selectFullResume,
} from '../../store/resumeSlice.js'

const Renderer = () => {
  const display = useSelector(selectDisplaySettings)
  const resume = useSelector(selectFullResume)
  if (!display.renderer) {
    return null
  }
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-force-color-mode',
      resume.isDarkMode ? 'dark' : 'light'
    )
  }, [resume.isDarkMode])
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
