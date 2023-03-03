import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { InnerContentPadding } from './shared/ContentSection'
import { selectFullResume } from '../store/resumeSlice.js'

const HeaderSection = () => {
  const {
    display,
    themeColor,
    summary,
    fullName,
    phone,
    email,
    title,
  } = useSelector(selectFullResume)

  const headerType = useMemo(() => {
    return display.narrowHeader ? (
      <>
        <Column>
          <Title>{fullName || 'Doctor Code'}</Title>
          <SubTitle color={themeColor} primary>
            {title || 'Front End Developer'}
          </SubTitle>
        </Column>
        <Column style={{ alignItems: 'end' }}>
          <Title href="tel:+972556667794">{phone || '050-510-1952'}</Title>
          <SubTitle href={`mailto:${email}`}>
            {email || 'info@doctorcode.org'}
          </SubTitle>
        </Column>
      </>
    ) : (
      <>
        <Title>{fullName || 'Doctor Code'}</Title>
        <SubTitle color={themeColor} primary>
          {title || 'Front End Developer'}
        </SubTitle>
        <Separator color={themeColor} />
        <SubTitle href="tel:+972556667794">{phone || '050-510-1952'}</SubTitle>
        <SubTitle href={`mailto:${email}`}>
          {email || 'info@doctorcode.org'}
        </SubTitle>
      </>
    )
  }, [display, summary, themeColor, fullName, phone, email, title])

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
  background-color: ${({ color }) => (color ? color : 'black')};
  height: 2px;
  width: 222px;
  margin: 0.5em 0;
`

const SubTitle = styled.h2`
  all: unset;
  font-size: 1.5em;
  font-weight: ${({ primary }) => (primary ? 'bold' : 'normal')};
  color: ${({ primary, color }) => (primary ? color : 'var(--subtitle)')};
`

const Title = styled.h1`
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
