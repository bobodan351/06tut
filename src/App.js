
import './App.css';


import { Link } from 'react-router';


function App() {

  return (
    <div className="App">
      <Link to={'/dashboard'}>
        <h2>Post</h2>
      </Link>
      <Link to={'/comments'}>
        <h2>Comments</h2>
      </Link>
      <Link to={'/post'}>
        <h2>Users</h2>
      </Link>
    </div>
  );
}


export default App;
