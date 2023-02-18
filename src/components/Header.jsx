import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const HeaderSection = () => {
  const { display, summary, fullName, phone, email, title } = useSelector(
    (state) => state.ResumeStore
  )
  return (
    <HeaderSectionContainer>
      <UserName>{fullName || 'Doctor Code'}</UserName>
      <UserTitle>{title || 'Front End Developer'}</UserTitle>
      <Separator />
      <PhoneNumber>{phone || '050-510-1952'}</PhoneNumber>
      <EmailAddress>{email || 'info@doctorcode.org'}</EmailAddress>
      {display.summary && <Summery>{summary || ''}</Summery>}
    </HeaderSectionContainer>
  )
}

const Separator = styled.div`
  background-color: #858585;
  height: 2px;
  width: 222px;
  margin: 1em 0;
`
const UserName = styled.h1`
  all: unset;
  font-size: 2.5em;
  font-weight: bolder;
  color: #434343;
`

const Summery = styled.p`
  all: unset;
  word-break: break-word;
  color: #434343;
  padding-top: 1em;
  width: 100%;
`

const EmailAddress = styled.p`
  all: unset;
  font-size: 1.5em;
  font-weight: normal;
  color: #434343;
`
const PhoneNumber = styled.p`
  all: unset;
  font-size: 1.5em;
  font-weight: bolder;
  color: #434343;
`

const UserTitle = styled.h2`
  all: unset;
  font-size: 2em;
  font-weight: bolder;
  color: var(--primary-color);
`

const HeaderSectionContainer = styled.section`
  flex-direction: column;
  display: flex;
`

export default HeaderSection
