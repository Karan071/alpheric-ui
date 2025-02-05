import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import Navbar from './Layouts/Navbar'
import Design from './Pages/Design'
import Questionaire from './Pages/Questionaire'
import Hire from "./Pages/Hire"
import Contact from './Pages/Contact'
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
      </div>
    </>
  )
}

export default App
