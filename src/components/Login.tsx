import { useState } from "react"
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { loggedIn, logout, selectUser } from '../store/authSlice'
import { authService } from '../services/AuthServices'
import './styles/Login.css'


function Login() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const [isError, setIsError] = useState<boolean>(false)

  function handleLogin() {
    const loginInput: HTMLInputElement | null = document.querySelector('#login')
    const passwordInput: HTMLInputElement | null = document.querySelector('#password')
    if (!loginInput?.value || !passwordInput?.value) return

    const foundUser = authService.login(loginInput.value, passwordInput.value)
    if (foundUser) {
      dispatch(loggedIn({ user: foundUser, login: loginInput.value }))
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  function handleLogout() {
    setIsError(false)
    dispatch(logout())
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
        {isError ? <p>Wrong login or password!</p> : user ? <p> Welcome, {user.fname}! </p> : <p>Enter login && password</p>}
      </div>
    </>
  )
}

export default Login