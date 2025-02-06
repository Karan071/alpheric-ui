import './App.css'
import HomePage from './Pages/HomePage'
import Navbar from './Layouts/Navbar'
import Design from './Pages/Design'
import Questionaire from './Pages/Questionaire'
import Hire from "./Pages/Hire"
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Vision from './Pages/VisionIntoReality/Vision'
import Pilot from './Pages/VisionIntoReality/Pilot'
import Next from './Pages/VisionIntoReality/Next'
function App() {

  return (
    <>
      <Navbar />
      <div>
        <HomePage />
        <Design/>
        <Questionaire/>
        <Hire/>
        <Vision/>
        <Pilot/>
        <Next/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
