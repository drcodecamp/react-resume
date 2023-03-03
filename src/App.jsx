import './assets/Square-Regular.otf'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreationPage from './pages/EditorPage.jsx'
import RootLayout from './pages/RootLayout'

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
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
