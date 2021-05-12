import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav';
import MobileSidebar from './components/MobileSidebar';
import Hero from './components/Hero';
import About from './components/About';
import { heroObject, homeObjOne, menuItems } from './data';

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
      <Nav toggle={toggle} {...heroObject} menuItems={menuItems} name={heroObject.name}/>
      <Hero {...heroObject}/>
      <About {...homeObjOne} />
      <About {...homeObjOne} />
      <About {...homeObjOne} />
    </Router>
  );
}

export default App;
