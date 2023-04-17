import './assets/Square-Regular.otf'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage.jsx'
import RootLayout from './pages/RootLayout'
import TemplateSelectionPage from './pages/TemplateSelectionPage'
import Demo from './Demo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'editor',
        children: [{ index: true, element: <ResumePage /> }],
      },
      {
        path: 'new',
        children: [{ index: true, element: <TemplateSelectionPage /> }],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
