import React from 'react'
import styled from 'styled-components'
import { Button, Switch } from 'antd'
import {
  addProject,
  removeProject,
  toggleProjects,
  toggleOneLineProjects,
} from '../store/resumeSlice.js'
import CustomRow from '../components/shared/CustomRow.jsx'
import { useDispatch, useSelector } from 'react-redux'
import ProjectItemForm from '../components/ProjectItemForm.jsx'

const ProjectsWidget = () => {
  const dispatch = useDispatch()
  const { display, projects } = useSelector((state) => state.ResumeStore)
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
        <Switch
          onClick={() => dispatch(toggleOneLineProjects())}
          checked={display.projects && display.oneLineProjects}
        ></Switch>
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
            disabled={!display.projects || projects.length >= 3}
          >
            +
          </Button>
        </ItemControllers>
      </CustomRow>
      <ProjectList>
        {projects.map((project) => {
          return <ProjectItemForm key={project.id} project={project} />
        })}
      </ProjectList>
    </Container>
  )
}

export const ItemControllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-left: 1em;
  }
  button {
    margin-left: 1em;
  }
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

export default ProjectsWidget
