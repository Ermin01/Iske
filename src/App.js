import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import Home from './Components/Pages/Home'; // Example page component
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Pages/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='About' element = {<About />}/>
        <Route path='Services' element = {<Services />}/>
        <Route path='Contact' element = {<Contact/>}/>
        <Route path='Footer' element = {<Footer/>}/>

      </Routes>
    </Router>
  );
}

export default App;
