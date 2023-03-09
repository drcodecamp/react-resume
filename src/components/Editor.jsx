import React, { useState } from 'react'
import styled from 'styled-components'
import { Collapse, Input, message } from 'antd'
import ProfileWidget from '../widgets/Profile'
import ThemeWidget from '../widgets/Theme'
import DownloadWidget from '../widgets/Download'
import SideNavWidgetWidget from '../widgets/SideNavigator'
import ProjectsWidget from '../widgets/Projects'
import StackWidget from '../widgets/Stack'
import ExperienceWidget from '../widgets/Experience'
import EducationWidget from '../widgets/Education'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectFullResume,
  setDocumentName,
  toggleRenderer,
} from '../store/resumeSlice.js'

const { Panel } = Collapse

const Editor = () => {
  const dispatch = useDispatch()
  const document = useSelector(selectFullResume)
  const [fullScreen, setFullScreen] = useState(false)
  const handleRendererToggle = () => {
    dispatch(toggleRenderer())
  }
  const handleFullScreen = () => {
    if (!fullScreen) {
      document.body.requestFullscreen().then((r) => {
        message.success('Enter full screen')
      })
      setFullScreen(true)
    } else {
      document.exitFullscreen().then((r) => {
        message.warning('Exit full screen')
      })
      setFullScreen(false)
    }
  }
  return (
    <ResumeOptionsContainer>
      <Resume>
        <Form>
          <h1>Set your document name!</h1>
          <h2>Document changes are automatically saved!</h2>
          <DocumentNameInputContainer>
            <Input
              showCount
              maxLength={35}
              onChange={({ target }) => dispatch(setDocumentName(target.value))}
              placeholder="document name"
              value={document.documentName}
            />
          </DocumentNameInputContainer>
        </Form>
        <Collapse>
          <Panel header="Theme and Style" key="theme">
            <ThemeWidget />
          </Panel>
          <Panel header="Profile Information" key="profile">
            <ProfileWidget />
          </Panel>
          <Panel header="Side Navigation" key="sidebar">
            <SideNavWidgetWidget />
          </Panel>
          <Panel header="Projects" key="projects">
            <ProjectsWidget />
          </Panel>
          <Panel header="Technology Stack" key="stack">
            <StackWidget />
          </Panel>
          <Panel header="Job Experience" key="experience">
            <ExperienceWidget />
          </Panel>
          <Panel header="Education" key="education">
            <EducationWidget />
          </Panel>
          <Panel header="Download" key="download">
            <DownloadWidget />
          </Panel>
        </Collapse>
      </Resume>
    </ResumeOptionsContainer>
  )
}
const DocumentNameInputContainer = styled.div`
  padding-top: 1em;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  input {
    text-align: center;
    padding: 0.5em;
    margin: 1em;
  }
`
const Resume = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
`
const Form = styled.div`
  padding: 1em;
  width: 100%;
  color: black;
  h1 {
    text-align: center;
    font-size: 1.5em;
  }
  h2 {
    text-align: center;
    font-size: 1em;
  }
`
const ResumeOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: scroll;
  padding: 1em;
  z-index: 10;
  flex-basis: 50%;
  margin-right: 1em;
  @media only screen and (max-width: 1280px) {
    margin-right: 0;
  }
  @media print {
    display: none;
  }
`
export default Editor
