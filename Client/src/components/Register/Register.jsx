import React from "react"
import "../Login/Login.css"
function RegisterPage() {
  return (
    <form action="">
      <h2>Register </h2>
      <input type="text"  placeholder="username" />
      <input type="password"  placeholder=" password" />
      <button
        onClick={(e) => {
          e.preventDefault()
        }}>
        Register
      </button>
    </form>
  )
}

export default RegisterPage