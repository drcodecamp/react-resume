import React from 'react'
import styled from 'styled-components'
import { Checkbox, Input, Switch } from 'antd'
import {
  setFacebookURL,
  setGitHubURL,
  setInstagramURL,
  setLinkedinURL,
  setYoutubeURL,
  toggleSideNav,
  toggleSocial,
} from '../store/resumeSlice.js'
import CustomRow from '../components/shared/CustomRow.jsx'
import { useDispatch, useSelector } from 'react-redux'

const SideNavWidgetWidget = () => {
  const dispatch = useDispatch()
  const { display, socialUrls } = useSelector((state) => state.ResumeStore)
  return (
    <Container>
      <CustomRow>
        Enable navigator section
        <Switch
          checked={display.sideNav}
          onClick={() => dispatch(toggleSideNav())}
        />
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
            onChange={({ target }) => {
              dispatch(setFacebookURL(target.value))
            }}
            value={socialUrls.facebook}
            disabled={!display.sideNav || !display.social.facebook}
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
            onChange={({ target }) => {
              dispatch(setLinkedinURL(target.value))
            }}
            value={socialUrls.linkedin}
            disabled={!display.sideNav || !display.social.link}
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
            onChange={({ target }) => {
              dispatch(setGitHubURL(target.value))
            }}
            value={socialUrls.github}
            disabled={!display.sideNav || !display.social.github}
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
            onChange={({ target }) => {
              dispatch(setYoutubeURL(target.value))
            }}
            value={socialUrls.youtube}
            disabled={!display.sideNav || !display.social.youtube}
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
            onChange={({ target }) => {
              dispatch(setInstagramURL(target.value))
            }}
            value={socialUrls.instagram}
            disabled={!display.sideNav || !display.social.instagram}
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
