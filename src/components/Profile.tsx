import { useState } from "react"
import type { User } from "../types/user.types"
import AlterField from "./AlterField"
import './styles/Profile.css'

function Profile({ user, login }: { user: User, login: string }) {

  const [showUser, setShowUser] = useState<User>(user)

  return (
    <>
      <div id="profile-container">
        <div id='profile-data-container'>
          <img src={showUser.avatar} alt='avatar'></img>
          <p>First name: {showUser.fname}</p>
          <p>Second name: {showUser.sname}</p>
          <p>Age: {showUser.age}</p></div>
        <div id="profile-data-alter-container">
          <AlterField fieldName="avatar" login={login} inputType="file" setUser={setShowUser} />
          <AlterField fieldName="fname" login={login} inputType="text" setUser={setShowUser} />
          <AlterField fieldName="sname" login={login} inputType="text" setUser={setShowUser} />
          <AlterField fieldName="age" login={login} inputType="number" setUser={setShowUser} />
        </div>
      </div>
    </>
  )
}

export default Profile