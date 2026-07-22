import type React from "react";
import { EditUserField } from "../services/EditProfile";
import type { User } from "../types/user.types";
import { users } from "../users/Users";

export default function AlterField({fieldName, login, inputType, setUser} : {fieldName: keyof User, login: string, inputType: string, setUser : React.Dispatch<React.SetStateAction<User>>})
{
  const inputId = `${fieldName}-alter-input`
  function handleAlterButton()
  {
    const user = users.get(login)
    const inputAlter : HTMLInputElement | null = document.querySelector(`#${inputId}`)
    console.log(inputId); 
    
    if (user && inputAlter)
    {
      const updatedUser = EditUserField(user.user, fieldName, inputAlter.value)
      users.set(login, {...user, user: updatedUser})
      console.log(updatedUser);
      
      setUser(updatedUser)
    }
  } 
  return (
    <>
      <input type={inputType} required id={inputId}/>
      <button onClick={handleAlterButton} className="alterUserFieldButton">Alter field</button>
    </>
  )
}