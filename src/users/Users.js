import React, {useState, useEffect} from 'react';
import User from "../user/User";

export default function Users() {

    let [users,setUsers] = useState([]);
    let [user, setUser] = useState({})


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    });

    let userButton = (user) => {
        setUser(user)

    }
    return (
        <div>
        <h2>Posts</h2>
            {user.id && <div>{user.id} {user.username} </div>}
            {users.map((user,index) => <User key={index} user={user} userButton={userButton}/>)}
        </div>
    );
}
