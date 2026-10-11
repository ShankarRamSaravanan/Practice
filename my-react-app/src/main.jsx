import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyCar from './App.jsx'


const appProp = ["Shankar", "Ram","Saravanan"]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyCar color="red" Propss={appProp} />
  </StrictMode>,
)

