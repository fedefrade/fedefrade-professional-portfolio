import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { publicUrl } from './utils/publicUrl'

const favicon = document.querySelector("link[rel='icon']")
if (favicon) favicon.href = publicUrl('favicon.svg')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
