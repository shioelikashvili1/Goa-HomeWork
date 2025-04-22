const express = require("express");
const router = express.Router();

let musicData = [
  { id: 1, title: "Song One", artist: "Artist A" },
  { id: 2, title: "Song Two", artist: "Artist B" }
];

// GET - /api/music-data
router.get("/music-data", (req, res) => {
  res.json(musicData);
});

// POST - /api/music-create
router.post("/music-create", (req, res) => {
  const newMusic = req.body;
  newMusic.id = Date.now();
  musicData.push(newMusic);
  res.json({ message: "Created", data: newMusic });
});

// PUT - /api/music-update/:id
router.put("/music-update/:id", (req, res) => {
  const id = Number(req.params.id);
  const updated = req.body;

  musicData = musicData.map((m) => (m.id === id ? { ...m, ...updated } : m));
  res.json({ message: "Updated", id });
});

// DELETE - /api/music-delete/:id
router.delete("/music-delete/:id", (req, res) => {
  const id = Number(req.params.id);
  musicData = musicData.filter((m) => m.id !== id);
  res.json({ message: "Deleted", id });
});

module.exports = router;
