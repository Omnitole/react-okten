import './simpsons.css'
function Simpson(props){
    let {name,picture,desc} = props
    return <div className={"simpson"}>
        <h2>Name is {name}</h2>
        <p>{desc}</p>
        <img src={picture} alt=""/>
    </div>
}
export default Simpson