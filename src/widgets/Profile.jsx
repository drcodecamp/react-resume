import React from 'react'
import styled from 'styled-components'
import { Input, Switch } from 'antd'
import {
  setEmail,
  setFullName,
  setPhone,
  setSummary,
  setTitle,
  toggleSummary,
} from '../store/resumeSlice.js'
import {
  MailOutlined,
  PhoneOutlined,
  QqOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import CustomRow from '../components/shared/CustomRow.jsx'

const ProfileWidget = () => {
  const dispatch = useDispatch()
  const { summary, fullName, title, phone, email, display } = useSelector(
    (state) => state.ResumeStore
  )
  return (
    <Container>
      <CustomRow>
        <p>
          Display Summary
          <span style={{ fontWeight: 'bolder', fontSize: 15 }}>
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
          value={fullName}
          onChange={({ target }) => dispatch(setFullName(target.value))}
          placeholder="Enter your full name"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          value={title}
          onChange={({ target }) => dispatch(setTitle(target.value))}
          placeholder="Enter tour title"
          maxLength={38}
          prefix={<QqOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          value={phone}
          onChange={({ target }) => dispatch(setPhone(target.value))}
          placeholder="050-510-1952"
          maxLength={38}
          prefix={<PhoneOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          value={email}
          onChange={({ target }) => dispatch(setEmail(target.value))}
          placeholder="info@doctorcode.org"
          prefix={<MailOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          value={summary}
          disabled={!display.summary}
          onChange={({ target }) => dispatch(setSummary(target.value))}
          placeholder="Do not write a story!"
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

export default ProfileWidget
