import { useState } from "react"
import Profile from "./Profile"
import { useAuth } from "../hooks/useAuth"
import './styles/Login.css'




function Login() {
  const { user, login, logout } = useAuth()
  const [isError, setIsError] = useState<boolean>(false)
  const [loginValue, setLoginValue] = useState('')

  function handleLogin() {
    const loginInput: HTMLInputElement | null = document.querySelector('#login')
    const passwordInput: HTMLInputElement | null = document.querySelector('#password')
    if (loginInput?.value && passwordInput?.value) {
      setIsError(!login({ login: loginInput.value, password: passwordInput.value }))
      setLoginValue(loginInput.value)
    }
  }

  function handleLogout() {
    setIsError(false)
    logout()
  }

  function handleExampleUser() {
    const loginInput: HTMLInputElement | null = document.querySelector('#login')
    const passwordInput: HTMLInputElement | null = document.querySelector('#password')
    if (loginInput && passwordInput)
    {
      loginInput.value = 'example@example.com'
      passwordInput.value ='example'
    }
  }

  return (
    <>
      <div id="login-container">
        <input className="login" placeholder="Login" id="login" type="text" required />
        <input className="login" placeholder="Password" id="password" type="password" required />

        <div>
          <button onClick={handleLogin}>Log in</button>
          <button onClick={handleLogout}>Log out</button>
          <button onClick={handleExampleUser}>Example user</button>
        </div>
        {isError ? <p>Wrong login or password!</p> : user ? <p>Welcome!</p> : <p>Enter login && password</p>}
      </div>
      {!isError && user && <Profile user={user} login={loginValue} />}
    </>
  )
}

export default Login