import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import GetStarted from './GetStarted';
import Login from './Login';

function App() {
    const [showHeader, setShowHeader] = useState(true);

    // Add a listener to handle route changes
    const handleRouteChange = () => {
        // Check the current route and decide whether to show the Header
        const currentPath = window.location.pathname;
        if (currentPath === '/login') {
        // Hide Header on the login page
        setShowHeader(false);
        } else {
        // Show Header on other pages
        setShowHeader(true);
        }
    };

    // Use useEffect to add and remove the route change listener
    React.useEffect(() => {
        // Add the listener
        window.addEventListener('popstate', handleRouteChange);

        // Remove the listener when the component is unmounted
        return () => {
        window.removeEventListener('popstate', handleRouteChange);
        };
    }, []); // Empty dependency array means the effect runs once after the initial render

    return (
        <Router>
        <div>
            {/* Conditionally render the Header based on the route */}
            {showHeader && <Header />}

            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<GetStarted />} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;
