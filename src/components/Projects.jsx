import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Title } from './Stack'
import { useSelector } from 'react-redux'
import { ContentSection } from './shared/ContentSection.js'
import {
  selectFullResume,
  selectResumeProjects,
  selectCardDesign,
} from '../store/resumeSlice.js'

const ProjectsSection = () => {
  const resume = useSelector(selectFullResume)
  const projects = useSelector(selectResumeProjects)
  const cardDesign = useSelector(selectCardDesign)

  const projectListMode = useMemo(() => {
    switch (projects.length) {
      case 1:
        return 'flex-start'
      case 2:
        return 'flex-start'
      default:
        return 'space-between'
    }
  }, [projects.length])

  return (
    <ContentSection>
      <Title>Projects</Title>
      <ProjectList size={projectListMode}>
        {projects.map((project) => {
          return cardDesign == 'A' ?
           (
            <ProjectItem key={project.id}>
              <CardA>
                <ProjectImage>
                  <img src={project.image} alt="proj" />
                </ProjectImage>
                <ProjectName>{project.name}</ProjectName>
                <ProjectInfo>{project.info}</ProjectInfo>
                <Actions>
                  <ProjectSourceCode
                    href={'https://' + project.codeLink || '#'}
                    target="_blank"
                  >
                    code
                  </ProjectSourceCode>
                  |
                  <ProjectDemoButton
                    color={resume.themeColor}
                    href={'https://' + project.demoLink || '#'}
                    target="_blank"
                  >
                    demo
                  </ProjectDemoButton>
                </Actions>
              </CardA>
            </ProjectItem>
          ) : cardDesign == 'B' ? (
            <ProjectItem key={project.id} maxHeight= '200' minHeight='150'>
            <Card>
                <CardBLine background={ resume.themeColor}/>
                <CardTitle>{project.name}</CardTitle>
                <CardInfo>{project.info}</CardInfo>
                <CardBWarpButton>
                  <CardButtonGit 
                   href={'https://' + project.codeLink || '#'}
                   target="_blank"
                  >
                    GIT                  
                  </CardButtonGit>
                  <CardButtonDemo
                   href={'https://' + project.demoLink || '#'}
                   target="_blank"
                   background={ resume.themeColor}
                   >
                    DEMO
                  </CardButtonDemo>
                </CardBWarpButton>
            </Card>
          </ProjectItem>
          ) :(
            <ProjectItem marginTop='25px'>
               <Card>
              <CardCImage src={project.image} alt="proj"></CardCImage>
              <CardTitle margin= '25px 0px 20px 0px'>{project.name}</CardTitle>
              <CardInfo marginBottom= '40px' >{project.info}</CardInfo>
              <CardButtonDemo
                   background={ resume.themeColor}
                   href={'https://' + project.demoLink || '#'}
                   target="_blank"
                   position= 'absolute'
                   bottom= '-10px'
                   right= 'calc(50% - 50px)'
                  >
                    DEMO
              </CardButtonDemo>
            </Card>
            </ProjectItem>
          )
        })}
      </ProjectList>
    </ContentSection>
  )
}

const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  overflow: hidden;
  img {
    width: 125%;
    height: 110px;
    object-fit: cover;
    object-position: center;
  }
`
const ProjectList = styled.div`
  display: flex;
  justify-content: ${({ mode }) => mode || 'stretch'};
  padding-top: 1em;
  gap: 1rem;
`
export const Actions = styled.div`
  padding-top: 0.5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--card-bg);
  max-height: ${({maxHeight})=> maxHeight || '350px'};
  min-height: ${({minHeight})=> minHeight || '200px'};;
  width: 33%;
  margin-right: 0.5em;
  border-radius: 25px;
  box-shadow: 0 4px 1em rgb(0 0 0 / 10%);
  margin-top:${({marginTop}) => marginTop || 0}
`
const ProjectName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: var(--main);
`
const ProjectInfo = styled.div`
  color: var(--subtitle);
  font-size: 0.875em;
  padding: 0.2em 0;
  min-height: 50px;
`
const ProjectSourceCode = styled.a`
  font-size: 1em;
  color: var(--subtitle);
  cursor: pointer;
  text-decoration: none;
`
const ProjectDemoButton = styled.a`
  font-weight: bold;
  color: ${({ color }) => color || 'white'};
  padding: 0.25rem 0.5rem;
  font-size: 1em;
  border-radius: 8px;
  cursor: pointer;
`
const CardA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-word;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  padding: 1em;
`
const Card = styled.div`
position: relative;
height: 100%;
width: 100%;
background: rgba(255, 255, 255, 0.64);
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
border-radius: 16px;
`
const CardBLine = styled.div`
position: absolute; 
top: 5px; 
left: calc(50% - 18px);
background:${({ background }) => background || '#51D6DA'};
width: 36px;
height: 2px;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
border-radius: 16px;`

const CardTitle = styled.div`
font-weight: bold;
color: var(--main);
display: flex;
width: 100%;
line-height: 139.69%;
align-items: center;
text-align: center;
justify-content: center;
color: #434343;
padding-top:15px;
margin:${({ margin }) => margin || '0px 0px 15px 0px'};
`
const CardInfo = styled.div`
width: 90%;
line-height: 139.69%;
display: flex;
align-items: center;
margin-left: 5%;
color: var(--subtitle);
margin-bottom:${({ marginBottom }) => marginBottom || 0}
`
const CardBWarpButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 10px 0px 5px;
margin: 10px 0px 7px 0px;
`
const CardButtonDemo = styled.a`
position: ${({ position }) => position || ''};
bottom: ${({ bottom }) => bottom || '' };
right: ${({ right }) => right || '' };
width: 100px;
height: 30px;
box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
border-radius: 42px;
font-size: 14px;
line-height: 12px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color: #FFFFFF;
background-color: ${({ background }) => background || '#51D6DA'};
`
const CardButtonGit = styled.a`
width: 70px;
height: 25px;
display: flex;
align-items: center;
text-align: center;
font-weight: 600;
justify-content: center;
font-size: 12px;
line-height: 13px;
color: #434343;
`
const CardCImage = styled.img`
position:absolute;
left:calc(50% - 25px);
top:-25px;
width: 50px;
height: 50px;
border-radius:50%;
object-fit:cover;
object-position: center;
`

export default ProjectsSection
