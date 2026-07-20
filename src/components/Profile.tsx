import type { User } from "../types/user.types"

function Profile(user: User)
{
    return (
        <>
            <div>
                <img src={user.avatar} alt='avatar'></img>
                <p>First name: {user.fname}</p>
                <p>Second name: {user.sname}</p>
                <p>Age: {user.age}</p>
            </div>
        </>
    )
}

export default Profile