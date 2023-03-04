import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addInfoList,
  removeInfoList,
  setJobDate,
  setJobIconUrl,
  setJobIndustry,
  setJobInfo,
  setJobInfoList,
  setJobName,
} from '../store/resumeSlice.js'
import { FormContainer } from './ProjectItemForm.jsx'
import { Button, Input, } from 'antd'
import ImageSelector from './ImageSelector.jsx'
import { InputsQuantity, RowLabel, RowLabelList } from './shared/RowLabel.jsx'
import { ItemControllersInputsList } from '../widgets/Projects.jsx'

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
      {!display.experienceInFreeText ?
        <InputsQuantity>
          Number of Inputs (1-4)
          <ItemControllersInputsList>
            <Button
              type="primary"
              shape="circle"
              onClick={() => dispatch(
                removeInfoList({
                  id: expItem.id,
                }))}
              disabled={expItem.informationList.length === 1}
            >
              -
            </Button>
            <p>{expItem.informationList.length} / 4</p>
            <Button
              disabled={expItem.informationList.length === 4}
              type="primary"
              shape="circle"
              onClick={() => dispatch(
                addInfoList({
                  id: expItem.id,
                }))}
            >
              +
            </Button>
          </ItemControllersInputsList>
        </InputsQuantity> : null}
      {
        display.experienceInFreeText ? <Input.TextArea
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
            {expItem.informationList.map((item, index) => {
              return <RowLabelList key={item.id}>
                <Input.TextArea
                  showCount
                  maxLength={80}
                  onChange={({ target }) =>
                    dispatch(
                      setJobInfoList({
                        id: expItem.id,
                        value: target.value,
                        index: index
                      })
                    )
                  }
                  key={item.id}
                  placeholder={`info ${index + 1}`}
                />
              </RowLabelList>
            })}
          </div>
      }
    </FormContainer>
  )
}

export default ExperienceItemForm
