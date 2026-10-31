import { useAppSelector } from '../store/hooks'
import { selectUser, selectLogin } from '../store/authSlice'
import AlterField from "./AlterField"
import './styles/Profile.css'

function Profile() {

  const user = useAppSelector(selectUser)
  const currentLogin = useAppSelector(selectLogin)
  
  return (
    <>
    {user && currentLogin &&
      <div id="profile-container">
        <div id='profile-data-container'>
          <img src={user.avatar} alt='avatar'></img>
          <p>First name: {user.fname}</p>
          <p>Second name: {user.sname}</p>
          <p>Age: {user.age}</p></div>
        <div id="profile-data-alter-container">
          <AlterField fieldName="avatar" login={currentLogin} inputType="file" />
          <AlterField fieldName="fname" login={currentLogin} inputType="text"/>
          <AlterField fieldName="sname" login={currentLogin} inputType="text"/>
          <AlterField fieldName="age" login={currentLogin} inputType="number"/>
        </div>
      </div>
    }
    </>
  )
}

export default Profile