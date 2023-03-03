import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Input, Switch } from 'antd'
import {
  forceNarrowHeader,
  setEmail,
  setFullName,
  setPhone,
  setSummary,
  setTitle,
  toggleNarrowHeader,
  toggleSummary,
} from '../store/resumeSlice.js'
import {
  InsertRowAboveOutlined,
  MailOutlined,
  PhoneOutlined,
  QqOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import CustomRow from '../components/shared/CustomRow.jsx'
import { Segmented } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { useEffect } from 'react'

const ProfileWidget = () => {
  const dispatch = useDispatch()
  const { summary, display, education, experience } = useSelector(
    (state) => state.resume
  )
  const [options] = useState([
    {
      label: 'Vertical',
      value: 'Vertical',
      icon: <BarsOutlined />,
    },
    {
      label: 'Horizontal',
      value: 'Horizontal',
      icon: <InsertRowAboveOutlined />,
    },
  ])

  const shouldForceNarrowHeader = useMemo(() => {
    if (!display.education || !display.experience) return false
    return education.length === 2 && experience.length === 2
  }, [education, experience, display.education, display.experience])

  useEffect(() => {
    if (shouldForceNarrowHeader) {
      dispatch(forceNarrowHeader())
    }
  }, [shouldForceNarrowHeader])

  const handleToggleNarrowHeader = () => {
    if (display.sideNav) return
    dispatch(toggleNarrowHeader())
  }

  return (
    <Container>
      <CustomRow>
        <p>
          Toggle vertical header
          <span style={{ fontWeight: 'bolder', paddingLeft: 5 }}>
            (disabled when side navigator is open!)
          </span>
        </p>
        <Segmented
          disabled={display.sideNav || shouldForceNarrowHeader}
          value={display.narrowHeader ? 'Vertical' : 'Horizontal'}
          onChange={(e) => handleToggleNarrowHeader(e)}
          options={options}
        />
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
          maxLength={38}
          prefix={<QqOutlined className="site-form-item-icon" />}
        />
      </CustomRow>
      <CustomRow>
        <Input
          onChange={({ target }) => dispatch(setPhone(target.value))}
          placeholder="050-5101952"
          maxLength={38}
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
          maxLength={150}
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

export default ProfileWidget
