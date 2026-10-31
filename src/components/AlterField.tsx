import { useAppDispatch } from "../store/hooks";
import { updateUser } from "../store/authSlice";
import EditProfile from "../services/EditProfile";
import type { User } from "../types/user.types";
import './styles/AlterField.css'

export default function AlterField({ fieldName, login, inputType }: { fieldName: keyof User, login: string, inputType: string }) {
  const dispatch = useAppDispatch()
  const inputId = `${fieldName}-alter-input`
  function handleAlterButton() {
    const inputAlter: HTMLInputElement | null = document.querySelector(`#${inputId}`)

    if (inputAlter) {
      let updatedUser = null
      if (inputType === "file" && inputAlter.files && inputAlter.files[0]) {
        const file = inputAlter.files[0]
        const reader = new FileReader()

        reader.onload = (e) => {
          if (e.target?.result) {
            updatedUser = EditProfile(login, fieldName, e.target.result as string);
            if (updatedUser) {
              dispatch(updateUser(updatedUser))
            }
          }
        };

        reader.readAsDataURL(file);
      } else {
        updatedUser = EditProfile(login, fieldName, inputAlter.value);
        if (updatedUser) {
          dispatch(updateUser(updatedUser))
        }
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