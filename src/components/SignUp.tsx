import { useState } from "react"
import { CreateUser } from "../services/CreateUser"
import './styles/SignUp.css'

function SignUp() {
  const [userCreated, setUserCreated] = useState(false)

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const login = formData.get('login')
    const password = formData.get('password')
    const age = Number(formData.get('age'))
    const fname = formData.get('fname')
    const sname = formData.get('sname')

    if (typeof login === 'string' &&
      typeof password === 'string' &&
      typeof age === 'number' &&
      typeof fname === 'string' &&
      typeof sname === 'string') {
      setUserCreated(CreateUser({ password: password, login: login },
        { age: age, fname: fname, sname: sname }))
      e.currentTarget.reset
    }

  }


  return (
    <>
      <div id="sign-in-window">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <label>Login: 
          <input className="input" id="login" name="login" />
          </label>

          <label htmlFor="new-password">Password: 
          <input className="input" type="password" id="new-password" name="password" required />
          </label>

          <label htmlFor="age">Age: 
          <input className="input" id="age" type="number" name="age" required />
          </label>

          <label htmlFor="fname">First name: 
          <input className="input" id="fname" name="fname" required />
          </label>

          <label htmlFor="sname">Second name: 
          <input className="input" name="sname" required />
          </label>

          <button type="submit">Submit</button>
        </form>
        {userCreated && <p>User created</p>}
      </div>
    </>
  )
}

export default SignUp