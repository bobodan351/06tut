import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';

const Comments = () => {
  const API_URL = `http://localhost:1234/comments`; // Standard endpoint
  const [comments, setComments] = useState([]);
    const navigate = useNavigate()
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listComments = await response.json();
        setComments(listComments);
      } catch (err) {
        console.log(err.message);
      }
    };
    (async()=> fetchItems())()
  }, []);
  return (
	<ul>  <button onClick={()=>navigate(-1)}><FaBackward/></button>
      {comments.map(comment => (
        <li key={comment.id}>
          <Link to={`/comments/${comment.id}`}>
            <h2>{comment.name}</h2>
          </Link>
          <h2>{comment.email}</h2>
        </li>
      ))}
    </ul>
  )
}

export default Comments