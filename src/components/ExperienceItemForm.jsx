import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeInfoList,
  setJobDate,
  setJobIconUrl,
  setJobIndustry,
  setJobInfo,
  setJobInfoList,
  setJobName,
} from '../store/resumeSlice.js'
import { FormContainer } from './ProjectItemForm.jsx'
import { Input, List } from 'antd'
import ImageSelector from './ImageSelector.jsx'
import { RowLabel, RowLabel2 } from './shared/RowLabel.jsx'

const ExperienceItemForm = ({ expItem, isDisabled }) => {
  const dispatch = useDispatch()

  const { display, experience } = useSelector((state) => state.ResumeStore)

  const [inputs, setInputs] = useState([<input />]);
  const [nextId, setNextId] = useState(1);

  const handleAddInput = () => {
    if (inputs.length < 4) {
      setInputs([...inputs, { id: nextId }]);
      setNextId(nextId + 1);
    }
  };

  const handleRemoveInput = (id, index) => {
    if (inputs.length > 1) {
      const newInputs = inputs.filter((input) => input.id !== id);
      setInputs(newInputs);
      dispatch(
        removeInfoList({
          id: expItem.id,
          index: index
        })
      )
    }
  };

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
        {display.experienceInFreeText ? <Input.TextArea
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
        /> :
          <div>
            {inputs.map((input, index) => (
              <RowLabel2 key={input.id}>
                <Input
                  showCount
                  maxLength={90}
                  onChange={({ target }) =>
                    dispatch(
                      setJobInfoList({
                        id: expItem.id,
                        value: target.value,
                        index: index
                      })
                    )
                  }
                  key={input.id}
                  placeholder={`info ${index + 1}`}
                />
                <button onClick={handleAddInput}>+</button>
                <button onClick={() => handleRemoveInput(input.id, index)}>-</button>
              </RowLabel2>
            ))
            }
          </div>
        }
      </RowLabel>
    </FormContainer>
  )
}

export default ExperienceItemForm
