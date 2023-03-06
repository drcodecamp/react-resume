import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
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
  return (
    <>
      <HeaderSectionContainer isNarrow={display.narrowHeader}>
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
  padding-top: 0.35em;
  width: 100%;
`

const HeaderSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
`

export default HeaderSection
