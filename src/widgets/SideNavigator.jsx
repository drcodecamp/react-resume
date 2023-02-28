import React from 'react'
import styled from 'styled-components'
import { Checkbox, Input, Switch } from 'antd'
import {
  setFacebookURL,
  setGitHubURL,
  setInstagramURL,
  setLinkedinURL,
  setYoutubeURL,
  toggleNarrowHeader,
  toggleSideNav,
  toggleSocial,
} from '../store/resumeSlice.js'
import CustomRow from '../components/shared/CustomRow.jsx'
import { useDispatch, useSelector } from 'react-redux'

const SideNavWidgetWidget = () => {
  const dispatch = useDispatch()
  const { display, socialUrls } = useSelector((state) => state.ResumeStore)
  const handleToggleSideNav = () => {
    if (!display.narrowHeader) {
      dispatch(toggleNarrowHeader())
    }
    dispatch(toggleSideNav())
  }
  return (
    <Container>
      <CustomRow>
        Enable navigator section
        <Switch checked={display.sideNav} onClick={handleToggleSideNav} />
      </CustomRow>
      <CustomRow>
        <CustomRow>
          Facebook
          <Checkbox
            disabled={!display.sideNav}
            checked={display.social.facebook}
            onClick={() => dispatch(toggleSocial('facebook'))}
          />
          <Input
            addonBefore="https://"
            onChange={({ target }) => {
              dispatch(setFacebookURL(target.value))
            }}
            value={socialUrls.facebook}
            disabled={!display.sideNav || !display.social.facebook}
            status={socialUrls.facebook.includes('http') ? 'error' : ''}
          />
        </CustomRow>
      </CustomRow>
      <CustomRow>
        <CustomRow>
          Linkedin
          <Checkbox
            disabled={!display.sideNav}
            checked={display.social.link}
            onClick={() => dispatch(toggleSocial('link'))}
          />
          <Input
            addonBefore="https://"
            onChange={({ target }) => {
              dispatch(setLinkedinURL(target.value))
            }}
            value={socialUrls.linkedin}
            disabled={!display.sideNav || !display.social.link}
            status={socialUrls.linkedin.includes('http') ? 'error' : ''}
          />
        </CustomRow>
      </CustomRow>
      <CustomRow>
        <CustomRow>
          Git
          <Checkbox
            disabled={!display.sideNav}
            checked={display.social.github}
            onClick={() => dispatch(toggleSocial('github'))}
          />
          <Input
            addonBefore="https://"
            onChange={({ target }) => {
              dispatch(setGitHubURL(target.value))
            }}
            value={socialUrls.github}
            disabled={!display.sideNav || !display.social.github}
            status={socialUrls.github.includes('http') ? 'error' : ''}
          />
        </CustomRow>
      </CustomRow>
      <CustomRow>
        <CustomRow>
          Youtube
          <Checkbox
            disabled={!display.sideNav}
            checked={display.social.youtube}
            onClick={() => dispatch(toggleSocial('youtube'))}
          />
          <Input
            addonBefore="https://"
            onChange={({ target }) => {
              dispatch(setYoutubeURL(target.value))
            }}
            value={socialUrls.youtube}
            disabled={!display.sideNav || !display.social.youtube}
            status={socialUrls.youtube.includes('http') ? 'error' : ''}
          />
        </CustomRow>
      </CustomRow>
      <CustomRow>
        <CustomRow>
          Instagram
          <Checkbox
            disabled={!display.sideNav}
            checked={display.social.instagram}
            onClick={() => dispatch(toggleSocial('instagram'))}
          />
          <Input
            allowClear
            addonBefore="https://"
            onChange={({ target }) => {
              dispatch(setInstagramURL(target.value))
            }}
            value={socialUrls.instagram}
            disabled={!display.sideNav || !display.social.instagram}
            status={socialUrls.instagram.includes('http') ? 'error' : ''}
          />
        </CustomRow>
      </CustomRow>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default SideNavWidgetWidget
