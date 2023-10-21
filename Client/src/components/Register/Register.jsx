import "../Login/Login.css"
import React, { useState } from "react"
import { Navigate } from "react-router-dom"

function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

  const handleOnChange = (event) => {
    event.target.type == "password"
      ? setPassword(event.target.value)
      : setUsername(event.target.value)
  }
  const register = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      })
      if (response.ok) {
        setPassword("")
        setUsername("")
        alert("Registration successful")
        setRedirect(true)
      }
      else{
        console.log("Registration failed")
      }
    } catch (error) {
      console.log(error)
    }
  }
  if (redirect) return <Navigate to={"/"} />
  return (
    <form onSubmit={register}>
      <h2>Register </h2>
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
      <button>Register</button>
    </form>
  )
}

export default RegisterPage
