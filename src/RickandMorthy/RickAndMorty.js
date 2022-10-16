
function rickAndMorty(props) {
    let {id,name,status,species,gender,image} = props
    return (
        <div>
        <h2>{id} {name}</h2>
        <p>Status - {status}, species - {species}, gender - {gender}</p>
        <img src={image} alt={name}/>
    </div>
    )
}

export default rickAndMorty