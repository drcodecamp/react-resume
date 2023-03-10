import React from 'react'
import styled from 'styled-components'
import { Input, Switch } from 'antd'
import {
  selectFullResume,
  setEmail,
  setFullName,
  setPhone,
  setSummary,
  setTitle,
  toggleSummary,
} from '../../store/resumeSlice.js'
import {
  MailOutlined,
  PhoneOutlined,
  QqOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import CustomRow from '../shared/CustomRow.jsx'
import {
  MAX_PHONE_NUMBER,
  MAX_SUMMARY,
  MAX_TITLE,
} from '../../constants/appSettings.js'

const ProfileForm = () => {
  const dispatch = useDispatch()
  const { summary, display } = useSelector(selectFullResume)
  return (
    <Container>
      <CustomRow>
        <p>
          Toggle vertical header
          <span style={{ fontWeight: 'bolder', paddingLeft: 5 }}>
            (disabled when side navigator is open!)
          </span>
        </p>
      </CustomRow>
      <CustomRow>
        <p>
          Display Summary
          <span style={{ fontWeight: 'bolder', paddingLeft: 5 }}>
            (not recommended!)
          </span>
        </p>
        <Switch
          checked={display.summary}
          onChange={() => dispatch(toggleSummary())}
        />
      </CustomRow>
      <CustomRow>
        <Input
          onChange={({ target }) => dispatch(setFullName(target.value))}
          placeholder="Doctor Code"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          onChange={({ target }) => dispatch(setTitle(target.value))}
          placeholder="Frontend Developer"
          maxLength={MAX_TITLE}
          prefix={<QqOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          onChange={({ target }) => dispatch(setPhone(target.value))}
          placeholder="050-5101952"
          maxLength={MAX_PHONE_NUMBER}
          prefix={<PhoneOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          onChange={({ target }) => dispatch(setEmail(target.value))}
          placeholder="info@doctorcode.org"
          prefix={<MailOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          maxLength={MAX_SUMMARY}
          showCount
          value={summary}
          disabled={!display.summary}
          onChange={({ target }) => dispatch(setSummary(target.value))}
          placeholder="Keep it Short! no more than 1 line!"
          prefix={<SolutionOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default ProfileForm
