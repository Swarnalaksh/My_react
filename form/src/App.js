import React from 'react'
import './App.css';
import Login from './Components/Login'
import { BrowserRouter,  Routes, Route } from "react-router-dom"
import Dashboard from './Components/Dashboard';

function App() {
  return (
    
    <div className="App">
    
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Login />}/>
      <Route  path="/Dashboard/:dataas" element={<Dashboard  />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
