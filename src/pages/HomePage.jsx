import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homepageImage from '../assets/homepage-image.webp'
import addCvImage from '../assets/addcv.png'
const HomePage = () => {
  const createAction = (
    <Action>
      <Link to="cv">
        <ActionImage>
          <img src={addCvImage} alt="resume creator icon"></img>
        </ActionImage>
        <p>צור חדש</p>
      </Link>
    </Action>
  )
  const actions = [createAction] //add more actions here

  return (
    <Container>
      <ImageContainer>
        <img src={homepageImage}></img>
      </ImageContainer>
      <TextContainer>
        <h1>יצירת קורות חיים</h1>
        <h3>צרו קורות חיים בהתאמה אישית!</h3>
        <p>קוח שיבליטו אתכם ויצעידו אתכם רמה אחת מעל כולם!</p>
      </TextContainer>
      <ActionsContainer>{actions}</ActionsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  align-items: center;
  padding-top: 8em;
  margin: 0 auto;
  height: fit-content;
  align-items: center;
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
    width: 30em;
  }

  @media (max-width: 500px) {
    img {
      width: 8em;
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

    p {
      font-size: 1.2em;
    }
`

const ActionsContainer = styled.div`
  grid-area: actions;
  display: flex;
  align-self: flex-start;

  > *:not(:first-child) {
  }
`
export default HomePage

const ActionImage = styled.div`
  display: inline-block;
  padding: 1em 0.8em;
  background-color: #2b292f;
  border-radius: 10%;

  img {
    width: 3em;
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
