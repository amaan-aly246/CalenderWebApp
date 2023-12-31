import "./App.css"
import React,{useState , useContext} from "react"
import { Route, Routes } from "react-router-dom"
import EventCreate from "./components/EventCreate/EventCreate"
import LoginPage from "./components/Login/Login"
import Layout from "./Layout/Layout"
import RegisterPage from "./components/Register/Register"
import { DataProvider } from "../../Client/src/Context/DataContext"

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout></Layout>}></Route>
          <Route path="login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="register"
            element={<RegisterPage></RegisterPage>}></Route>
          <Route path="addEvent" element={<EventCreate></EventCreate>} />
        </Routes>
      </DataProvider>
    </div>
  )
}

export default App
