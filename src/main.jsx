import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherProvider } from './Context/Weather.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <WeatherProvider> <App/></WeatherProvider>
   
  </React.StrictMode>,
)
