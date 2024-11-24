import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <App></App>

)
