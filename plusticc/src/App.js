import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import GetStarted from './GetStarted';
import Login from './Login';
import Register from './Register';
import About from './About/About';
import Contact from './Contact/Contact';
import Organization from './Organization';
import Home from './Home';
import Manage from './Manage'; // Import the Manage component
import Type from './Type';
import Cause from './Cause';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/type" element={<Type />} />
          <Route path="/cause" element={<Cause />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
