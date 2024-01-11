import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // Global Css
import MyLangchain from './Experiments/MyLangchain.jsx'
 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App/>
    {/* <MyLangchain /> */}
  </React.StrictMode>,
)




