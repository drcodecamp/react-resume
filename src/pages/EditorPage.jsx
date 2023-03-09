import { useSelector } from 'react-redux'
import Renderer from '../widgets/Renderer.jsx'
import Editor from '../components/Editor.jsx'
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
      <Editor />
      <Renderer />
    </>
  )
}

export default EditorPage
