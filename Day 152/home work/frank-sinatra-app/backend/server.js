const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/frankSinatraDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});

const songSchema = new mongoose.Schema({
  title: String,
  year: Number,
  lyrics: String,
  album: String,
  duration: String
});

const User = mongoose.model('User', userSchema);
const Song = mongoose.model('Song', songSchema);

app.use(cors());
app.use(express.json());

const JWT_SECRET = 'sinatra_secret';

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Auth routes
app.post('/api/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ _id: user._id }, JWT_SECRET);
  res.json({ token });
});

// Protected routes
app.get('/api/songs', authenticate, async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

app.post('/api/songs', authenticate, async (req, res) => {
  const song = new Song(req.body);
  await song.save();
  res.status(201).json(song);
});

// Seed initial data
async function seedData() {
  const count = await Song.countDocuments();
  if (count === 0) {
    await Song.insertMany([
      { 
        title: "My Way", 
        year: 1969, 
        album: "My Way", 
        duration: "4:35",
        lyrics: "And now the end is near..." 
      },
      { 
        title: "Fly Me To The Moon", 
        year: 1964, 
        album: "It Might as Well Be Swing", 
        duration: "2:27",
        lyrics: "Fly me to the moon..." 
      }
    ]);
  }
}

app.listen(PORT, async () => {
  await seedData();
  console.log(`Server running on port ${PORT}`);
});