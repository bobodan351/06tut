import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import DashboardItems from './DashboardItems';
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
<Dashboard/>
    </div>
  );
}


export default App;
