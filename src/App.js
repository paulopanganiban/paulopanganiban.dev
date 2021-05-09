import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import MobileSidebar from './components/MobileSidebar';
import Hero from './components/Hero';

function App() {
  // toggle hamburger menu
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <MobileSidebar isOpen={isOpen} toggle={toggle}/>
      <Nav  toggle={toggle}/>
      <Hero/>
    </Router>
  );
}

export default App;
