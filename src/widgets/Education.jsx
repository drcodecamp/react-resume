import React from 'react'
import styled from 'styled-components'
import CustomForm from '../components/shared/CustomForm.jsx'
import CustomRow from '../components/shared/CustomRow.jsx'
import { Button, Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  addEducation,
  removeEducation,
  toggleEducation,
  toggleEducationIcons,
} from '../store/resumeSlice.js'
import EducationItemForm from '../components/EducationItemForm.jsx'
import { ItemControllers } from './Projects.jsx'

const EducationWidget = () => {
  const dispatch = useDispatch()
  const { display, education } = useSelector((state) => state.ResumeStore)
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
          Number of Jobs (1-2)
          <ItemControllers>
            <Button
              onClick={() => dispatch(removeEducation())}
              type="primary"
              shape="circle"
              disabled={isDisabled || education.length <= 1} // todo save const as max min
            >
              -
            </Button>
            <p>{education.length}</p>
            <Button
              onClick={() => dispatch(addEducation())}
              type="primary"
              shape="circle"
              disabled={isDisabled || education.length >= 2} // todo save const as max min
            >
              +
            </Button>
          </ItemControllers>
        </CustomRow>
      </CustomForm>
      <EducationList>
        {education.map((edu) => {
          return (
            <EducationItemForm
              key={edu.id}
              educationItem={edu}
              isDisabled={isDisabled}
            />
          )
        })}
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

export default EducationWidget
