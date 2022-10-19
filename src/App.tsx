import './App.css';
import { useEffect, useMemo, useState } from 'react';
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500/posts"
})

type Posts = {
  title: string;
  body: string;
}[];

function App() {
  const [posts, setPosts] = useState<Posts>();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = await api.get("/").then(res => {
      return res.data;
    });
    console.log(data);
    setPosts(data);
  }
  
  // Posting data
  const createPosts = async () => {
    const response = await api.post("/", {
      id: 5, title: "Number five", datetime: "Right now", body: "Posting data with axios"
    });
    getPosts();
  };
  
  
  return (
    <div className="app">
      <header className="App-header">
      <button onClick={createPosts}>Add a post</button>
      <button onClick={getPosts}>Get Posts</button>
      {posts?.map((post, idx) => <h3 key={idx}>Title: {post.title} </h3>)}
      </header>
    </div>
  )
}

export default App;

// axios creates the json on its own - no need to do response.json()
// axios catches errors outside the 200 code status - no need to do if (!response.ok) .... 
// 

// const getPosts = useMemo(() => (
//   async () => {
//    const data = await api.get("/").then(res => {
//      return res.data;
//    });
//    console.log(data);
//    setPosts(data);
//   }
// ), [posts])