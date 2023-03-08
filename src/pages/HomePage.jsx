import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/homepage-image.webp'
import cvDocumentAddImage from '../assets/addcv.png'
import cvDocumentImage from '../assets/document.webp'

// todo make buttons work and look good mobile too
import { useDispatch, useSelector } from 'react-redux'
import {
  removeDocumentById,
  setCurrentDocumentId,
} from '../store/resumeSlice.js'

const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const documents = useSelector((state) => state.resume.documents)

  const handleNewDocumentCreation = () => {
    if (documents && Object.keys(documents).length < 3) {
      navigate('/chooseTemplate')
    }
  }
  const setCurrentDocument = (documentId) => {
    dispatch(setCurrentDocumentId(documentId))
    navigate('/editor')
  }

  const handleDocumentRemove = (e, documentId) => {
    e.stopPropagation()
    dispatch(removeDocumentById(documentId))
  }
  return (
    <Container>
      <LeftContent>
        <Titles>
          <h1>יצירת קורות חיים</h1>
          <h2>צרו קורות חיים בהתאמה אישית!</h2>
          <h3>קורות חיים שיצעידו אתכם קדימה לעבר מציאת עבודה</h3>
        </Titles>
        <ButtonsContainer>
          <ButtonContainer>
            <Button onClick={handleNewDocumentCreation}>
              <img src={cvDocumentAddImage} alt="resume creator" />
            </Button>
            <p>צור חדש</p>
          </ButtonContainer>

          {documents &&
            Object.keys(documents).length > 0 &&
            Object.keys(documents).map((documentId) => {
              return (
                <ButtonContainer key={documentId}>
                  <Button onClick={() => setCurrentDocument(documentId)}>
                    <Close onClick={(e) => handleDocumentRemove(e, documentId)}>
                      X
                    </Close>
                    <img src={cvDocumentImage} alt="resume creator" />
                  </Button>
                  <p>{documents[documentId].documentName}</p>
                </ButtonContainer>
              )
            })}
        </ButtonsContainer>
      </LeftContent>
      <RightContent>
        <img src={heroImage} alt="resume generator" />
      </RightContent>
    </Container>
  )
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  color: white;
  padding: 2em;
  @media screen and (max-width: 1280px) {
    justify-content: space-evenly;
  }
`

const Titles = styled.div`
  color: white;
  padding-right: 2em;
  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
  h1 {
    font-size: 4.3em;
  }

  h2 {
    color: #c9c9c9;
    font-size: 3em;
  }

  h3 {
    color: #c9c9c9;
    font-size: 2em;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 85px);
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`
const LeftContent = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  direction: rtl;
  justify-content: center;
  @media screen and (max-width: 1280px) {
    justify-content: flex-start;
    order: 2;
  }
`
const RightContent = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  height: 50%;
  @media screen and (max-width: 1280px) {
    padding-top: 40px;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 768px;
    @media screen and (max-width: 1280px) {
      width: 50%;
    }
  }
`
const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  position: absolute;
  z-index: 11;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  background-color: #222025;
  border-radius: 50px;
  transition: all 0.25s ease;
  :hover {
    transform: scale(1.5);
    background-color: #1f304e;
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
  background-color: #25232a;
  width: 100px;
  border-radius: 20px;
  height: 100px;
  transition: all 0.25s ease;
  img {
    width: 50%;
  }
  :hover {
    transform: scale(1.05);
    background-color: #3e3b48;
  }
`

const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1em;
  width: 125px;
  p {
    font-weight: bolder;
    font-size: 1em;
    padding-top: 0.2em;
  }
`

export default HomePage
