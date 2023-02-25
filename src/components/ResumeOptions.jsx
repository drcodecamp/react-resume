import React from 'react'
import styled from 'styled-components'
import { Collapse } from 'antd'
import ProfileWidget from '../widgets/Profile'
import ThemeWidget from '../widgets/Theme'
import DownloadWidget from '../widgets/Download'
import SideNavWidgetWidget from '../widgets/SideNavigator'
import ProjectsWidget from '../widgets/Projects'
import StackWidget from '../widgets/Stack'
import ExperienceWidget from '../widgets/Experience'
import EducationWidget from '../widgets/Education'

const { Panel } = Collapse

const ResumeOptions = ({ documentRef }) => {
  return (
    <ResumeOptionsContainer>
      <Resume>
        <Form>
          <Logo>דוקטור קוד</Logo>
          <h1>יצירת קורות חיים באנגלית אונליין בחינם</h1>
          <h2>צרו קורות חיים ייחודיים שיעשו את העבודה בכמה קליקים פשוטים</h2>
        </Form>
        <Collapse bordered={false} defaultActiveKey={['1']}>
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
            <DownloadWidget documentRef={documentRef} />
          </Panel>
        </Collapse>
      </Resume>
    </ResumeOptionsContainer>
  )
}

const Resume = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const Logo = styled.div`
  text-align: center;
  font-size: 2em;
  font-family: fantasy, sans-serif;
`

const Form = styled.div`
  padding: 1em;
  width: 100%;
  h1 {
    text-align: center;
    font-size: 1.5em;
  }
  h2 {
    text-align: center;
    font-size: 1em;
    color: #565656;
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
  height: 100vh;
  margin-right: 1em;
  @media print {
    display: none;
  }
`
export default ResumeOptions
