import { useSelector } from 'react-redux'
import Renderer from '../components/renderer/Renderer.jsx'
import Editor from '../components/editor/Editor.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ResumePage = () => {
  const navigate = useNavigate()
  const selectedDocumentId = useSelector(
    (state) => state.resume.selectedDocumentId
  )
  useEffect(() => {
    if (!selectedDocumentId) {
      navigate({
        pathname: '/',
      })
    }
  }, [selectedDocumentId])

  if (!selectedDocumentId) {
    return <div>No Document found!</div>
  }
  return (
    <>
      <Editor />
      <Renderer />
    </>
  )
}

export default ResumePage
