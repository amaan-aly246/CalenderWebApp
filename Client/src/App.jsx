import react from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import EventCreate from "./components/EventCreate/EventCreate"
import LoginPage from "./components/Login/Login"
import Layout from "./Layout/Layout"
import RegisterPage from "./components/Register/Register"
function App() {
  return <EventCreate></EventCreate>
}

export default App





 // <Routes>
    //   <Route path="/" element={<EventCreate></EventCreate>} />
    // </Routes>




//   <Route path="/" element={<Layout></Layout>}></Route>
//   <Route path="login" element={<LoginPage></LoginPage>}></Route>
//   <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
//Client\src\components\EventCreate.jsx\EventCreate.