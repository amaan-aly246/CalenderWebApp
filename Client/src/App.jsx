import react from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import CalenderPart from './components/CalenderPart/CalenderPart/CalenderPart'
import EventPart from './components/CalenderPart/EventPart/EventPart'
function App() {


  return (
   <main>
    <CalenderPart/>
    <EventPart/>
   </main>
  )
}

export default App
