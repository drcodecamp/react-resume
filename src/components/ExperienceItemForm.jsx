import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setJobDate,
  setJobIconUrl,
  setJobIndustry,
  setJobInfo,
  setJobName,
  setProjectImageUrl,
} from '../store/resumeSlice.js'
import styled from 'styled-components'
import { TextInput } from './TextInput.jsx'
import { convertBase64, FormContainer, FormTitle } from './ProjectItemForm.jsx'

const ExperienceItemForm = ({ expItem }) => {
  const dispatch = useDispatch()

  const handleImageSelection = async (e) => {
    let i = await convertBase64(e.target.files[0])
    dispatch(
      setJobIconUrl({
        id: expItem.id,
        value: i,
      })
    )
  }

  return (
    <FormContainer>
      <FormTitle>Job {expItem.name}</FormTitle>
      <RowLabel>
        Project image
        <input type="file" onChange={(e) => handleImageSelection(e)} />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
            dispatch(
              setJobName({
                id: expItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Work Name"
        />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
            dispatch(
              setJobIndustry({
                id: expItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Work Industry"
        />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
            dispatch(
              setJobDate({
                id: expItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Work Dates"
        />
      </RowLabel>
      <RowLabel>
        <TextInput
          onInput={({ target }) =>
            dispatch(
              setJobInfo({
                id: expItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Work information"
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

export default ExperienceItemForm
