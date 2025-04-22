import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// Components
const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/login', { username, password });
      setToken(res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Register = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/register', { username, password });
      alert('Registration successful! Please login.');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const SongList = ({ token }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/songs', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSongs(res.data);
      } catch (err) {
        console.error('Failed to fetch songs', err);
      }
    };
    fetchSongs();
  }, [token]);

  return (
    <div className="song-list">
      <h2>Frank Sinatra Songs</h2>
      <div className="songs-container">
        {songs.map((song) => (
          <div key={song._id} className="song-card">
            <h3>{song.title}</h3>
            <p><strong>Album:</strong> {song.album}</p>
            <p><strong>Year:</strong> {song.year}</p>
            <p><strong>Duration:</strong> {song.duration}</p>
            <div className="lyrics">
              <p>{song.lyrics}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Frank Sinatra Collection</h1>
        </header>
        <main>
          <Routes>
            <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
            <Route path="/register" element={!token ? <Register setToken={setToken} /> : <Navigate to="/" />} />
            <Route path="/" element={token ? <SongList token={token} /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;