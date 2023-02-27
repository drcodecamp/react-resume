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
          When download as PDF, Make sure you put this OPTIONS on the print
          window!
        </BoldInstructions>
        <a href={instructions_image} target="_blank">
          <img src={instructions_image} alt="How to" width="100%" />
        </a>
      </CustomForm>
    </Container>
  )
}
const BoldInstructions = styled.p`
  font-weight: bolder;
  font-size: 1.5em;
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
