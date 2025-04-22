const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'audios'
  });
  console.log('Connected to MongoDB and GridFS initialized');
});

const AUDIO_FOLDER = path.join(__dirname, 'audio');

app.post('/upload/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(AUDIO_FOLDER, filename);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found in audio folder' });
    }

    const uploadStream = gfs.openUploadStream(filename, {
      metadata: {
        uploadedFrom: 'audio folder',
        uploadDate: new Date()
      }
    });

    const readStream = fs.createReadStream(filePath);
    
    readStream.pipe(uploadStream)
      .on('error', (err) => {
        console.error('Upload error:', err);
        res.status(500).json({ error: 'Upload failed' });
      })
      .on('finish', () => {
        res.status(201).json({
          message: 'File uploaded successfully',
          fileId: uploadStream.id,
          filename: filename
        });
      });

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/audio/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const downloadStream = gfs.openDownloadStreamByName(filename);

    downloadStream.on('error', err => {
      console.error('Download error:', err);
      res.status(404).json({ error: 'File not found in database' });
    });

    res.set('Content-Type', 'audio/mpeg');
    downloadStream.pipe(res);

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/update/:filename', async (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(AUDIO_FOLDER, filename);

  try {
    const files = await conn.db.collection('audios.files').find({ filename }).toArray();

    if (files.length > 0) {
      for (const file of files) {
        await conn.db.collection('audios.files').deleteOne({ _id: file._id });
        await conn.db.collection('audios.chunks').deleteMany({ files_id: file._id });
      }
    }

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'New file not found in audio folder' });
    }

    const uploadStream = gfs.openUploadStream(filename, {
      metadata: {
        uploadedFrom: 'update endpoint',
        uploadDate: new Date()
      }
    });

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(uploadStream)
      .on('error', err => {
        console.error('Upload error:', err);
        res.status(500).json({ error: 'Upload failed' });
      })
      .on('finish', () => {
        res.status(200).json({
          message: 'File updated successfully',
          fileId: uploadStream.id,
          filename: filename
        });
      });

  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Update failed' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Monitoring audio folder: ${AUDIO_FOLDER}`);
});
