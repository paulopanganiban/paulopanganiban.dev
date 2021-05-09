import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Nav/>
      <Home/>
    </Router>
  );
}

export default App;
