import React from 'react'
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>

   <BrowserRouter> 
       <Navbar />
      <Routes>
       <Route path='/' element={<HomePage />}/>
       <Route path='/about' element={<AboutPage />}/>
       <Route path='/projects' element={<ProjectsPage />}/>
       <Route path='/resume' element={<ResumePage />}/>
     </Routes>
   </BrowserRouter>
  </>
  )
}

export default App