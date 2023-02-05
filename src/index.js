import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/login.css"
import "./assets/css/sidebar.css"
import "./assets/css/fonts.css"
import "./assets/css/main.css"
import "./assets/css/navbar.css"
import "./assets/css/home.css"
import "./assets/css/dashboard.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
