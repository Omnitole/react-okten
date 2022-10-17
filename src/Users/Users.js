import {useEffect,useState} from "react";
import {getUsers} from "../services";
import User from "../User/User";

export default function Users({elevate}) {

    const [users,setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    },[])
    return (
        <div>

            {
                users.map((user,index) => <User
                    elevate={elevate}
                    key={index}
                    user={user}/>)
            }

        </div>
    );
}

