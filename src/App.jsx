// import Routes, Route from react-router-dom library
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'

// take in all the pages
// Aside: if didn't export function as default -- need to destructure within file where it's being imported
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs/Jobs.jsx';
import Moderators from './pages/Moderators/Moderators.jsx';
import NotFound from './pages/NotFound.jsx';

import CreateJob from './pages/Jobs/CreateJob.jsx';
// bring in navigation links to App.jsx rather than individual pages (more efficient & App.jsx is the brain of the operation)
import NavBar from './components/NavBar.jsx';
// import custom <Footer> component
import Footer from './components/Footer.jsx';
/* Note: 'App()' is the base root component */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Note: <NavBar /> component is OUTSIDE of <Routes> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs/add_job' element={<CreateJob />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/moderators' element={<Moderators />} />
        {/* catch all route for any unforeseen URL paths (should be last in order otw may interfere w/ other routes) */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    
      <Footer />
    </>
  )
}

export default App
