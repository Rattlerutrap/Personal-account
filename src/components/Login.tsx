import { useState } from "react"
import Profile from "./Profile"
import { useAuth } from "../hooks/useAuth"




function Login() {
  const { user, login, logout } = useAuth()
  const [isError, setIsError] = useState<boolean>(false)

  function handleLogin() {
    const loginInput: HTMLInputElement | null = document.querySelector('#login')
    const passwordInput: HTMLInputElement | null = document.querySelector('#password')
    if (loginInput?.value && passwordInput?.value) {
      setIsError(!login({ login: loginInput.value, password: passwordInput.value }))
    }
  }

  function handleLogout() {
    setIsError(false)
    logout()
  }


  return (
    <>
      <div id="login-container">
      <input className="login" placeholder="Login" id="login" type="text" required />
      <input className="login" placeholder="Password" id="password" type="password" required />

      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      {isError ? <p>Wrong login or password!</p> : user ? <Profile {...user} /> : <p>Enter login && password</p>}
      </div>
    </>
  )
}

export default Login