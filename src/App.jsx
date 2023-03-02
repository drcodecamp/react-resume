import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './constants/GlobalStyle.jsx'
import Controller from './components/ResumeOptions.jsx'
import AppHeader from './components/AppHeader.jsx'
import Renderer from './widgets/Renderer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  forceNarrowHeader,
  setThemeColor,
  toggleNarrowHeader,
  toggleRenderer,
} from './store/resumeSlice.js'
import './assets/Square-Regular.otf'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreationPage from './pages/CreationPage'
import RootLayout from './pages/RootLayout'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // <-- main app is here
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'cv',
        children: [
          { index: true, element: <CreationPage /> },
          { path: ':id', element: <CreationPage /> },
        ],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
