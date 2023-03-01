import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import SRC from '../assets/bg1.webp'
import SRC2 from '../assets/bg2.webp'
import SRC3 from '../assets/bg3.webp'
import { getRandomIntInclusive } from '../utils/getRandomNumber.js'
import DEMO_WORK_ICON from '../assets/work.webp'
import EDUCATION_ICON from '../assets/education.webp'

const getRandomImage = () => {
  const randomIdx = getRandomIntInclusive(1, 3)
  switch (randomIdx) {
    case 1:
      return SRC
    case 2:
      return SRC2
    case 3:
      return SRC3
    default:
      return SRC
  }
}

const initialState = {
  display: {
    renderer: true,
    sideNav: false,
    narrowHeader: true,
    education: true,
    email: false,
    summary: false,
    stack: true,
    projects: true,
    oneLineProjects: false,
    experience: true,
    jobIcons: true,
    educationIcons: true,
    social: {
      facebook: false,
      link: false,
      github: false,
      youtube: false,
      instagram: false,
      medium: false,
    },
  },
  themeColor: '#0008ff',
  fullName: 'Doctor Code',
  phone: '050-510-1952',
  title: 'Frontend Developer',
  email: 'info@doctorcode.org',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam',
  projects: [
    {
      id: nanoid(),
      image: SRC,
      name: 'Coolio',
      info:
        'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
      codeLink: 'doctorcode.org/',
      demoLink: 'doctorcode.org/',
    },
    {
      id: nanoid(),
      image: SRC2,
      name: 'Coolio',
      info:
        'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
      codeLink: 'doctorcode.org/',
      demoLink: 'doctorcode.org/',
    },
    {
      id: nanoid(),
      image: SRC3,
      name: 'Coolio',
      info:
        'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
      codeLink: 'doctorcode.org/',
      demoLink: 'doctorcode.org/',
    },
  ],
  stack: [
    { id: nanoid(), name: 'javascript', isActivated: true },
    { id: nanoid(), name: 'typescript', isActivated: false },
    { id: nanoid(), name: 'react.js', isActivated: true },
    { id: nanoid(), name: 'angular', isActivated: false },
    { id: nanoid(), name: 'vue.js', isActivated: false },
    { id: nanoid(), name: 'node.js', isActivated: true },
    { id: nanoid(), name: 'express', isActivated: false },
    { id: nanoid(), name: 'mongoDB', isActivated: false },
    { id: nanoid(), name: 'micro-services', isActivated: false },
    { id: nanoid(), name: 'html', isActivated: false },
    { id: nanoid(), name: 'css', isActivated: false },
    { id: nanoid(), name: 'sass', isActivated: false },
    { id: nanoid(), name: 'bootstrap', isActivated: false },
  ],
  socialUrls: {
    facebook: '',
    linkedin: '',
    github: '',
    youtube: '',
    instagram: '',
    medium: '',
  },
  experience: [
    {
      id: nanoid(),
      icon: DEMO_WORK_ICON,
      name: 'Demo company',
      industry: '| Crypto',
      date: 'Aug 2018 - Preset ',
      information:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam.',
    },
    {
      id: nanoid(),
      icon: DEMO_WORK_ICON,
      name: 'Demo company',
      industry: '| Fintech',
      date: 'Aug 2015 - Aug 2018',
      information:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam.',
    },
  ],
  education: [
    {
      id: nanoid(),
      icon: EDUCATION_ICON,
      name: 'Youtube @DoctorCode',
      duration: '3 Months',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam.',
    },
  ],
  value: 0,
}

