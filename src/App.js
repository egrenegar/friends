import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Friends from './pages/Friends';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Friends' component={Friends} />
      </div>
    </Router>
  );
}

export default App;
