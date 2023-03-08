import './assets/Square-Regular.otf'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreationPage from './pages/EditorPage.jsx'
import RootLayout from './pages/RootLayout'
import ChooseNewTemplate from './pages/ChooseNewTemplate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'editor',
        children: [{ index: true, element: <CreationPage /> }],
      },
      {
        path: 'chooseTemplate',
        children: [{ index: true, element: <ChooseNewTemplate /> }],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
