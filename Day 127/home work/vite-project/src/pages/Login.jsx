import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl mb-4">Login Page</h1>
            <button 
                onClick={handleLogin} 
                className="px-6 py-2 bg-blue-500 text-white rounded">
                Login
            </button>
        </div>
    );
}

export default Login;
