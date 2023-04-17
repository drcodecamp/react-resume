import EDUCATION_ICON from '../assets/education.webp'
import SRC from '../assets/bg1.webp'
import SRC2 from '../assets/bg2.webp'
import SRC3 from '../assets/bg3.webp'
import DEMO_WORK_ICON from '../assets/work.webp'
import { getRandomName } from '../constants/names.js'
import { nanoid } from 'nanoid'
import fancyImage from '../assets/fancy.webp'
import juniorImage from '../assets/junior.webp'
import simpleImage from '../assets/simple.webp'

const juniorTemplate = {
  documentName: getRandomName(),
  display: {
    renderer: true,
    sideNav: false,
    education: true,
    email: false,
    summary: false,
    stack: true,
    projects: true,
    oneLineProjects: false,
    experience: true,
    experienceInFreeText: true,
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
  isDarkMode: false,
  fullName: 'Doctor Code',
  phone: '050-510-1952',
  title: 'Frontend Developer',
  email: 'info@doctorcode.org',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam',
  projectStyle: 2,
  projects: [
    {
      id: nanoid(),
      image: SRC,
      name: 'Project Name',
      info: 'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
      codeLink: 'doctorcode.org/',
      demoLink: 'doctorcode.org/',
    },
    {
      id: nanoid(),
      image: SRC2,
      name: 'Project Name',
      info: 'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
      codeLink: 'doctorcode.org/',
      demoLink: 'doctorcode.org/',
    },
    {
      id: nanoid(),
      image: SRC3,
      name: 'Project Name',
      info: 'Lorem ipsum dolor sit amet, consecr adipisng elit. Dolor dolore eaque laud ume maxime',
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
      date: '2 Years',
      informationList: [
        {
          id: nanoid(),
          val: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proibibendum venenatis',
        },
      ],
      information:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nisi sed bibendum venenatis. Cras consequat mollis pretium. Nam quam lacus biam.',
    },
    {
      id: nanoid(),
      icon: DEMO_WORK_ICON,
      name: 'Demo company',
      industry: '| Fintech',
      date: '2 Years',
      informationList: [
        {
          id: nanoid(),
          val: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proibibendum venenatis',
        },
      ],
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

const fancyTemplate = {
  ...juniorTemplate,
  projectStyle: 2,
  display: {
    ...juniorTemplate.display,
    sideNav: true,
    summary: true,
    social: {
      facebook: true,
      link: true,
      github: true,
      youtube: true,
      instagram: true,
      medium: true,
    },
  },
}

const simpleTemplate = {
  ...juniorTemplate,
  projectStyle: 1,
  display: {
    ...juniorTemplate.display,
    experienceInFreeText: false,
    summary: true,
    jobIcons: false,
    educationIcons: false,
    oneLineProjects: true,
  },
}

const templates = {
  [nanoid()]: {
    image: simpleImage,
    template: simpleTemplate,
  },
  [nanoid()]: {
    image: juniorImage,
    template: juniorTemplate,
  },
  [nanoid()]: {
    image: fancyImage,
    template: fancyTemplate,
  },
}

export default templates
