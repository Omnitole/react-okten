
import './App.css';
import Users from "./Users/Users";
import {getUserPosts} from "./services";
import {useState} from "react";
import Posts from "./Posts/Posts";


function App() {
  let [posts,setPosts] = useState([])
  const elevate = (id) => {
    getUserPosts(id).then(value => setPosts([...value]));
  }


  return (
    <div>
      <Posts posts={posts}/>
    <Users elevate={elevate}/>

    </div>
  );
}

export default App;
