import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';

const CommentsItems = () => {
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const API_URL = `http://localhost:1234/comments/${id}`
    const navigate = useNavigate()
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json()
        console.log(listItems)
        setComments(Array.isArray(listItems) ? listItems : [listItems])

        
      }
      catch (err) {
        console.log(err.message)
      }
    }
    (async ()=>fetchItems())()
  },[id])
  return (
    <div>CommentsItems   <button onClick={()=>navigate(-1)}><FaBackward/></button>
    <ul>
      {
      comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
      </ul>
  </div>
  )
}

export default CommentsItems