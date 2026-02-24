import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const API_URL = `http://localhost:1234/post`; // Standard endpoint
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listPosts = await response.json();
        setPosts(listPosts);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <ul>
        {posts.map((item) => (
          // FIX: Key must be on the Link itself
          <li key={item.id}> 
            <Link to={`/dashboard/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Dashboard