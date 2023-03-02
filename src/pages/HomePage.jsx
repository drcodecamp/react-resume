import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <Container>
      <Link to="/cv">Click Here to create CV</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  flex: 1;
  color: white;
`

export default HomePage
