import "../Login/Login.css"
import React, { useState } from "react"
function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
      setPassword("")
      setUsername("")
      if (response.status !== 201) {
        alert("Registration failed")
      } else {
        alert("Registration successful")
        setTimeout(() => {
          window.location.href = "/"
        }, 900)
      }
    } catch (error) {
      console.log(error)
    }
  }
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
