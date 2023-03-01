import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import SRC from '../assets/bg1.webp'
import SRC2 from '../assets/bg2.webp'
import SRC3 from '../assets/bg3.webp'
import { getRandomIntInclusive } from '../utils/getRandomNumber.js'

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
    'please dont start telling us that you are so smart and u like to wake up every morning we really dont care about those things and no one reads it.',
  projects: [
    {
      id: nanoid(),
      image: SRC,
      name: 'Coolio',
      info: 'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
      codeLink: 'https://doctorcode.org/',
      demoLink: 'https://doctorcode.org/',
    },
    {
      id: nanoid(),
      image: SRC2,
      name: 'Coolio',
      info: 'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
      codeLink: 'https://doctorcode.org/',
      demoLink: 'https://doctorcode.org/',
    },
    {
      id: nanoid(),
      image: SRC3,
      name: 'Coolio',
      info: 'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
      codeLink: 'https://doctorcode.org/',
      demoLink: 'https://doctorcode.org/',
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
    facebook: 'facebook.com/doctorcodecamp',
    linkedin: 'linkedin.com/in/doctorcodecamp/',
    github: 'github.com/drcodecamp',
    youtube: 'www.youtube.com/@doctorcode',
    instagram: 'instagram.com/doctor_code_official/',
    medium: 'medium.com/doctor_code_official/',
  },
  experience: [
    {
      id: nanoid(),
      icon: '',
      name: 'Apple inc',
      industry: '| Wearable Devices',
      date: 'Aug 2018 - Preset ',
      information:
        'Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets personal computers (PCs).',
    },
    {
      id: nanoid(),
      icon: '',
      name: 'CISCO inc',
      industry: '| Fintech',
      date: 'Aug 2015 - Aug 2018',
      information:
        'Cisco and sells networking hardware, software, telecommunications equipment and other high-technology services and products.',
    },
  ],
  education: [
    {
      id: nanoid(),
      icon: '',
      name: 'Youtube @DoctorCode',
      duration: '3 Months',
      description:
        'Doctor code a Fullstack free online course, follow me at https://www.youtube.com/@doctorcode',
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
      state.stack[action.payload].isActivated =
        !state.stack[action.payload].isActivated
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
      state.display.social[action.payload] =
        !state.display.social[action.payload]
    },
    setSummary: (state, action) => {
      if (action.payload.length > 160) return state
      state.summary = action.payload
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
          icon: '',
          name: 'Youtube @DoctorCode',
          duration: '3 Years',
          description:
            'Doctor code a Fullstack free online course, follow me at www.youtube.com/@doctorcode',
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
          name: 'Apple inc.',
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
          info: 'Lizards are a widespread group of squamates reptiles, Lizards are a widespread group.',
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
