import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import GetStarted from './GetStarted';
import Login from './Login';
import Register from './Register';

function App() {
    

    return (
        <Router>
        <div>
            {/* Conditionally render the Header based on the route */}
            <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
            </Routes>
        </div>
        </Router>
    );
}

export default App;