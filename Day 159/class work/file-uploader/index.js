const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { Readable } = require("stream");
const File = require("./models/file2");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("MongoDB connection error"));

let connection = mongoose.connection;

connection.on("open", () => {
    console.log("MongoDB connection open");

    let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    app.post("/upload", upload.single("file"), async (req, res) => {
        let { file } = req;
        let { fieldname, originalname, mimetype, buffer } = file;

        let newFile = new File({
            filename: originalname,
            contentType: mimetype,
            length: buffer.length,
        });

        try {
            let uploadStream = bucket.openUploadStream(originalname);
            let readBuffer = new Readable();
            readBuffer.push(buffer);
            readBuffer.push(null);

            await new Promise((resolve, reject) => {
                readBuffer
                    .pipe(uploadStream)
                    .on("finish", resolve)
                    .on("error", reject);
            });

            newFile.id = uploadStream.id;
            let savedFile = await newFile.save();

            if (!savedFile) return res.status(404).send("Save error");
            return res.send({ file: savedFile, message: "Uploaded!" });
        } catch (err) {
            res.send("Error uploading file");
        }
    });

    app.get("/image/:fileId", (req, res) => {
        let { fileId } = req.params;
        let downloadStream = bucket.openDownloadStream(
            new mongoose.Types.ObjectId(fileId)
        );

        downloadStream.on("file", (file) => {
            res.set("Content-Type", file.contentType);
        });

        downloadStream.pipe(res);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
