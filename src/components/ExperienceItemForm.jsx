import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setJobDate,
  setJobIconUrl,
  setJobIndustry,
  setJobInfo,
  setJobName,
} from '../store/resumeSlice.js'
import { FormContainer } from './ProjectItemForm.jsx'
import { Input } from 'antd'
import ImageSelector from './ImageSelector.jsx'
import { RowLabel } from './shared/RowLabel.jsx'

const ExperienceItemForm = ({ expItem, isDisabled }) => {
  const dispatch = useDispatch()

  const handleImageSelection = (e) => {
    dispatch(
      setJobIconUrl({
        id: expItem.id,
        value: e,
      })
    )
  }

  return (
    <FormContainer>
      <RowLabel>
        <ImageSelector action={handleImageSelection} disabled={isDisabled} />
      </RowLabel>
      <RowLabel>
        <Input
          disabled={isDisabled}
          onChange={({ target }) =>
            dispatch(
              setJobName({
                id: expItem.id,
                value: target.value,
              })
            )
          }
          value={expItem.name}
          type="text"
          placeholder="Work Name"
        />
      </RowLabel>
      <RowLabel>
        <Input
          disabled={isDisabled}
          value={expItem.industry}
          onChange={({ target }) =>
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
        <Input
          disabled={isDisabled}
          value={expItem.date}
          onChange={({ target }) =>
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
        <Input.TextArea
          showCount
          maxLength={150}
          disabled={isDisabled}
          value={expItem.information}
          onChange={({ target }) =>
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

export default ExperienceItemForm
