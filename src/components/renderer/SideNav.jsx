import React from 'react'
import styled from 'styled-components'
import FACEBOOK_ICON from '../../assets/facebook.webp'
import INSTAGRAM_ICON from '../../assets/instagram.webp'
import YOUTUBE_ICON from '../../assets/youtube.webp'
import LINKEDIN_ICON from '../../assets/linkedin.webp'
import GITHUB_ICON from '../../assets/github.webp'
import MEDIUM_ICON from '../../assets/medium.webp'
import { useSelector } from 'react-redux'
import { selectFullResume } from '../../store/resumeSlice.js'

const SideNav = () => {
  const { display, socialUrls } = useSelector(selectFullResume)

  return (
    <SideNavContainer>
      {display.social.facebook && (
        <SocialIconContainer>
          <a href={'https://' + socialUrls.facebook || '#'} target="_blank">
            <img src={FACEBOOK_ICON} alt="facebook" />
          </a>
        </SocialIconContainer>
      )}
      {display.social.link && (
        <SocialIconContainer>
          <a href={'https://' + socialUrls.linkedin || '#'} target="_blank">
            <img src={LINKEDIN_ICON} alt="linkedin" />
          </a>
        </SocialIconContainer>
      )}
      {display.social.github && (
        <SocialIconContainer>
          <a href={'https://' + socialUrls.github || '#'} target="_blank">
            <img src={GITHUB_ICON} alt="github" />
          </a>
        </SocialIconContainer>
      )}
      {display.social.youtube && (
        <SocialIconContainer>
          <a href={'https://' + socialUrls.youtube || '#'} target="_blank">
            <img src={YOUTUBE_ICON} alt="youtube" />
          </a>
        </SocialIconContainer>
      )}
      {display.social.instagram && (
        <SocialIconContainer>
          <a href={'https://' + socialUrls.instagram || '#'} target="_blank">
            <img src={INSTAGRAM_ICON} alt="instagram" />
          </a>
        </SocialIconContainer>
      )}
      {display.social.medium && (
        <SocialIconContainer>
          <a href={'https://' + socialUrls.medium || '#'} target="_blank">
            <img src={MEDIUM_ICON} alt="medium" />
          </a>
        </SocialIconContainer>
      )}
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