export const resumeSlice = createSlice({
  name: 'resumeSlice',
  initialState,
  reducers: {
    setSkills: (state, action) => {
      if (action.payload.length > 160) return state
      state.stack.push({
        id: nanoid(),
        name: action.payload,
        isActivated: false,
      })
    },
    toggleActivatedSkill: (state, action) => {
      const skill = state.stack.find((skill) => skill.id === action.payload)
      if (skill) {
        skill.isActivated = !skill.isActivated
      }
    },
    removeSkill: (state, action) => {
      state.stack = state.stack.filter((skill) => skill.id !== action.payload)
    },
    setFacebookURL: (state, action) => {
      state.socialUrls.facebook = action.payload
    },
    setLinkedinURL: (state, action) => {
      state.socialUrls.linkedin = action.payload
    },
    setGitHubURL: (state, action) => {
      state.socialUrls.github = action.payload
    },
    setYoutubeURL: (state, action) => {
      state.socialUrls.youtube = action.payload
    },
    setInstagramURL: (state, action) => {
      state.socialUrls.instagram = action.payload
    },
    setMediumURL: (state, action) => {
      state.socialUrls.medium = action.payload
    },
    setProjectName: (state, action) => {
      const idx = state.projects.findIndex((i) => i.id === action.payload.id)
      state.projects[idx].name = action.payload.value
    },
    setProjectInfo: (state, action) => {
      const idx = state.projects.findIndex((i) => i.id === action.payload.id)
      state.projects[idx].info = action.payload.value
    },
    setProjectImageUrl: (state, action) => {
      const idx = state.projects.findIndex((i) => i.id === action.payload.id)
      state.projects[idx].image = action.payload.value
    },
    setProjectDemoLink: (state, action) => {
      const idx = state.projects.findIndex((i) => i.id === action.payload.id)
      state.projects[idx].demoLink = action.payload.value
    },
    setProjectGitLink: (state, action) => {
      const idx = state.projects.findIndex((i) => i.id === action.payload.id)
      state.projects[idx].codeLink = action.payload.value
    },
    setJobInfo: (state, action) => {
      const idx = state.experience.findIndex((i) => i.id === action.payload.id)
      state.experience[idx].information = action.payload.value
    },
    setJobDate: (state, action) => {
      const idx = state.experience.findIndex((i) => i.id === action.payload.id)
      state.experience[idx].date = action.payload.value
    },
    setJobIndustry: (state, action) => {
      const idx = state.experience.findIndex((i) => i.id === action.payload.id)
      state.experience[idx].industry = action.payload.value
    },
    setJobName: (state, action) => {
      const idx = state.experience.findIndex((i) => i.id === action.payload.id)
      state.experience[idx].name = action.payload.value
    },
    setJobIconUrl: (state, action) => {
      const idx = state.experience.findIndex((i) => i.id === action.payload.id)
      state.experience[idx].icon = action.payload.value
    },
    toggleExperience: (state) => {
      state.display.experience = !state.display.experience
    },
    toggleEducationIcons: (state) => {
      state.display.educationIcons = !state.display.educationIcons
    },
    toggleExpIcons: (state) => {
      state.display.jobIcons = !state.display.jobIcons
    },
    toggleStack: (state) => {
      state.display.stack = !state.display.stack
    },
    toggleProjects: (state) => {
      state.display.projects = !state.display.projects
    },
    toggleOneLineProjects: (state) => {
      state.display.oneLineProjects = !state.display.oneLineProjects
    },
    toggleSocial: (state, action) => {
      state.display.social[action.payload] = !state.display.social[
        action.payload
      ]
    },
    setSummary: (state, action) => {
      if (action.payload.length > 160) return state
      state.summary = action.payload
    },
    forceNarrowHeader: (state) => {
      state.display.narrowHeader = true
    },
    toggleNarrowHeader: (state) => {
      state.display.narrowHeader = !state.display.narrowHeader
    },
    toggleSummary: (state) => {
      state.display.summary = !state.display.summary
    },
    toggleEducation: (state) => {
      state.display.education = !state.display.education
    },
    setThemeColor: (state, action) => {
      state.themeColor = action.payload
    },
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setFullName: (state, action) => {
      state.fullName = action.payload
    },
    displayRenderer: (state) => {
      state.display.renderer = true
    },
    toggleRenderer: (state) => {
      state.display.renderer = !state.display.renderer
    },
    toggleSideNav: (state) => {
      state.display.sideNav = !state.display.sideNav
    },
    setEducationIcon: (state, action) => {
      const idx = state.education.findIndex((i) => i.id === action.payload.id)
      state.education[idx].icon = action.payload.value
    },
    setEducationName: (state, action) => {
      const idx = state.education.findIndex((i) => i.id === action.payload.id)
      state.education[idx].name = action.payload.value
    },
    setEducationDuration: (state, action) => {
      const idx = state.education.findIndex((i) => i.id === action.payload.id)
      state.education[idx].duration = action.payload.value
    },
    setEducationDesc: (state, action) => {
      const idx = state.education.findIndex((i) => i.id === action.payload.id)
      state.education[idx].description = action.payload.value
    },
    addEducation: (state) => {
      if (state.education.length === 2) {
        return state
      } else {
        state.education.push({
          id: nanoid(),
          icon: EDUCATION_ICON,
          name: 'Youtube @DoctorCode',
          duration: '3 Years',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam.',
        })
      }
    },
    removeEducation: (state) => {
      if (state.education.length === 1) return state
      state.education.pop()
    },
    removeProject: (state) => {
      if (state.projects.length === 1) return state
      state.projects.pop()
    },
    removeExp: (state) => {
      if (state.experience.length === 1) return state
      state.experience.pop()
    },
    addExp: (state) => {
      if (state.experience.length === 2) {
        return state
      } else {
        state.experience.push({
          id: nanoid(),
          icon: '',
          name: 'Demo company',
          industry: 'Wearable Devices',
          time: 'Aug 2018 - Preset ',
          information:
            'Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets personal computers (PCs).',
        })
      }
    },
    addProject: (state) => {
      if (state.projects.length === 3) {
        return state
      } else {
        state.projects.push({
          id: nanoid(),
          name: 'Coolio',
          image: getRandomImage(),
          info:
            'Lizards are a widespread group of squamates reptiles, Lizards are a widespread group.',
          codeLink: '#',
          demoLink: '#',
        })
      }
    },
  },
})

export const {
  setJobInfo,
  setJobDate,
  setJobIndustry,
  setJobName,
  setJobIconUrl,
  toggleStack,
  setFacebookURL,
  setLinkedinURL,
  setGitHubURL,
  setYoutubeURL,
  setInstagramURL,
  setMediumURL,
  toggleExperience,
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
  forceNarrowHeader,
  toggleNarrowHeader,
  setSummary,
  toggleExpIcons,
  toggleSideNav,
  addEducation,
  removeEducation,
  removeProject,
  addProject,
  removeExp,
  addExp,
  setEducationIcon,
  setEducationName,
  setEducationDuration,
  setEducationDesc,
  setSkills,
  toggleActivatedSkill,
  removeSkill,
} = resumeSlice.actions

export default resumeSlice.reducer
