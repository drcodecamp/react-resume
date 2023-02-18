import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setProjectDemoLink,
  setProjectGitLink,
  setProjectImageUrl,
  setProjectInfo,
  setProjectName,
} from '../store/resumeSlice.js'
import styled from 'styled-components'
import { TextInput } from './TextInput.jsx'

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
  const handleImageSelection = async (e) => {
    let i = await convertBase64(e.target.files[0])
    dispatch(
      setProjectImageUrl({
        id: project.id,
        value: i,
      })
    )
  }
  return (
    <FormContainer>
      <FormTitle>Project {project.name}</FormTitle>
      <RowLabel>
        Project image
        <input type="file" onChange={(e) => handleImageSelection(e)} />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
            dispatch(
              setProjectName({
                id: project.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Project Name"
        />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
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
        <TextInput
          onInput={({ target }) =>
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
        <TextInput
          onInput={({ target }) =>
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
  background-color: #ffffff;
  margin-top: 1em;
  padding: 1em;
  border: 4px dotted #444444;
`

const RowLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.15em;
  height: 55px;
`

export default ProjectItemForm
