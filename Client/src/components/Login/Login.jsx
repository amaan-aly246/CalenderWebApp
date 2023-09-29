import React, { useState } from "react"

import "../Login/Login.css"
function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
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
      })
      setPassword("")
      setUsername("")
      if (response.status !== 200) {
        alert(" Invalid credentials")
      } else {
        alert("Login successful")
        setTimeout(() => {
          window.location.href = "/"
        }, 900)
      }
    } catch (error) {
      console.log(error)
    }
  }
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
