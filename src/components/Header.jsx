import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { InnerContentPadding } from './shared/ContentSection'

const HeaderSection = () => {
  const { display, summary, fullName, phone, email, title } = useSelector(
    (state) => state.ResumeStore
  )
  const headerType = useMemo(() => {
    return display.narrowHeader ? (
      <>
        <Column>
          <UserName>{fullName || 'Doctor Code'}</UserName>
          <UserTitle>{title || 'Front End Developer'}</UserTitle>
        </Column>
        <Column style={{ alignItems: 'end' }}>
          <PhoneNumber href="tel:+972556667794">
            {phone || '050-510-1952'}
          </PhoneNumber>
          <EmailAddress href={`mailto:${email}`}>
            {email || 'info@doctorcode.org'}
          </EmailAddress>
        </Column>
      </>
    ) : (
      <>
        <UserName>{fullName || 'Doctor Code'}</UserName>
        <UserTitle>{title || 'Front End Developer'}</UserTitle>
        <Separator />
        <PhoneNumber href="tel:+972556667794">
          {phone || '050-510-1952'}
        </PhoneNumber>
        <EmailAddress href={`mailto:${email}`}>
          {email || 'info@doctorcode.org'}
        </EmailAddress>{' '}
      </>
    )
  }, [display, summary, fullName, phone, email, title])

  return (
    <>
      <HeaderSectionContainer isNarrow={display.narrowHeader}>
        {headerType}
      </HeaderSectionContainer>

      {display.summary && <Summery>{summary || ''}</Summery>}
    </>
  )
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`

const Separator = styled.div`
  background-color: var(--primary-color);
  height: 2px;
  width: 222px;
  margin: 0.5em 0;
`

const UserName = styled.h1`
  all: unset;
  font-size: 2em;
  font-weight: bolder;
  color: var(--main);
`

const Summery = styled.p`
  all: unset;
  word-break: break-word;
  color: var(--subtitle);
  padding-top: 1em;
  width: 100%;
`

const EmailAddress = styled.a`
  font-size: 1.25em;
  color: var(--subtitle);
  cursor: pointer;
  margin-top: 0.1em;
`
const PhoneNumber = styled.a`
  font-size: 1.25em;
  font-weight: bold;
  color: var(--main);
  cursor: pointer;
`

const UserTitle = styled.h2`
  all: unset;
  font-size: 1.5em;
  font-weight: bolder;
  color: var(--primary-color);
`

const HeaderSectionContainer = styled.section`
  display: flex;
  flex-direction: ${({ isNarrow }) => (isNarrow ? 'row' : 'column')};
`

export default HeaderSection
