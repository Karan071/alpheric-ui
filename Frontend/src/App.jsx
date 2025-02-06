import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import Navbar from './Layouts/Navbar'
import Design from './Pages/Design'
import Questionaire from './Pages/Questionaire'
import Hire from "./Pages/Hire"
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
function App() {

  return (
    <>
      <Navbar />
      <div>
        <HomePage />
        <Design/>
        <Questionaire/>
        <Hire/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
