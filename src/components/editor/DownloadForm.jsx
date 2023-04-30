import React, { useState } from 'react'
import styled from 'styled-components'
import Loader from '../shared/Loader.jsx'
import CustomForm from '../shared/CustomForm.jsx'
import { Button, message } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import instructions_image from '../../assets/instructions.webp'
import { useDispatch } from 'react-redux'
import { displayRenderer, toggleRenderer } from '../../store/resumeSlice.js'

const DownloadForm = () => {
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
        // r
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Container>
      <CustomForm>
        <BoldInstructions>
          BEFORE you click "Download", keep in mind, you MUST! setup your print
          options in the print window like this or else the pdf will be BROKEN:
        </BoldInstructions>
        <List>
          <li>
            Destination: <BoldInstructions>Save as PDF</BoldInstructions>
          </li>
          <li>
            Pages: <BoldInstructions> Custom 1 Page</BoldInstructions>
          </li>
          <li>
            Layout: <BoldInstructions> Portrait</BoldInstructions>{' '}
          </li>
          <li>
            Paper Size: <BoldInstructions> A4</BoldInstructions>{' '}
          </li>
          <li>
            Pages per Sheet: <BoldInstructions> 1</BoldInstructions>{' '}
          </li>
          <li>
            Margins: <BoldInstructions> None</BoldInstructions>{' '}
          </li>
          <li>
            Scale: <BoldInstructions>Default</BoldInstructions>{' '}
          </li>
          <li>
            Options: <BoldInstructions> Background graphics</BoldInstructions>{' '}
          </li>
        </List>

        <p>
          If you dont see all this options, in the Print window Click "MORE
          SETTINGS".
        </p>
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
  color: red;
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

export default DownloadForm
