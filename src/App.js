import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';


function App() {
 
 
  

  return (
    <Router>
      <div className="App">
             <Layout/>
      </div>
      </Router>
  );
}

export default App;
