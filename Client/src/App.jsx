import react from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import CalenderPart from './components/CalenderPart/CalenderPart'
import EventPart from './components/EventPar/EventPart'
function App() {


  return (
   <main>
    <CalenderPart/>
    <EventPart/>
   </main>
  )
}

export default App
