import React from 'react'
import styled from 'styled-components'
import { Button, Select, Switch } from 'antd'
import {
  addProject,
  removeProject,
  selectDisplaySettings,
  selectResumeProjects,
  selectResumeProjectStyle,
  setProjectsStyle,
  toggleOneLineProjects,
  toggleProjects,
} from '../../store/resumeSlice.js'
import CustomRow from '../shared/CustomRow.jsx'
import { useDispatch, useSelector } from 'react-redux'
import ProjectsFormItem from './ProjectsFormItem.jsx'
import { MAX_PROJECTS } from '../../constants/appSettings.js'

const ProjectsForm = () => {
  const dispatch = useDispatch()
  const selectedCardStyle = useSelector(selectResumeProjectStyle)
  const projects = useSelector(selectResumeProjects)
  const display = useSelector(selectDisplaySettings)
  const handleOnProjectStyleChange = (idx) => {
    dispatch(setProjectsStyle(idx))
  }
  return (
    <Container>
      <CustomRow>
        Enable projects section
        <Switch
          checked={display.projects}
          onClick={() => dispatch(toggleProjects())}
        ></Switch>
      </CustomRow>
      <CustomRow>
        Enable one line project view
        <Select
          defaultValue={selectedCardStyle}
          style={{ width: 120 }}
          onChange={(e) => handleOnProjectStyleChange(e)}
          options={[
            { value: 1, label: 'linear' },
            { value: 2, label: 'card A' },
            { value: 3, label: 'card B' },
            { value: 4, label: 'card C' },
          ]}
        />
      </CustomRow>
      <CustomRow>
        Number of Projects (1-3)
        <ItemControllers>
          <Button
            onClick={() => dispatch(removeProject())}
            type="primary"
            shape="circle"
            disabled={!display.projects || projects.length <= 1}
          >
            -
          </Button>
          <p>{projects.length}</p>
          <Button
            onClick={() => dispatch(addProject())}
            type="primary"
            shape="circle"
            disabled={!display.projects || projects.length >= MAX_PROJECTS}
          >
            +
          </Button>
        </ItemControllers>
      </CustomRow>
      <ProjectList>
        {projects &&
          projects.map((project) => {
            return <ProjectsFormItem key={project.id} project={project} />
          })}
      </ProjectList>
    </Container>
  )
}

export const ItemControllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-left: 1em;
  }
  button {
    margin-left: 1em;
  }
`

export const ItemControllersInputsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  margin-top: 5px;
`

const ProjectList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default ProjectsForm
