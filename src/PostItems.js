import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';

const PostItems = () => {
  const { id } = useParams();
  const API_URL = `http://localhost:1234/users/${id}`; // Standard endpoint
  const [users, setUsers] = useState([]);
    const navigate = useNavigate()
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.log(err.message);
      }
    };
    (async () => fetchItems())();
  }, [id]);
  return (
    <div>
      <h1>User Details</h1>  <button onClick={()=>navigate(-1)}><FaBackward/></button>
      {users.map((item) => (
        <div key={item.id}>
          <h2>Name: {item.name}</h2>
          <p>Username: {item.username}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default PostItems;
