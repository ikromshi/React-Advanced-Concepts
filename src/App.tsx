import './App.css';
import api from "./api/posts";
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchPosts();
  }, [])  

  return (
    <div className="app">
      <header className="App-header">

      </header>
    </div>
  )
}

export default App;

// axios creates the json on its own - no need to do response.json()
// axios catches errors outside the 200 code status - no need to do if (!response.ok) .... 