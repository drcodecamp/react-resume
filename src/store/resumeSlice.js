import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { memoize } from 'proxy-memoize'
import EDUCATION_ICON from '../assets/education.webp'
import { getRandomImage } from '../utils/getRandomImage.js'
import { getRandomName } from '../constants/names.js'
import templates from './resumeTemplates'
export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    selectedDocumentId: '',
    documents: {},
  },
  reducers: {
    setProjectsStyle(state, action) {
      state.documents[state.selectedDocumentId].projectStyle = action.payload
    },
    setDarkMode: (state, action) => {
      state.documents[state.selectedDocumentId].isDarkMode = action.payload
    },
    toggleDarkMode: (state) => {
      state.documents[state.selectedDocumentId].isDarkMode =
        !state.documents[state.selectedDocumentId].isDarkMode
    },
    setDocumentName: (state, action) => {
      state.documents[state.selectedDocumentId].documentName = action.payload
    },
    setCurrentDocumentId: (state, action) => {
      state.selectedDocumentId = action.payload
    },
    removeDocumentById: (state, action) => {
      console.log(action.payload)
      delete state.documents[action.payload]
    },
    addResumeDocument: (state, action) => {
      const templateId = action.payload
      const uniqueId = nanoid()
      state.selectedDocumentId = uniqueId
      state.documents[uniqueId] = {
        id: uniqueId,
        ...templates[templateId].template,
        documentName: getRandomName(),
      }
    },
    setSkills: (state, action) => {
      if (action.payload.length > 160) return state
      state.documents[state.selectedDocumentId].stack.push({
        id: nanoid(),
        name: action.payload,
        isActivated: false,
      })
    },
    removeSkill: (state, action) => {
      state.documents[state.selectedDocumentId].stack = state.documents[
        state.selectedDocumentId
      ].stack.filter((skill) => skill.id !== action.payload)
    },
    setSocialURL: (state, action) => {
      state.documents[state.selectedDocumentId].socialUrls[action.payload.id] =
        action.payload.value
    },
    setProjectName: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].projects.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].projects[idx].name =
        action.payload.value
    },
    setProjectInfo: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].projects.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].projects[idx].info =
        action.payload.value
    },
    setProjectImageUrl: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].projects.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].projects[idx].image =
        action.payload.value
    },
    setProjectDemoLink: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].projects.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].projects[idx].demoLink =
        action.payload.value
    },
    setProjectGitLink: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].projects.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].projects[idx].codeLink =
        action.payload.value
    },
    setJobInfo: (state, action) => {
      const idx = state.documents[
        state.selectedDocumentId
      ].experience.findIndex((i) => i.id === action.payload.id)
      state.documents[state.selectedDocumentId].experience[idx].information =
        action.payload.value
    },
    setJobInfoList: (state, action) => {
      const idx = state.documents[
        state.selectedDocumentId
      ].experience.findIndex((i) => i.id === action.payload.id)
      state.documents[state.selectedDocumentId].experience[idx].informationList[
        action.payload.index
      ].val = action.payload.value
    },
    setJobDate: (state, action) => {
      const idx = state.documents[
        state.selectedDocumentId
      ].experience.findIndex((i) => i.id === action.payload.id)
      state.documents[state.selectedDocumentId].experience[idx].date =
        action.payload.value
    },
    setJobIndustry: (state, action) => {
      const idx = state.documents[
        state.selectedDocumentId
      ].experience.findIndex((i) => i.id === action.payload.id)
      state.documents[state.selectedDocumentId].experience[idx].industry =
        action.payload.value
    },
    setJobName: (state, action) => {
      const idx = state.documents[
        state.selectedDocumentId
      ].experience.findIndex((i) => i.id === action.payload.id)
      state.documents[state.selectedDocumentId].experience[idx].name =
        action.payload.value
    },
    setJobIconUrl: (state, action) => {
      const idx = state.documents[
        state.selectedDocumentId
      ].experience.findIndex((i) => i.id === action.payload.id)
      state.documents[state.selectedDocumentId].experience[idx].icon =
        action.payload.value
    },
    setEducationIcon: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].education.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].education[idx].icon =
        action.payload.value
    },
    setEducationName: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].education.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].education[idx].name =
        action.payload.value
    },
    setEducationDuration: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].education.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].education[idx].duration =
        action.payload.value
    },
    setEducationDesc: (state, action) => {
      const idx = state.documents[state.selectedDocumentId].education.findIndex(
        (i) => i.id === action.payload.id
      )
      state.documents[state.selectedDocumentId].education[idx].description =
        action.payload.value
    },
    setSummary: (state, action) => {
      if (action.payload.length > 160) return state
      state.documents[state.selectedDocumentId].summary = action.payload
    },
    setThemeColor: (state, action) => {
      state.documents[state.selectedDocumentId].themeColor = action.payload
    },
    setTitle: (state, action) => {
      state.documents[state.selectedDocumentId].title = action.payload
    },
    setEmail: (state, action) => {
      state.documents[state.selectedDocumentId].email = action.payload
    },
    setPhone: (state, action) => {
      state.documents[state.selectedDocumentId].phone = action.payload
    },
    setFullName: (state, action) => {
      state.documents[state.selectedDocumentId].fullName = action.payload
    },
    toggleActivatedSkill: (state, action) => {
      const skill = state.documents[state.selectedDocumentId].stack.find(
        (skill) => skill.id === action.payload
      )
      if (skill) {
        skill.isActivated = !skill.isActivated
      }
    },
    toggleExperience: (state) => {
      state.documents[state.selectedDocumentId].display.experience =
        !state.documents[state.selectedDocumentId].display.experience
    },
    toggleExperienceInFreeText: (state) => {
      state.documents[state.selectedDocumentId].display.experienceInFreeText =
        !state.documents[state.selectedDocumentId].display.experienceInFreeText
    },
    toggleEducationIcons: (state) => {
      state.documents[state.selectedDocumentId].display.educationIcons =
        !state.documents[state.selectedDocumentId].display.educationIcons
    },
    toggleExpIcons: (state) => {
      state.documents[state.selectedDocumentId].display.jobIcons =
        !state.documents[state.selectedDocumentId].display.jobIcons
    },
    toggleStack: (state) => {
      state.documents[state.selectedDocumentId].display.stack =
        !state.documents[state.selectedDocumentId].display.stack
    },
    toggleProjects: (state) => {
      state.documents[state.selectedDocumentId].display.projects =
        !state.documents[state.selectedDocumentId].display.projects
    },
    toggleOneLineProjects: (state) => {
      state.documents[state.selectedDocumentId].display.oneLineProjects =
        !state.documents[state.selectedDocumentId].display.oneLineProjects
    },
    toggleSocial: (state, action) => {
      state.documents[state.selectedDocumentId].display.social[action.payload] =
        !state.documents[state.selectedDocumentId].display.social[
          action.payload
        ]
    },
    toggleSummary: (state) => {
      state.documents[state.selectedDocumentId].display.summary =
        !state.documents[state.selectedDocumentId].display.summary
    },
    toggleEducation: (state) => {
      state.documents[state.selectedDocumentId].display.education =
        !state.documents[state.selectedDocumentId].display.education
    },
    toggleRenderer: (state) => {
      state.documents[state.selectedDocumentId].display.renderer =
        !state.documents[state.selectedDocumentId].display.renderer
    },
    toggleSideNav: (state) => {
      state.documents[state.selectedDocumentId].display.sideNav =
        !state.documents[state.selectedDocumentId].display.sideNav
    },
    displayRenderer: (state) => {
      state.documents[state.selectedDocumentId].display.renderer = true
    },
    addEducation: (state) => {
      if (state.documents[state.selectedDocumentId].education.length < 2) {
        state.documents[state.selectedDocumentId].education.push({
          id: nanoid(),
          icon: EDUCATION_ICON,
          name: 'Youtube @DoctorCode',
          duration: '3 Years',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam.',
        })
      }
    },
    addProject: (state) => {
      if (state.documents[state.selectedDocumentId].projects.length < 3) {
        state.documents[state.selectedDocumentId].projects.push({
          id: nanoid(),
          name: 'Project Name',
          image: getRandomImage(),
          info: 'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
          codeLink: 'doctorcode.org/',
          demoLink: 'doctorcode.org/',
        })
      }
    },
    removeInfoList: (state, action) => {
      const idx = state.documents[
        state.selectedDocumentId
      ].experience.findIndex((i) => i.id === action.payload.id)
      if (
        state.documents[state.selectedDocumentId].experience[idx]
          .informationList.length === 1
      ) {
        return state
      }
      state.documents[state.selectedDocumentId].experience[
        idx
      ].informationList.pop()
    },
    addExp: (state) => {
      if (state.documents[state.selectedDocumentId].experience.length < 2) {
        state.documents[state.selectedDocumentId].experience.push({
          id: nanoid(),
          icon: '',
          name: 'Demo company',
          industry: 'Wearable Devices',
          date: '2 Years',
          informationList: [
            {
              id: nanoid(),
              val: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proibibendum venenatis',
            },
          ],
          information:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam.',
        })
      }
    },
    addInfoList: (state, action) => {
      const idx = state.documents[
        state.selectedDocumentId
      ].experience.findIndex((i) => i.id === action.payload.id)
      if (
        state.documents[state.selectedDocumentId].experience[idx]
          .informationList.length === 4
      ) {
        return state
      }
      state.documents[state.selectedDocumentId].experience[
        idx
      ].informationList.push({
        id: nanoid(),
        val: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proibibendum venenatis',
      })
    },
    removeEducation: (state) => {
      if (state.documents[state.selectedDocumentId].education.length >= 2) {
        state.documents[state.selectedDocumentId].education.pop()
      }
    },
    removeProject: (state) => {
      if (state.documents[state.selectedDocumentId].projects.length >= 1)
        state.documents[state.selectedDocumentId].projects.pop()
    },
    removeExp: (state) => {
      if (state.documents[state.selectedDocumentId].experience.length === 1)
        return state
      state.documents[state.selectedDocumentId].experience.pop()
    },
  },
})
export const {
  setDocumentName,
  setCurrentDocumentId,
  addResumeDocument,
  toggleDarkMode,
  setJobInfo,
  setJobInfoList,
  setJobDate,
  removeDocumentById,
  setJobIndustry,
  setJobName,
  setJobIconUrl,
  toggleStack,
  setSocialURL,
  toggleExperience,
  toggleExperienceInFreeText,
  setProjectDemoLink,
  setProjectGitLink,
  setProjectImageUrl,
  setProjectInfo,
  setProjectName,
  toggleSocial,
  setThemeColor,
  toggleEducationIcons,
  toggleEducation,
  toggleProjects,
  toggleOneLineProjects,
  setTitle,
  setPhone,
  setEmail,
  setFullName,
  toggleRenderer,
  displayRenderer,
  toggleSummary,
  setSummary,
  toggleExpIcons,
  toggleSideNav,
  addEducation,
  removeEducation,
  removeProject,
  addProject,
  removeExp,
  addExp,
  addInfoList,
  removeInfoList,
  setEducationIcon,
  setEducationName,
  setEducationDuration,
  setEducationDesc,
  setSkills,
  toggleActivatedSkill,
  removeSkill,
  setProjectsStyle,
} = resumeSlice.actions

