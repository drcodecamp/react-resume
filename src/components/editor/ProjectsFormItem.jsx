import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectDisplaySettings,
  setProjectDemoLink,
  setProjectGitLink,
  setProjectImageUrl,
  setProjectInfo,
  setProjectName,
} from '../../store/resumeSlice.js'
import styled from 'styled-components'
import ImageSelector from '../shared/ImageSelector.jsx'
import { Input } from 'antd'
import { RowLabel } from '../shared/RowLabel.jsx'
import { MAX_PROJECT_INFO } from '../../constants/appSettings.js'

const ProjectsFormItem = ({ project }) => {
  const dispatch = useDispatch()
  const display = useSelector(selectDisplaySettings)
  const isDisabled = !display.projects
  const handleImageSelection = (e) => {
    dispatch(
      setProjectImageUrl({
        id: project.id,
        value: e,
      })
    )
  }
  return (
    <FormContainer>
      <RowLabel>
        <ImageSelector disabled={isDisabled} action={handleImageSelection} />
      </RowLabel>
      <RowLabel>
        <Input
          onChange={({ target }) =>
            dispatch(
              setProjectName({
                id: project.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Project Name"
          disabled={isDisabled}
        />
      </RowLabel>
      <RowLabel>
        <Input.TextArea
          showCount
          maxLength={MAX_PROJECT_INFO}
          disabled={isDisabled}
          onChange={({ target }) =>
            dispatch(
              setProjectInfo({
                id: project.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Project information"
        />
      </RowLabel>
      <RowLabel>
        <Input
          addonBefore="https://"
          status={project.codeLink.includes('http') ? 'error' : ''}
          disabled={isDisabled}
          onChange={({ target }) =>
            dispatch(
              setProjectGitLink({
                id: project.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Project Github URL"
        />
      </RowLabel>
      <RowLabel>
        <Input
          status={project.demoLink.includes('http') ? 'error' : ''}
          addonBefore="https://"
          disabled={isDisabled}
          onChange={({ target }) =>
            dispatch(
              setProjectDemoLink({
                id: project.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Project Demo URL"
        />
      </RowLabel>
    </FormContainer>
  )
}

export const FormTitle = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: black;
  font-weight: bold;
`

export const FormContainer = styled.div`
  margin-top: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default ProjectsFormItem
