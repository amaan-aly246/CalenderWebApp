import React from "react"
import "../Login/Login.css"
function LoginPage() {
  return (
    <form action="">
      <h2>login </h2>
      <input type="text"  placeholder="username" />
      <input type="password"  placeholder=" password" />
      <button
        onClick={(e) => {
          e.preventDefault()
        }}>
        Login
      </button>
    </form>
  )
}

export default LoginPage