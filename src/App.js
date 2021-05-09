import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
    </Router>
  );
}

export default App;
