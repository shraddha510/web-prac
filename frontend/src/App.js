import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Clinic from './components/Clinic';
import Volunteer from './components/Volunteer';
import Support from './components/Support';
import News from './components/News';
import Research from './components/Research';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1 className="heading">Welcome to the OCEP Website</h1>
        <ImageCarousel /> {/* Add the carousel here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/support" element={<Support />} />
          <Route path="/news" element={<News />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
