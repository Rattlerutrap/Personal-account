import type React from "react";
import { EditUserField } from "../services/EditProfile";
import type { User } from "../types/user.types";
import { users } from "../users/Users";

export default function AlterField({ fieldName, login, inputType, setUser }: { fieldName: keyof User, login: string, inputType: string, setUser: React.Dispatch<React.SetStateAction<User>> }) {
  const inputId = `${fieldName}-alter-input`
  function handleAlterButton() {
    const user = users.get(login)
    const inputAlter: HTMLInputElement | null = document.querySelector(`#${inputId}`)

    if (user && inputAlter) {
      if (inputType === "file" && inputAlter.files && inputAlter.files[0]) {
        const file = inputAlter.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
          if (e.target?.result) {
            const updatedUser = EditUserField(user.user, fieldName, e.target.result as string);
            users.set(login, { ...user, user: updatedUser });
            setUser(updatedUser);
          }
        };

        reader.readAsDataURL(file);
      } else {
        const updatedUser = EditUserField(user.user, fieldName, inputAlter.value);
        users.set(login, { ...user, user: updatedUser });
        setUser(updatedUser);
      }
    }
  }
  return (
    <>
      <div className="alter-field-container">
        <input type={inputType} required id={inputId} />
        <button onClick={handleAlterButton} className="alterUserFieldButton">Alter field</button>
      </div>
    </>
  )
}