import { useSelector } from 'react-redux'
import {
  selectDisplaySettings,
  selectFullResume,
} from '../store/resumeSlice.js'
import Renderer from '../widgets/Renderer.jsx'
import Controller from '../components/ResumeOptions.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const EditorPage = () => {
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
      <Controller />
      <Renderer />
    </>
  )
}

export default EditorPage
