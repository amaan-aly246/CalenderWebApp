import react from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"

import LoginPage from "./components/Login/Login"
import Layout from "./components/Layout/Layout"
import RegisterPage from "./components/Register/Register"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}></Route>
      <Route path="login" element={<LoginPage></LoginPage>}></Route>
      <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
    </Routes>
  )
}

export default App

{
  /* <LoginPage></LoginPage>  */
}
