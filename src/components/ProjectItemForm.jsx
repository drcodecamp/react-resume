import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setProjectDemoLink,
  setProjectGitLink,
  setProjectImageUrl,
  setProjectInfo,
  setProjectName,
} from '../store/resumeSlice.js'
import styled from 'styled-components'
import ImageSelector from './ImageSelector.jsx'
import { Input } from 'antd'
import { RowLabel } from './shared/RowLabel.jsx'

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}

const ProjectItemForm = ({ project }) => {
  const dispatch = useDispatch()
  const { display } = useSelector((state) => state.ResumeStore)
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
          value={project.name || ''}
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
          maxLength={85}
          disabled={isDisabled}
          value={project.info || ''}
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
          disabled={isDisabled}
          value={project.codeLink || ''}
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
          addonBefore="https://"
          disabled={isDisabled}
          value={project.demoLink || ''}
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
  align-items: center;
`

export default ProjectItemForm
