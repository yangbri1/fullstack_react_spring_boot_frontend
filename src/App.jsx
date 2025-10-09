// import Routes, Route from react-router-dom library
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'

// take in all the pages
// Aside: if didn't export function as default -- need to destructure within file where it's being imported
import Home from './pages/Home.jsx';
// import custom <Footer> component
import Footer from './components/Footer.jsx';

/* Note: 'App()' is the base root component */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
