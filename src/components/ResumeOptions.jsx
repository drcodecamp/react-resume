import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import {
  addEducation,
  addExp,
  addProject,
  removeEducation,
  removeExp,
  removeProject,
  setEmail,
  setFacebookURL,
  setFullName,
  setGitHubURL,
  setInstagramURL,
  setLinkedinURL,
  setPhone,
  setProjectDemoLink,
  setProjectGitLink,
  setProjectImageUrl,
  setProjectInfo,
  setProjectName,
  setSkills,
  setSummary,
  setThemeColor,
  setTitle,
  setYoutubeURL,
  toggleEducation,
  toggleEducationIcons,
  toggleExperience,
  toggleExpIcons,
  toggleProjects,
  toggleSideNav,
  toggleSocial,
  toggleStack,
  toggleSummary,
} from '../store/resumeSlice.js'
import Toggle from './Toggle'
import { TextInput } from './TextInput.jsx'
import ProjectItemForm from './ProjectItemForm.jsx'
import ExperienceItemForm from './ExperienceItemForm.jsx'
import EducationItemForm from './EducationItemForm.jsx'
import { useCallback } from 'react'
import { toPng, toJpeg } from 'html-to-image'

const ResumeOptions = ({ documentRef }) => {
  const [documentQuality, setDocumentQuality] = useState(2)
  const [form, setForm] = useState({
    profile: false,
    sideNav: false,
    projects: false,
    stack: false,
    exp: false,
    education: false,
    theme: false,
  })
  const dispatch = useDispatch()
  const {
    summary,
    display,
    experience,
    education,
    themeColor,
    stack,
    projects,
  } = useSelector((state) => state.ResumeStore)
  const toggleForm = (field) => {
    setForm({
      ...form,
      [field]: !form[field],
    })
  }
  const handleColorChange = (e) => {
    let r = document.querySelector(':root')
    r.style.setProperty('--primary-color', e.target.value)
    dispatch(setThemeColor(e.target.value))
  }
  const downloadTemplate = () => {
    window.location.assign('https://www.doctorcode.org/template.docx')
  }
  const downloadAsJPG = useCallback(() => {
    if (documentRef.current === null) {
      return
    }
    toJpeg(documentRef.current, {
      pixelRatio: documentQuality,
      quality: 1,
      cacheBust: true,
    })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'doctor-code.jpg'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [documentRef])

  const downloadResume = useCallback(() => {
    if (documentRef.current === null) {
      return
    }
    toPng(documentRef.current, {
      pixelRatio: documentQuality,
      quality: 1,
      cacheBust: true,
    })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'doctor-code.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [documentRef])
  return (
    <ResumeOptionsContainer>
      <Resume>
        <CategoryName onClick={() => toggleForm('theme')}>
          Theme
          <p>
            {form.theme ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
          </p>
        </CategoryName>
        {form.theme && (
          <Form>
            <Row>
              Select main color
              <ColorPicker
                type="color"
                value={themeColor}
                onInput={(e) => {
                  handleColorChange(e)
                }}
              />
            </Row>
          </Form>
        )}

        <CategoryName onClick={() => toggleForm('profile')}>
          Profile
          <p>
            {form.profile ? (
              <MdOutlineArrowDropUp />
            ) : (
              <MdOutlineArrowDropDown />
            )}
          </p>
        </CategoryName>
        {form.profile && (
          <Form>
            <Row>
              <TextInput
                type="text"
                placeholder="Doctor Code"
                onChange={({ target }) => dispatch(setFullName(target.value))}
              />
            </Row>
            <Row>
              <TextInput
                type="text"
                placeholder="Frontend Developer"
                onChange={({ target }) => dispatch(setTitle(target.value))}
              />
            </Row>
            <Row>
              <TextInput
                type="text"
                placeholder="050-510-1952"
                onChange={({ target }) => dispatch(setPhone(target.value))}
              />
            </Row>
            <Row>
              <TextInput
                type="text"
                placeholder="info@doctorcode.org"
                onChange={({ target }) => dispatch(setEmail(target.value))}
              />
            </Row>
            <Row>
              <p>
                Display Summary
                <span style={{ fontWeight: 'bolder', fontSize: 15 }}>
                  (not recommended!)
                </span>
              </p>
              <Toggle
                onClick={() => dispatch(toggleSummary())}
                toggled={display.summary}
              />
            </Row>
            {display.summary && (
              <Row>
                <TextInput
                  type="textarea"
                  value={summary}
                  placeholder="please dont start telling us that you are so smart and u like to wake up every morning we really dont care about those things and no one reads it."
                  onInput={({ target }) => dispatch(setSummary(target.value))}
                />
              </Row>
            )}
          </Form>
        )}

        <CategoryName onClick={() => toggleForm('sideNav')}>
          Navigator
          <p>
            {form.sideNav ? (
              <MdOutlineArrowDropUp />
            ) : (
              <MdOutlineArrowDropDown />
            )}
          </p>
        </CategoryName>
        {form.sideNav && (
          <Form>
            <Row>
              Enable navigator section
              <Toggle
                onClick={() => dispatch(toggleSideNav())}
                toggled={display.sideNav}
              />
            </Row>
            <SocialActions>
              <Social>
                Facebook
                <Toggle
                  onClick={() => dispatch(toggleSocial('facebook'))}
                  toggled={display.social.facebook}
                />
              </Social>
              <TextInput
                placeholder="https://www.facebook.com/doctorcodecamp"
                onInput={({ target }) => {
                  dispatch(setFacebookURL(target.value))
                }}
              />

              <Social>
                Linkedin
                <Toggle
                  onClick={() => dispatch(toggleSocial('link'))}
                  toggled={display.social.link}
                />
              </Social>
              <TextInput
                placeholder="https://www.linkedin.com/in/doctorcodecamp/"
                onInput={({ target }) => {
                  dispatch(setLinkedinURL(target.value))
                }}
              />

              <Social>
                Github
                <Toggle
                  onClick={() => dispatch(toggleSocial('github'))}
                  toggled={display.social.github}
                />
              </Social>
              <TextInput
                placeholder="https://github.com/drcodecamp"
                onInput={({ target }) => {
                  dispatch(setGitHubURL(target.value))
                }}
              />

              <Social>
                Youtube
                <Toggle
                  onClick={() => dispatch(toggleSocial('youtube'))}
                  toggled={display.social.youtube}
                />
              </Social>
              <TextInput
                placeholder="https://www.youtube.com/@doctorcode"
                onInput={({ target }) => {
                  dispatch(setYoutubeURL(target.value))
                }}
              />

              <Social>
                Instagram
                <Toggle
                  onClick={() => dispatch(toggleSocial('instagram'))}
                  toggled={display.social.instagram}
                />
              </Social>
              <TextInput
                placeholder="https://www.instagram.com/_doctorcode/"
                onInput={({ target }) => {
                  dispatch(setInstagramURL(target.value))
                }}
              />
            </SocialActions>
          </Form>
        )}

        <CategoryName onClick={() => toggleForm('projects')}>
          Projects
          <p>
            {form.projects ? (
              <MdOutlineArrowDropUp />
            ) : (
              <MdOutlineArrowDropDown />
            )}
          </p>
        </CategoryName>

        {form.projects && (
          <ProjectsController>
            <Row>
              Enable projects section
              <Toggle
                onClick={() => dispatch(toggleProjects())}
                toggled={display.projects}
              />
            </Row>
            <Row>
              Number of Projects
              <Buttons>
                <OptionButton onClick={() => dispatch(removeProject())}>
                  -
                </OptionButton>
                <div>{projects.length}</div>
                <OptionButton onClick={() => dispatch(addProject())}>
                  +
                </OptionButton>
              </Buttons>
            </Row>
          </ProjectsController>
        )}

        {form.projects &&
          projects.map((project) => {
            return <ProjectItemForm key={project.id} project={project} />
          })}

        <CategoryName onClick={() => toggleForm('stack')}>
          Stack (Skills)
          <p>
            {form.stack ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
          </p>
        </CategoryName>
        {form.stack && (
          <Form>
            <Row>
              Enable/Disable stack section
              <Toggle
                onClick={() => dispatch(toggleStack())}
                toggled={display.stack}
              />
            </Row>
            <Row>
              <p>Enter skills seperated by comma ,</p>
              <p>to BOLD a skill just click on it on the resume document!</p>
            </Row>

            <Example>
              For Example: <br /> javascript, typescript, react.js, angular,
              vue.js, node.js,express, mongodb, micro-services
            </Example>
            <TextInput
              type="text"
              value={stack}
              placeholder="javascript, typescript, react.js, angular, vue.js, node.js,express, mongoDB, micro-services,html,css,sass, bootstrap "
              onInput={({ target }) => dispatch(setSkills(target.value))}
            />
          </Form>
        )}

        <CategoryName onClick={() => toggleForm('exp')}>
          Experience
          <p>
            {form.exp ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
          </p>
        </CategoryName>
        {form.exp && (
          <>
            <ProjectsController>
              <Row>
                Enable/Disable experience section:
                <Toggle
                  onClick={() => dispatch(toggleExperience())}
                  toggled={display.experience}
                />
              </Row>
              <Row>
                Number of Projects
                <Buttons>
                  <OptionButton onClick={() => dispatch(removeExp())}>
                    -
                  </OptionButton>
                  <div>{experience.length}</div>
                  <OptionButton onClick={() => dispatch(addExp())}>
                    +
                  </OptionButton>
                </Buttons>
              </Row>
              <Row>
                Display Job icons
                <Toggle
                  onClick={() => dispatch(toggleExpIcons())}
                  toggled={display.experience}
                />
              </Row>
            </ProjectsController>
          </>
        )}

        {form.exp &&
          experience.map((exp, idx) => {
            return (
              <div key={exp.id}>
                <ExperienceItemForm expItem={exp} />
              </div>
            )
          })}

        <CategoryName onClick={() => toggleForm('education')}>
          Education
          <p>
            {form.education ? (
              <MdOutlineArrowDropUp />
            ) : (
              <MdOutlineArrowDropDown />
            )}
          </p>
        </CategoryName>

        {form.education && (
          <Form>
            <Row>
              Enable/Disable education section:
              <Toggle
                onClick={() => dispatch(toggleEducation())}
                toggled={display.education}
              />
            </Row>
            <Row>
              Display Education icons
              <Toggle
                onClick={() => dispatch(toggleEducationIcons())}
                toggled={display.education}
              />
            </Row>
            <Row>
              Number of Educations
              <Buttons>
                <OptionButton onClick={() => dispatch(removeEducation())}>
                  -
                </OptionButton>
                <div>{education.length}</div>
                <OptionButton onClick={() => dispatch(addEducation())}>
                  +
                </OptionButton>
              </Buttons>
            </Row>
            {form.education &&
              education.map((edu) => {
                return (
                  <div key={edu.id}>
                    <EducationItemForm educationItem={edu} />
                  </div>
                )
              })}
          </Form>
        )}

        <DownloadSection>
          First Download as PNG or JPG
          <div style={{ display: 'flex' }}>
            <Download onClick={downloadAsJPG}>JPG</Download>
            <Download
              style={{ background: '#00a6ff' }}
              onClick={downloadResume}
            >
              PNG
            </Download>
          </div>
        </DownloadSection>
        <DownloadSection>
          2. Download Word Template and replace image with yours <br />
          3. Add the links inside the word file and export to pdf if your wish
          so.
          <div style={{ display: 'flex' }}>
            <Download onClick={downloadTemplate}>Template</Download>
          </div>
        </DownloadSection>
      </Resume>
    </ResumeOptionsContainer>
  )
}

const DownloadSection = styled.div`
  display: flex;
  height: 100px;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
`

const CategoryName = styled.h2`
  margin-top: 1em;
  padding: 1em;
  font-size: 1.1em;
  display: flex;
  color: #7a7a7a;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  gap: 11px;
  border-bottom: 1px solid #262626;
  cursor: pointer;

  :hover {
    background-color: #e0e0e0;
  }
`

const Download = styled.div`
  border: none;
  margin: 0.5em;
  width: 100px;
  height: 40px;
  text-align: center;
  background-color: #1ec74c;
  line-height: 40px;
  color: white;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
`

const Resume = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
`

const Example = styled.div`
  font-weight: bold;
  padding-top: 1em;
  padding-bottom: 1em;
`

const ProjectsController = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
`

const OptionButton = styled.button`
  border: none;
  cursor: pointer;
  margin: 0.3em;
  width: 40px;
  height: 40px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 12px;
  background: #eeeeee;
  :hover {
    background-color: #bdbdbd;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 1em;
`

const SocialActions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const Row = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5em 0;
`

const ColorPicker = styled.input`
  all: unset;
  width: 45px;
  height: 45px;
  padding: 0;
  margin: 0;
  border: none;
`

const Form = styled.div`
  background-color: white;
  padding: 1em;
  width: 100%;
`

const ResumeOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: white;
  overflow: auto;
  @media print {
    display: none;
  }
`

export default ResumeOptions
