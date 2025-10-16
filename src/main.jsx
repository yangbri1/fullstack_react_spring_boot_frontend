/* (2nd) Note: below code is responsible for rendering top-level code related to DOM */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// "to give illusion of pages"
import { BrowserRouter } from 'react-router-dom';

// 'ReactDOM.createRoot()' get the DOM by using '.getElementById()' looking for #id of root (base)
// ... afterwards call '.render()' method to render <App /> in the DOM
// Note: In the <App /> component is where we can write the code --- aka 'App.jsx'
createRoot(document.getElementById('root')).render(
  // 1. npm i react-router-dom
  // 2. import "BrowserRoute" to main.jsx
  // 3. wrap <App /> component inside main.jsx (or index.js dep on framework) w/ <BrowserRouter> to allow children access to it
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
