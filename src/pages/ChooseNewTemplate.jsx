import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addResumeDocument } from '../store/resumeSlice.js'
import templates from '../store/resumeTemplates'
const ChooseNewTemplate = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNewDocumentCreation = (templateId) => {
    dispatch(addResumeDocument(templateId))
    navigate('/editor')
  }
  return (
    <>
      <Container>
        <Titles>
          <h1>בחרו את הטמפלייט שלכם</h1>
          <h2>אל תדאגו, אפשר לשנות הכל גם בהמשך</h2>
        </Titles>
        <ButtonsContainer>
          {templates &&
            Object.keys(templates).length > 0 &&
            Object.keys(templates).map((templateId) => {
              return (
                <ButtonContainer key={templateId}>
                  <Button onClick={() => handleNewDocumentCreation(templateId)}>
                    <img
                      src={templates[templateId].image}
                      alt="choose Template"
                    />
                    <p>בחירה</p>
                  </Button>
                </ButtonContainer>
              )
            })}
        </ButtonsContainer>
      </Container>
    </>
  )
}

const ButtonsContainer = styled.section`
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  color: white;
  padding: 2em;
  gap: 1.5em;
  @media screen and (max-width: 1280px) {
    justify-content: space-evenly;
  }
`

const Titles = styled.section`
  color: white;
  text-align: center;
  align-self: center;
  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
  h1 {
    font-size: 2em;
    font-weight: 700;
  }

  h2 {
    color: #c9c9c9;
    font-size: 1.5em;
  }

  h3 {
    color: #c9c9c9;
    font-size: 2em;
  }
`

const Container = styled.div`
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`

const Button = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  z-index: 10;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
  img {
    width: 20em;
  }
  :hover {
    transform: scale(1.05);
  }
`

const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    font-weight: bolder;
    font-size: 1em;
    padding: 0.5em;
    margin-top: 0.5em;
    background-color: #2b292f;
    border-radius: 10px;
    width: 60%;
    text-align: center;
    transition: all 0.25s ease;
    :hover {
      transform: scale(1.15);
    }
  }
`

export default ChooseNewTemplate