/**
 * selectors
 */

const resumeStack = (state) =>
  state.resume.documents[state.resume.selectedDocumentId].stack
export const selectResumeStack = memoize(resumeStack)

const resumeExperience = (state) =>
  state.resume.documents[state.resume.selectedDocumentId].experience
export const selectResumeExp = memoize(resumeExperience)

const resumeEducation = (state) =>
  state.resume.documents[state.resume.selectedDocumentId].education
export const selectResumeEducation = memoize(resumeEducation)

const resumeProjects = (state) =>
  state.resume.documents[state.resume.selectedDocumentId].projects
export const selectResumeProjects = memoize(resumeProjects)

const resumeProjectStyle = (state) =>
  state.resume.documents[state.resume.selectedDocumentId].projectStyle
export const selectResumeProjectStyle = memoize(resumeProjectStyle)

const resumeDisplaySettings = (state) =>
  state.resume.documents[state.resume.selectedDocumentId].display
export const selectDisplaySettings = memoize(resumeDisplaySettings)

const resumeThemeColor = (state) =>
  state.resume.documents[state.resume.selectedDocumentId].themeColor
export const selectThemeColor = memoize(resumeThemeColor)

const fullResume = (state) =>
  state.resume.documents[state.resume.selectedDocumentId]
export const selectFullResume = memoize(fullResume)

export default resumeSlice.reducer
