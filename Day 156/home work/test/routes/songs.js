import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import Song from "../models/Song.js"
import router from "express";

// Multer კონფიგურაცია (მეხსიერებაში)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB
});

// ატვირთვის ენდპოინტი
router.post('/upload', upload.single('song'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { artist, title, album, year } = req.body;
    const conn = mongoose.connection;
    const bucket = conn.gridFSBucket;

    const uploadStream = bucket.openUploadStream(req.file.originalname, {
      metadata: {
        artist: artist || 'Unknown',
        title: title || 'Untitled',
        album: album,
        year: year ? parseInt(year) : null,
        contentType: req.file.mimetype
      }
    });

    uploadStream.end(req.file.buffer);

    uploadStream.on('finish', async () => {
      const song = await Song.findById(uploadStream.id);
      res.status(201).json({
        message: 'File uploaded successfully',
        song: song
      });
    });

    uploadStream.on('error', (err) => {
      throw err;
    });

  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// სიმღერების სია
router.get('/list', async (req, res) => {
  try {
    const songs = await Song.find().sort({ 'metadata.title': 1 });
    res.json(songs);
  } catch (err) {
    console.error('List error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// სიმღერის დაკვრა
router.get('/play/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    const conn = mongoose.connection;
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'songs'
    });

    res.set('Content-Type', song.contentType);
    res.set('Content-Disposition', `inline; filename="${song.filename}"`);

    const downloadStream = bucket.openDownloadStream(song._id);
    downloadStream.pipe(res);

  } catch (err) {
    console.error('Play error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// სიმღერის წაშლა
router.delete('/:id', async (req, res) => {
  try {
    const conn = mongoose.connection;
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'songs'
    });

    await bucket.delete(mongoose.Types.ObjectId(req.params.id));
    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

