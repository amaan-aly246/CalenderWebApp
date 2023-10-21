import React, { useState, useContext, useEffect } from "react"
import { DataContext } from "../../Context/DataContext"
import "../Login/Login.css"
import { Navigate } from "react-router-dom"
function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setIsLogin, isLogin } = useContext(DataContext)
  const [redirect, setRedirect] = useState(false)

  const handleOnChange = (event) => {
    event.target.type == "password"
      ? setPassword(event.target.value)
      : setUsername(event.target.value)
  }
  const Login = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
      setPassword("")
      setUsername("")
      if (response.status == 200) {
        alert("Login successful")
        setIsLogin(true)
        setRedirect(true)
      } else {
        alert(" Invalid credentials")
      }
    } catch (error) {
      console.log(error)
    }
  }

 

  if (redirect) return <Navigate to={"/"}></Navigate>
  return (
    <form onSubmit={Login}>
      <h2>Login </h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleOnChange}
      />
      <input
        type="password"
        placeholder=" password"
        value={password}
        onChange={handleOnChange}
      />
      <button>Login</button>
    </form>
  )
}

export default LoginPage

