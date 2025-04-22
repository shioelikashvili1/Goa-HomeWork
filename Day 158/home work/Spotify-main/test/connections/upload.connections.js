    import path from 'path';
    import fs from 'fs';
    import {GridFSBucket, ObjectId} from "mongodb";
    import {getGFSBucket, getMongoDatabase} from "../db/connectDB.js";

    export const uploadMusic = async (req, res) => {
        const __dirname = path.resolve();
        const AUDIO_FOLDER = path.join(__dirname, 'audio');

        try {
            const filename = req.params.filename;
            const filenamePath = req.params.filename.replace(".mp3","");
            const filePath = path.join(AUDIO_FOLDER, filename);

            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ error: 'File not found in audio folder' });
            }

            const gfs = getGFSBucket();
            if (!gfs) return res.status(500).json({ error: 'GridFS not initialized' });

            const uploadStream = gfs.delete(filenamePath, {
                metadata: {
                    uploadedFrom: 'audio folder',
                    uploadDate: new Date(),
                },
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
                        filenamePath,
                    });
                });

        } catch (err) {
            console.error('Server error:', err);
            res.status(500).json({ error: 'Server error' });
        }
    };

    export const getMusic = async (req, res) => {
        try {
            const filename = req.params.filename // Convert string to ObjectId
            const db = await getMongoDatabase();
            const bucket = new GridFSBucket(db, { bucketName: 'audios' });

            const file = await db.collection('audios.files').findOne({ filename });
            if (!file) return res.status(404).json({ error: 'File not found' });

            res.setHeader('Content-Type', file.contentType || 'audio/mpeg');

            const downloadStream = bucket.openDownloadStreamByName(filename);
            downloadStream.pipe(res);

            downloadStream.on('error', (error) => {
                console.error('Stream error:', error);
                res.status(500).send('Error streaming music.');
            });

        } catch (err) {
            console.error('Server error:', err);
            res.status(500).json({ error: 'Server error' });
        }
    };
