import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DashboardItems = () => {
  const { id } = useParams();
  // REMOVE the trailing slash at the end
  const API_URL = `http://localhost:1234/post/${id}`; 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // ENSURE data is an array before setting state
        setPosts(Array.isArray(data) ? data : [data]); 
      } catch (err) {
        console.error(err.message);
      }
    };
    (async()=>fetchItems())();
  }, [id]);

  return (
    <div>
      <h1>User Comments</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}> {/* Ensure item.id exists in your DB */}
            <h3>{item.body}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default DashboardItems;
