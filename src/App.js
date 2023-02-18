import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getData = async() => {
      const demoData = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(demoData.data);
    }

    getData();
  }, []);

  return (
    <div className="container">
            <div className="row">
        <div className="col-md-12 text-center" style={{ margin: "50px 0" }}>
          <h1> Fake Posts from JSON Placeholder</h1>
        </div>
      </div>

      <div className="row">
        {posts &&
          posts.map((post) => (
            <div className="card col-md-4" key={post.id}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
