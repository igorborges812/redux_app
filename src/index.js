import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import Home from './Home'
import Routes from './routes/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Routes />

    {/* <App />
    <Home /> */}
  </React.StrictMode>
)
