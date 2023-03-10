import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectFullResume } from '../../store/resumeSlice.js'

const SideNav = () => {
  const { socials } = useSelector(selectFullResume)

  return (
    <SideNavContainer>
      {socials.map((social) => {
        return (
          social.display && (
            <SocialIconContainer key={social.id}>
              <a
                href={'https://' + social.url || '#'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            </SocialIconContainer>
          )
        )
      })}
    </SideNavContainer>
  )
}

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
