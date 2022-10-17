export default function User({user,elevate}) {

    const onclick = () => {
      elevate(user.id)
    }

    return (
        <div>
        <h2>Id - {user.id}, name - {user.name}</h2>
        <button onClick={onclick}>User details</button>
        </div>
    );
}