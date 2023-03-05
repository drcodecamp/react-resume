import React, { useState } from 'react'
import styled from 'styled-components'
import Loader from '../components/Loader.jsx'
import CustomForm from '../components/shared/CustomForm.jsx'
import { Button, message } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import instructions_image from '../assets/instructions.webp'
import { useDispatch } from 'react-redux'
import { displayRenderer, toggleRenderer } from '../store/resumeSlice.js'

const DownloadWidget = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const printAsPdf = () => {
    try {
      setIsLoading(true)
      dispatch(displayRenderer())
      setTimeout(() => {
        window.print()
        setTimeout(() => {
          const h = window.innerWidth
          if (h <= 1300) {
            dispatch(toggleRenderer())
          }
        }, 100)
      }, 1000)
    } catch (err) {
      message.error('error converting into pdf').then((r) => {
        //
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Container>
      <CustomForm>
        <DownloadSection>
          {isLoading ? (
            <Loader />
          ) : (
            <Button
              onClick={printAsPdf}
              type="primary"
              icon={<DownloadOutlined />}
              size="medium"
            >
              Download as PDF
            </Button>
          )}
        </DownloadSection>
        <BoldInstructions>
          On the upcoming screen, make sure you put this options:
        </BoldInstructions>
        <List>
          <li>Destination: Save as PDF</li>
          <li>Pages: Custom 1 Page</li>
          <li>Layout: Portrait</li>
          <li>Paper Size: A4</li>
          <li>Pages per Sheet: 1</li>
          <li>Margins: None</li>
          <li>Scale: Default</li>
          <li>Options: Background grapchics</li>
        </List>
        <a href={instructions_image} target="_blank">
          <img src={instructions_image} alt="How to" width="100%" />
        </a>
      </CustomForm>
    </Container>
  )
}
const List = styled.ul`
  padding-left: 2em;
  li {
    list-style: square;
    padding: 0.3em;
  }
`

const BoldInstructions = styled.p`
  font-weight: bolder;
  font-size: 1.25em;
  padding: 1em;
`
const DownloadSection = styled.div`
  display: flex;
  padding: 1em;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex: 1;
`

export default DownloadWidget
