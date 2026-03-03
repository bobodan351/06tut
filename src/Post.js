import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';

const Post = () => {
	const API_URL = `http://localhost:1234/users`; // Standard endpoint
	const [user, setUser] = useState([]);
	const navigate = useNavigate()
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				const data = await response.json();
				setUser(data);
			} catch (error) {
				console.error("Error fetching items:", error);
			}
		};
		(async () => fetchItems())();
	}, []);
  return (
	<div>
		<h2>Users</h2>  <button onClick={()=>navigate(-1)}><FaBackward/></button>
		{user.map((item) => (
			<div key={item.id}>
				<Link to={`/post/${item.id}`}>
					<p>Name:{item.name}</p>
				</Link>
				<p>Username: {item.username}</p>
			</div>
		))}
		
	</div>
  )
}

export default Post