import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Loader from '../components/Loader.jsx'
import CustomForm from '../components/shared/CustomForm.jsx'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { toJpeg, toPng } from 'html-to-image'

const DownloadWidget = ({ documentRef }) => {
  const [isLoading, setIsLoading] = useState(false)
  const printAsPdf = () => {
    try {
      setIsLoading(true)
      window.print()
    } catch (err) {
      alert('issue with document printing')
    } finally {
      setIsLoading(false)
    }
  }
  const downloadAsJPG = useCallback(() => {
    setIsLoading(true)
    if (documentRef.current === null) {
      return
    }
    toJpeg(documentRef.current, {
      pixelRatio: 2,
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
      .finally(() => {
        setIsLoading(false)
      })
  }, [documentRef])
  const downloadAsPng = useCallback(() => {
    setIsLoading(true)
    toPng(documentRef.current, {
      pixelRatio: 2,
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
      .finally(() => {
        setIsLoading(false)
      })
  }, [documentRef])
  return (
    <Container>
      <CustomForm>
        <DownloadSection>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Button
                onClick={printAsPdf}
                type="primary"
                icon={<DownloadOutlined />}
                size="medium"
              >
                Download as PDF
              </Button>
              <Button
                onClick={downloadAsPng}
                type="primary"
                icon={<DownloadOutlined />}
                size="medium"
              >
                Download as PNG
              </Button>
              <Button
                onClick={downloadAsJPG}
                type="primary"
                icon={<DownloadOutlined />}
                size="medium"
              >
                Download as JPG
              </Button>

              {/*              <Download onClick={printAsPdf}>Download as .pdf</Download>
              <Download onClick={downloadAsPng}>Download as .png</Download>
              <Download onClick={downloadAsJPG}>Download as .jpg</Download>*/}
            </>
          )}
        </DownloadSection>
      </CustomForm>
    </Container>
  )
}
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
