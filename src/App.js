import {useForm} from "react-hook-form";

function App() {

  let {register,handleSubmit} = useForm()
  let submit = (obj) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'Post',
      body: JSON.stringify(obj),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
        .then(response => response.json())
        .then(result => console.log(result))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name")}/>
        <input type="text"{...register("username")}/>
        <button> Submit user </button>

      </form>

    </div>
  );
}

export default App;
