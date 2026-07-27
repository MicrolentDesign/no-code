import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'lenis/dist/lenis.css'
import './styles/tokens.css'
import './styles/base.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/no-code">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
