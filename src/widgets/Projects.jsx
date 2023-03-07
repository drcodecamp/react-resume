import React , {useState} from 'react'
import styled from 'styled-components'
import { Button, Switch } from 'antd'
import {
  addProject,
  removeProject,
  selectDisplaySettings,
  selectResumeProjects,
  toggleOneLineProjects,
  toggleProjects,
  setProjectDesignCard,
} from '../store/resumeSlice.js'
import CustomRow from '../components/shared/CustomRow.jsx'
import { useDispatch, useSelector } from 'react-redux'
import ProjectItemForm from '../components/ProjectItemForm.jsx'
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const ProjectsWidget = () => {
  const dispatch = useDispatch()
  const projects = useSelector(selectResumeProjects)
  const display = useSelector(selectDisplaySettings)
  const [cardDesignChoosen , setCardDesignChoosen] = useState('1st menu item')

  const items = [
    {
      label: (<p onClick={() => {dispatch(setProjectDesignCard(1)) ,setCardDesignChoosen('1st menu item') , dispatch(toggleOneLineProjects(false)) }}> 1st menu item </p>),
      key: '1',
    },
    {
      label: (<p onClick={() => {dispatch(setProjectDesignCard(2)) ,setCardDesignChoosen('2st menu item'), dispatch(toggleOneLineProjects(false))} }> 2st menu item </p>),
      key: '2',
    },
    {
      label: (<p onClick={() => {setCardDesignChoosen('Line'), dispatch(toggleOneLineProjects(true))} }> Line </p>),
      key: '3',
    }
  ];
  
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
        Card Design
        <Dropdown
            menu={{
              items,
            }}
          >
            <Space>
              {cardDesignChoosen}
              <DownOutlined />
            </Space>
        </Dropdown>
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
        {projects &&
          projects.map((project) => {
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
