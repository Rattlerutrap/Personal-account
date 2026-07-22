import { useState } from "react"
import type { User } from "../types/user.types"
import AlterField from "./AlterField"
import './styles/Profile.css'

function Profile({user, login} : {user: User, login: string}) {

  const [showUser, setShowUser] = useState<User>(user)

  return (
    <>
      <div id="profile-container">
        <img src={showUser.avatar} alt='avatar'></img><AlterField fieldName="avatar" login={login} inputType="file" setUser={setShowUser} />
        <p>First name: {showUser.fname}</p><AlterField fieldName="fname" login={login} inputType="text" setUser={setShowUser} />
        <p>Second name: {showUser.sname}</p><AlterField fieldName="sname" login={login} inputType="text" setUser={setShowUser} />
        <p>Age: {showUser.age}</p><AlterField fieldName="age" login={login} inputType="number" setUser={setShowUser} />
      </div>
    </>
  )
}

export default Profile