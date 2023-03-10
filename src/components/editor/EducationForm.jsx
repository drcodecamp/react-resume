import React from 'react'
import styled from 'styled-components'
import CustomForm from '../shared/CustomForm.jsx'
import CustomRow from '../shared/CustomRow.jsx'
import { Button, Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  addEducation,
  removeEducation,
  selectDisplaySettings,
  selectResumeEducation,
  toggleEducation,
  toggleEducationIcons,
} from '../../store/resumeSlice.js'
import EducationFormItem from './EducationFormItem.jsx'
import { ItemControllers } from './ProjectsForm.jsx'
import { MAX_EDUCATIONS } from '../../constants/appSettings.js'

const EducationForm = () => {
  const dispatch = useDispatch()
  const education = useSelector(selectResumeEducation)
  const display = useSelector(selectDisplaySettings)
  const isDisabled = !display.education
  return (
    <Container>
      <CustomForm>
        <CustomRow>
          Enable/Disable education section:
          <Switch
            onClick={() => dispatch(toggleEducation())}
            checked={display.education}
          />
        </CustomRow>
        <CustomRow>
          Enable/Disable education icons:
          <Switch
            onClick={() => dispatch(toggleEducationIcons())}
            checked={display.educationIcons}
            disabled={isDisabled}
          />
        </CustomRow>
        <CustomRow>
          Educations
          <ItemControllers>
            <Button
              onClick={() => dispatch(removeEducation())}
              type="primary"
              shape="circle"
              disabled={isDisabled || education.length <= 1}
            >
              -
            </Button>
            <p>{education.length}</p>
            <Button
              onClick={() => dispatch(addEducation())}
              type="primary"
              shape="circle"
              disabled={isDisabled || education.length >= MAX_EDUCATIONS}
            >
              +
            </Button>
          </ItemControllers>
        </CustomRow>
      </CustomForm>
      <EducationList>
        {education &&
          education.map((edu) => (
            <EducationFormItem
              key={edu.id}
              educationItem={edu}
              isDisabled={isDisabled}
            />
          ))}
      </EducationList>
    </Container>
  )
}

const EducationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default EducationForm
