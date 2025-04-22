const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config()

const app = express();
app.use(cors());

// დაკავშირება MongoDB-სთან
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
  // GridFS ბაკეტის ინიციალიზაცია
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'audios'
  });
  console.log('Connected to MongoDB and GridFS initialized');
});

// აუდიო ფოლდერის პათი
const AUDIO_FOLDER = path.join(__dirname, 'audio');

// ფაილის ატვირთვის ენდპოინტი
app.post('/upload/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(AUDIO_FOLDER, filename);
    
    // შეამოწმეთ არსებობს თუ არა ფაილი
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found in audio folder' });
    }

    // შექმენით ატვირთვის სტრიმი
    const uploadStream = gfs.openUploadStream(filename, {
      metadata: {
        uploadedFrom: 'audio folder',
        uploadDate: new Date()
      }
    });

    // წაიკითხეთ და ატვირთეთ ფაილი
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

// სერვერის გაშვება
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Monitoring audio folder: ${AUDIO_FOLDER}`);
});