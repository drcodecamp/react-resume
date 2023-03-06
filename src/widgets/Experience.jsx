import React, { useMemo } from 'react'
import styled from 'styled-components'
import CustomForm from '../components/shared/CustomForm.jsx'
import CustomRow from '../components/shared/CustomRow.jsx'
import { Button, Segmented, Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  addExp,
  removeExp,
  selectDisplaySettings,
  selectResumeExp,
  toggleExperience,
  toggleExperienceInFreeText,
  toggleExpIcons,
} from '../store/resumeSlice.js'
import { ItemControllers } from './Projects.jsx'
import ExperienceItemForm from '../components/ExperienceItemForm.jsx'
import { useState } from 'react'
import { BarsOutlined, InsertRowAboveOutlined } from '@ant-design/icons'

const ExperienceWidget = () => {
  const dispatch = useDispatch()
  const display = useSelector(selectDisplaySettings)
  const experience = useSelector(selectResumeExp)
  const isDisabled = useMemo(() => {
    return !display.experience
  }, [display.experience])

  const [options] = useState([
    {
      label: 'Free Text',
      value: 'Free Text',
      icon: <BarsOutlined />,
    },
    {
      label: 'List',
      value: 'List',
      icon: <InsertRowAboveOutlined />,
    },
  ])

  return (
    <Container>
      <CustomForm>
        <CustomRow>
          Enable/Disable experience section:
          <Switch
            onClick={() => dispatch(toggleExperience())}
            checked={display.experience}
          />
        </CustomRow>
        <CustomRow>
          Enable/Disable Job icons
          <Switch
            onClick={() => dispatch(toggleExpIcons())}
            checked={display.jobIcons}
            disabled={isDisabled}
          />
        </CustomRow>
        <CustomRow>
          Jobs (1-2)
          <ItemControllers>
            <Button
              onClick={() => dispatch(removeExp())}
              type="primary"
              shape="circle"
              disabled={isDisabled || experience.length <= 1}
            >
              -
            </Button>
            <p>{experience.length}</p>
            <Button
              onClick={() => dispatch(addExp())}
              type="primary"
              shape="circle"
              disabled={isDisabled || experience.length >= 2}
            >
              +
            </Button>
          </ItemControllers>
        </CustomRow>
        <CustomRow>
          Enable/Disable free text
          <Segmented
            disabled={isDisabled}
            value={display.experienceInFreeText ? 'Free Text' : 'List'}
            onChange={() => dispatch(toggleExperienceInFreeText())}
            options={options}
          />
        </CustomRow>
      </CustomForm>

      <JobList>
        {experience &&
          experience.map((exp) => {
            return (
              <div key={exp.id}>
                <ExperienceItemForm isDisabled={isDisabled} expItem={exp} />
              </div>
            )
          })}
      </JobList>
    </Container>
  )
}

const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default ExperienceWidget
