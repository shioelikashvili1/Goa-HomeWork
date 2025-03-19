const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Football route
app.get('/api/football', (req, res) => {
    res.json({ teams: ['Dinamo Tbilisi', 'Real Madrid', 'Manchester United'] });
});

// Movies route
app.get('/api/movies', (req, res) => {
    res.json({ movies: ['Inception', 'Interstellar', 'The Dark Knight'] });
});

// Users route
app.get('/api/users', (req, res) => {
    res.json({ users: ['User1', 'User2', 'User3'] });
});

// Messages route
app.get('/api/messages', (req, res) => {
    res.json({ messages: ['Hello', 'How are you?', 'Goodbye'] });
});

// Posts route
app.get('/api/posts', (req, res) => {
    res.json({ posts: ['Post1', 'Post2', 'Post3'] });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});