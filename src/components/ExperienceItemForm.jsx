import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setJobDate,
  setJobIconUrl,
  setJobIndustry,
  setJobInfo,
  setJobInfoLi,
  setJobName,
} from '../store/resumeSlice.js'
import { FormContainer } from './ProjectItemForm.jsx'
import { Input, List } from 'antd'
import ImageSelector from './ImageSelector.jsx'
import { RowLabel } from './shared/RowLabel.jsx'

const ExperienceItemForm = ({ expItem, isDisabled }) => {
  const dispatch = useDispatch()


  const { display, experience } = useSelector((state) => state.ResumeStore)



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
          <RowLabel>
            <RowLabel>
              <Input
                showCount
                maxLength={90}
                onChange={({ target }) =>
                  dispatch(
                    setJobInfoLi({
                      id: expItem.id,
                      value: target.value,
                      name: 0,
                    })
                  )
                } />
            </RowLabel>
            <RowLabel>
              <Input
                showCount
                maxLength={90}
                onChange={({ target }) =>
                  dispatch(
                    setJobInfoLi({
                      id: expItem.id,
                      value: target.value,
                      name: 1,
                    })
                  )
                } />
            </RowLabel>
            <RowLabel>
              <Input
                showCount
                maxLength={90}
                onChange={({ target }) =>
                  dispatch(
                    setJobInfoLi({
                      id: expItem.id,
                      value: target.value,
                      name: 2,
                    })
                  )
                } />
            </RowLabel>
            <RowLabel>
              <Input
                showCount
                maxLength={90}
                onChange={({ target }) =>
                  dispatch(
                    setJobInfoLi({
                      id: expItem.id,
                      value: target.value,
                      name: 3,
                    })
                  )
                } />
            </RowLabel>
          </RowLabel>
        }

      </RowLabel>
    </FormContainer>
  )
}

export default ExperienceItemForm
