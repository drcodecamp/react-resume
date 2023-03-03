import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import homepageImage from '../assets/homepage-image.webp'
import cvDocumentAddImage from '../assets/addcv.png'
import cvDocumentImage from '../assets/document.webp'

import { useDispatch, useSelector } from 'react-redux'
import {
  addResumeDocument,
  setCurrentDocumentId,
} from '../store/resumeSlice.js'

const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const documents = useSelector((state) => state.resume.documents)
  const handleNewDocumentCreation = () => {
    if (Object.keys(documents).length < 3) {
      dispatch(addResumeDocument())
      navigate('/editor')
    }
  }
  const setCurrentDocument = (documentId) => {
    dispatch(setCurrentDocumentId(documentId))
    navigate('/editor')
  }
  return (
    <Container>
      <ImageContainer>
        <img src={homepageImage} alt=""></img>
      </ImageContainer>
      <TextContainer>
        <h1>יצירת קורות חיים</h1>
        <h3>צרו קורות חיים בהתאמה אישית!</h3>
        <p>קוח שיבליטו אתכם ויצעידו אתכם רמה אחת מעל כולם!</p>
      </TextContainer>
      <ActionsContainer>
        <Action>
          <CreateButton onClick={() => handleNewDocumentCreation()}>
            <ActionImage>
              <img src={cvDocumentAddImage} alt="resume creator icon"></img>
            </ActionImage>
            <p>צור חדש</p>
          </CreateButton>
        </Action>
        {Object.keys(documents).length > 0 &&
          Object.keys(documents).map((documentId) => {
            return (
              <Action key={documentId}>
                <DocumentButton onClick={() => setCurrentDocument(documentId)}>
                  <ActionImage>
                    <img src={cvDocumentImage} alt="resume creator icon"></img>
                  </ActionImage>
                  <p>{documents[documentId].documentName}</p>
                </DocumentButton>
              </Action>
            )
          })}
      </ActionsContainer>
    </Container>
  )
}

const DocumentButton = styled.button`
  cursor: pointer;
`

const CreateButton = styled.button`
  cursor: pointer;
  p {
    font-size: 2em;
  }
`

const Container = styled.div`
  display: grid;
  align-items: center;
  padding-top: 8em;
  margin: 0 auto;
  height: fit-content;
  justify-content: center;
  direction: rtl;
  color: white;
  grid-template: 'image text' 'image actions';

  @media (max-width: 500px) {
    display: block;
    margin: 1em;
    padding-top: 0;

    > * {
      margin: 1em 0;
    }
  }
`
const ImageContainer = styled.div`
  grid-area: image;
  img {
    width: 512px;
  }
  @media (max-width: 500px) {
    img {
      max-width: 320px;
    }
  }
`

const TextContainer = styled.div`
  grid-area: text;
  line-height: 2.5em;
  h1 {
    font-size: 3.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    font-size: 2em;
    color: #c1c1c1;
  }
  p {
    font-size: 1.5em;
    color: #c1c1c1;
  }

  @media (max-width: 500px) {
    line-height: 2em;
    h1 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.5em;
    }
`

const ActionsContainer = styled.div`
  grid-area: actions;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export default HomePage

const ActionImage = styled.div`
  display: inline-block;
  padding: 2em 2em;
  margin: 1em;
  background-color: #252328;
  border-radius: 10%;
  transition: transform 0.2s ease;
  :hover {
    transform: scale(1.1);
    background-color: #2b292f;
  }
  img {
    width: 64px;
  }
`
const Action = styled.div`
  display: inline-block;
  margin-left: 2em;
  p {
    text-align: center;
    font-size: 0.8em;
    padding-top: 0.5em;
  }
`
