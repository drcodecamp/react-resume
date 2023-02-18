import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { persist, store } from '../store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function LoadingMarkup() {
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<LoadingMarkup />} persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
)
