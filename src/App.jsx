import './App.css'
import LandingPage from './components/LandingPage'
import Breakdown from './components/Breakdown'
import Donate from './components/Donate'
import EmergencyActs from './components/EmergencyActs'
import DeclareEmergency from './components/DeclareEmergency'
import Latest from './components/Latest'
import Newsletter from './components/Newsletter'
import Supporters from './components/Supporters'
import Footer from './components/Footer'
import Countries from './components/Countries'
import ScrollBar from './components/ScrollBar'
import { useEffect } from 'react'
import Dropdown from './components/Dropdown'

function App() {

  return (
    <>
      <ScrollBar />
      <Dropdown/>
      <div className='content'>
        <LandingPage />
        
        <Breakdown />
        <Donate />
        <EmergencyActs />
        <DeclareEmergency />
        <Latest />
        <Newsletter />
        <Supporters />
        <Countries />
        
      </div>
      <Footer />
    </>
  )
}

export default App
