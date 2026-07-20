import { useState } from "react"
import Profile from "./Profile"
import { useAuth } from "../hooks/useAuth"




function Login()
{
    const {user, login, logout} = useAuth()
    const [isError, setIsError] = useState<boolean>(false)

    function handleLogin()
    {
        const loginInput : HTMLInputElement | null = document.querySelector('#login')
        const passwordInput : HTMLInputElement | null = document.querySelector('#password')
        if (loginInput?.value && passwordInput?.value)
        {
            setIsError(!login({login: loginInput.value, password: passwordInput.value}))
        }
    }


    return (
        <>
            <input placeholder="Login" id="login" type="text" required/>
            <input placeholder="Password" id="password" type="password" required />
            <button onClick={handleLogin}>Confirm</button>
            {isError ? <p>Wrong login or password!</p> : user ? <Profile {...user}/> : <p>Enter login && password</p>}
        </>
    )
}

export default Login