import Controller from '../components/ResumeOptions.jsx'
import Renderer from '../widgets/Renderer.jsx'
import { useSelector } from 'react-redux'

const CreationPage = () => {
  const { display } = useSelector((state) => state.ResumeStore)

  return (
    <>
      <Controller />
      {display.renderer && <Renderer />}
    </>
  )
}

export default CreationPage
