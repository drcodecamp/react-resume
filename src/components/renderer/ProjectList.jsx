import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ContentSection } from '../shared/ContentSection.js'
import {
  selectFullResume,
  selectResumeProjects,
  selectResumeProjectStyle,
  selectThemeColor,
} from '../../store/resumeSlice.js'
import { Title } from '../shared/Title.jsx'
import CardAStyle from './ProjectCards/CardAStyle.jsx'
import CardLinearStyle from './ProjectCards/CardLinearStyle.jsx'
import CardBStyle from './ProjectCards/CardBStyle.jsx'
import CardCStyle from './ProjectCards/CardCStyle.jsx'

const ProjectsSection = () => {
  const projectStyle = useSelector(selectResumeProjectStyle)
  const themeColor = useSelector(selectThemeColor)

  const Projects = useMemo(() => {
    if (projectStyle === 1) {
      return <CardLinearStyle />
    }
    if (projectStyle === 2) {
      return <CardAStyle />
    }
    if (projectStyle === 3) {
      return <CardBStyle />
    }
    if (projectStyle === 4) {
      return <CardCStyle />
    }
    return <></>
  })

  return <ContentSection>{Projects}</ContentSection>
}

export default ProjectsSection
