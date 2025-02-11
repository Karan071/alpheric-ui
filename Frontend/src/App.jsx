import './App.css'
import HomePage from './Pages/HomePage'
import Navbar from './Layouts/Navbar'
import Design from './Pages/Design'
import Questionaire from './Pages/Questionaire'
import Hire from "./Pages/Hire"
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Vision from './Pages/VisionIntoReality/Vision'
import Next from './Pages/VisionIntoReality/Next'
import CustomerPage from "./Pages/CustomerPage"
import Pilotpage from './Pages/Pilot/PilotPage'
import SolutionPage from './Pages/Solutions/SolutionPage'
function App() {

  return (
    <>
      <Navbar />
      <div>
        <HomePage />
        <Design/>
        <Questionaire/>
        <Vision/>
        <Pilotpage/>
        <Next/>
        <CustomerPage/>
        <SolutionPage/>
        <Hire/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
