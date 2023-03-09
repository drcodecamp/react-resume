import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectFullResume } from '../store/resumeSlice.js'

const SideNav = () => {
  const { fullName, socials } = useSelector(selectFullResume)
  const shortName = useMemo(() => {
    const names = fullName.split(' ')
    if (!names[0] || !names[1]) return 'dc'
    return names[0].substring(0, 1) + names[1].substring(0, 1)
  }, [fullName])

  return (
    <SideNavContainer>
      <ProfileContainer>
        <Circle>{shortName}</Circle>
      </ProfileContainer>
      {socials.map((social) => {
        return (
          social.display && (
            <SocialIconContainer key={social.id}>
              <a href={social.url || '#'} target="_blank" rel="noreferrer">
                <img src={social.icon} alt={social.name} />
              </a>
            </SocialIconContainer>
          )
        )
      })}
    </SideNavContainer>
  )
}
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
`
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  background-color: var(--circle);
  border-radius: 15px;
  width: 45px;
  height: 45px;
  margin: 0.2em;
  font-size: 1.25em;
  color: white;
`
const SocialIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  width: 100%;
  padding: 0.5em;
  img {
    cursor: pointer;
    width: 45px;
    height: 45px;
  }
`
const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 8%;
  padding-top: 1.25em;
  background: var(--card-bg);
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
`

export default SideNav
