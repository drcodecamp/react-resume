import React from 'react'
import styled from 'styled-components'
import { Collapse, Input } from 'antd'

import ProfileForm from './ProfileForm.jsx'
import ThemeForm from './ThemeForm.jsx'
import DownloadForm from './DownloadForm.jsx'
import SideNavigatorForm from './SideNavigatorForm.jsx'
import ProjectsForm from './ProjectsForm.jsx'
import StackForm from './StackForm.jsx'
import ExperienceForm from './ExperienceForm.jsx'
import EducationForm from './EducationForm.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectFullResume, setDocumentName } from '../../store/resumeSlice.js'
import { MAX_RESUME_NAME } from '../../constants/appSettings.js'
import { SubTitle } from '../shared/SubTitle.jsx'
import { Title } from '../shared/Title.jsx'

const { Panel } = Collapse

const Editor = () => {
  const dispatch = useDispatch()
  const document = useSelector(selectFullResume)
  return (
    <EditorOptionsContainer>
      <EditorForm>
        <EditorFormHeader>
          <Title>Set your document name!</Title>
          <SubTitle>Document changes are automatically saved!</SubTitle>
          <Input
            showCount
            maxLength={MAX_RESUME_NAME}
            onChange={({ target }) => dispatch(setDocumentName(target.value))}
            placeholder="document name"
            value={document.documentName}
          />
        </EditorFormHeader>
        <Collapse>
          <Panel header="Theme and Style" key="theme">
            <ThemeForm />
          </Panel>
          <Panel header="Profile Information" key="profile">
            <ProfileForm />
          </Panel>
          <Panel header="Side Navigation" key="sidebar">
            <SideNavigatorForm />
          </Panel>
          <Panel header="Projects" key="projects">
            <ProjectsForm />
          </Panel>
          <Panel header="Technology Stack" key="stack">
            <StackForm />
          </Panel>
          <Panel header="Job Experience" key="experience">
            <ExperienceForm />
          </Panel>
          <Panel header="Education" key="education">
            <EducationForm />
          </Panel>
          <Panel header="Download" key="download">
            <DownloadForm />
          </Panel>
        </Collapse>
      </EditorForm>
    </EditorOptionsContainer>
  )
}

const EditorForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
`

const EditorFormHeader = styled.div`
  padding: 1em;
  width: 100%;
  color: black;
  text-align: center;
  input {
    text-align: center;
    padding: 0.5em;
    margin: 1em;
  }
`

const EditorOptionsContainer = styled.div`
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
