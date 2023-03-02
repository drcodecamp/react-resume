import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setEducationDesc,
  setEducationDuration,
  setEducationIcon,
  setEducationName,
} from '../store/resumeSlice.js'
import { FormContainer } from './ProjectItemForm.jsx'
import { Input } from 'antd'
import ImageSelector from './ImageSelector.jsx'
import { RowLabel } from './shared/RowLabel.jsx'

const EducationItemForm = ({ educationItem, isDisabled }) => {
  const dispatch = useDispatch()
  const handleImageSelection = (e) => {
    dispatch(
      setEducationIcon({
        id: educationItem.id,
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
        <Input
          disabled={isDisabled}
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
        <Input.TextArea
          showCount
          maxLength={150}
          disabled={isDisabled}
          onChange={({ target }) =>
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

export default EducationItemForm
