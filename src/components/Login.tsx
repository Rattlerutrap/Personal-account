import { useState } from "react"
import Profile from "./Profile"

function Login()
{
    const [login, setLogin] = useState('')

    function handleLogin()
    {
        const input = document.querySelector('#login') as HTMLInputElement | null
        if (input)
        {
            setLogin(input.value)
        }
    }

    return (
        <>
            <input placeholder="Login" id="login" type="text" required/>
            <input placeholder="Password" id="password" type="password" required />
            <button onClick={handleLogin}>Подтвердить</button>
            <Profile login={login} />
        </>
    )
}

export default Login