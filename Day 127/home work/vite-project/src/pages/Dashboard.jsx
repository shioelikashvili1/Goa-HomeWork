import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="p-5">
            <h1 className="text-3xl mb-4">Dashboard</h1>
            <nav>
                <Link to="profile" className="mr-4">Profile</Link>
                <Link to="settings">Settings</Link>
            </nav>
            
            <Routes>
                <Route path="profile" element={<h2>Profile Page</h2>} />
                <Route path="settings" element={<h2>Settings Page</h2>} />
            </Routes>
        </div>
    );
}

export default Dashboard;
