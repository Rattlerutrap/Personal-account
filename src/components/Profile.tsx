let users : User[] = 
[
    { id: 1, avatar: 'null', fname: 'Anna', sname: 'Smith', age: 18, login: 'anna1984@example.com', password: 'annasmith1234' }
]

class User
{
    id: number;
    avatar: string | undefined;
    fname: string;
    sname: string;
    age: number;
    login: string;
    password: string;

    private static nId = 1
    constructor(age: number, fname: string, sname: string, login: string, password: string) 
    {
        this.id = User.nId++
        this.avatar = undefined
        this.fname = fname
        this.sname = sname
        this.age = age
        this.login = login
        this.password = password
    }

}



function findUserByLogin(login: string) : User | null
{
    for (let i = 0; i < users.length; i++) 
    {
        if (users[i].login === login)
        {
            return users[i]
        }
    }
    return null
}

function Profile({login}: { login: string})
{
    const user : User | null = findUserByLogin(login)

    return (
        <>
            { user ? (<div>
                <img src={user.avatar} alt='avatar'></img>
                <p>First name: {user.fname}</p>
                <p>Second name: {user.sname}</p>
                <p>Age: {user.age}</p>
            </div>) : <p>No user with such login</p> }
        </>
    )
}

export default Profile