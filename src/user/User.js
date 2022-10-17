export default function User({user, userButton}) {
    return (
        <div>
            {user.id} {user.name}
            <button onClick={()=>{
                userButton(user)
            }}>User details</button>
        </div>
    );
}