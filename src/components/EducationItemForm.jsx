import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setEducationDesc,
  setEducationDuration,
  setEducationIcon,
  setEducationName,
  setJobDate,
  setJobIconUrl,
  setJobIndustry,
  setJobInfo,
  setJobName,
} from '../store/resumeSlice.js'
import styled from 'styled-components'
import { TextInput } from './TextInput.jsx'
import { convertBase64, FormContainer, FormTitle } from './ProjectItemForm.jsx'

const EducationItemForm = ({ educationItem }) => {
  const dispatch = useDispatch()
  const handleImageSelection = async (e) => {
    let i = await convertBase64(e.target.files[0])
    dispatch(
      setEducationIcon({
        id: educationItem.id,
        value: i,
      })
    )
  }
  return (
    <FormContainer>
      <FormTitle>Job {educationItem.name}</FormTitle>
      <RowLabel>
        Education image
        <input type="file" onChange={(e) => handleImageSelection(e)} />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
            dispatch(
              setEducationName({
                id: educationItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Education Name"
        />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
            dispatch(
              setEducationDuration({
                id: educationItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Education duration"
        />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
            dispatch(
              setEducationDesc({
                id: educationItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Education description"
        />
      </RowLabel>
    </FormContainer>
  )
}

const RowLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.15em;
  height: 55px;
`

export default EducationItemForm
