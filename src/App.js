import React from 'react';
import {Route} from "react-router-dom";
import AboutUs from './components/About';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar/>
      <Route exact path="/">
      <Home/ >
      </ Route>

      <Route  path="/about">
      <AboutUs />
      </ Route>

      <Route path="/signup">
      <Signup/>
      </ Route>

      <Route path="/contact">
      <Contact/ >
      </ Route>
    </>
  );
}

export default App;
