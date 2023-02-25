import React, { useMemo } from 'react'
import styled from 'styled-components'

import FACEBOOK_ICON from '../assets/facebook.webp'
import INSTA_ICON from '../assets/instagram.webp'
import YOUTUBE_ICON from '../assets/youtube.webp'
import LINKDIN_ICON from '../assets/linkedin.webp'
import GITHUB_ICON from '../assets/github.webp'

import { useSelector } from 'react-redux'

const SideNav = () => {
  const { fullName, display, socialUrls } = useSelector(
    (state) => state.ResumeStore
  )
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

      {display.social.facebook && (
        <SocialIconContainer>
          <a href={socialUrls.facebook || '#'} target="_blank">
            <img src={FACEBOOK_ICON} alt="facebook" />
          </a>
        </SocialIconContainer>
      )}

      {display.social.link && (
        <SocialIconContainer>
          <a href={socialUrls.linkedin || '#'} target="_blank">
            <img src={LINKDIN_ICON} alt="linkedin" />
          </a>
        </SocialIconContainer>
      )}

      {display.social.github && (
        <SocialIconContainer>
          <a href={socialUrls.github || '#'} target="_blank">
            <img src={GITHUB_ICON} alt="github" />
          </a>
        </SocialIconContainer>
      )}

      {display.social.youtube && (
        <SocialIconContainer>
          <a href={socialUrls.youtube || '#'} target="_blank">
            <img src={YOUTUBE_ICON} alt="youtube" />
          </a>
        </SocialIconContainer>
      )}

      {display.social.instagram && (
        <SocialIconContainer>
          <a href={socialUrls.instagram || '#'} target="_blank">
            <img src={INSTA_ICON} alt="instagram" />
          </a>
        </SocialIconContainer>
      )}
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
  background-color: #9b9b9b;
  border-radius: 100%;
  width: 100%;
  margin: 0.2em;
  font-size: 2em;
  color: white;
`

const SocialIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  width: 100%;
  padding: 1em;
  img {
    cursor: pointer;
    width: 55px;
    height: 55px;
  }
`

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 10%;
  background: #fbfbfb;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
`

export default SideNav
