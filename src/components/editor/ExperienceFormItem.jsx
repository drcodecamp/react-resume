import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addInfoList,
  removeInfoList,
  selectDisplaySettings,
  setJobDate,
  setJobIconUrl,
  setJobIndustry,
  setJobInfo,
  setJobInfoList,
  setJobName,
} from '../../store/resumeSlice.js'
import { FormContainer } from './ProjectsFormItem.jsx'
import { Button, Input } from 'antd'
import ImageSelector from '../shared/ImageSelector.jsx'
import { InputsQuantity, RowLabel, RowLabelList } from '../shared/RowLabel.jsx'
import { ItemControllersInputsList } from './ProjectsForm.jsx'

const ExperienceFormItem = ({ expItem, isDisabled }) => {
  const dispatch = useDispatch()
  const display = useSelector(selectDisplaySettings)
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
          type="text"
          placeholder="Job Name"
        />
      </RowLabel>
      <RowLabel>
        <Input
          disabled={isDisabled}
          onChange={({ target }) =>
            dispatch(
              setJobIndustry({
                id: expItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Job Industry"
        />
      </RowLabel>
      <RowLabel>
        <Input
          disabled={isDisabled}
          onChange={({ target }) =>
            dispatch(
              setJobDate({
                id: expItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Job dates"
        />
      </RowLabel>
      {!display.experienceInFreeText ? (
        <InputsQuantity>
          Number of Inputs (1-4)
          <ItemControllersInputsList>
            <Button
              type="primary"
              shape="circle"
              onClick={() =>
                dispatch(
                  removeInfoList({
                    id: expItem.id,
                  })
                )
              }
              disabled={expItem.informationList?.length === 1}
            >
              -
            </Button>
            <p>{expItem.informationList.length} / 4</p>
            <Button
              disabled={expItem.informationList?.length === 4}
              type="primary"
              shape="circle"
              onClick={() =>
                dispatch(
                  addInfoList({
                    id: expItem.id,
                  })
                )
              }
            >
              +
            </Button>
          </ItemControllersInputsList>
        </InputsQuantity>
      ) : null}
      {display.experienceInFreeText ? (
        <Input.TextArea
          showCount
          maxLength={150}
          disabled={isDisabled}
          onChange={({ target }) =>
            dispatch(
              setJobInfo({
                id: expItem.id,
                value: target.value,
              })
            )
          }
          type="text"
          placeholder="Job information"
        />
      ) : (
        <div>
          {expItem.informationList.map((item, index) => {
            return (
              <RowLabelList key={item.id}>
                <Input.TextArea
                  showCount
                  maxLength={80}
                  onChange={({ target }) =>
                    dispatch(
                      setJobInfoList({
                        id: expItem.id,
                        value: target.value,
                        index: index,
                      })
                    )
                  }
                  key={item.id}
                  placeholder={'Enter what you did in your last job...'}
                />
              </RowLabelList>
            )
          })}
        </div>
      )}
    </FormContainer>
  )
}

export default ExperienceFormItem
