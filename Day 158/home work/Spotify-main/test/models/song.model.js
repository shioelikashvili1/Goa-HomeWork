import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    filename: {
        type: String,
    },
    contentType: {
        type: String,
    },
    length: Number,
    uploadDate: {
        type: Date,
        default: Date.now
    },
    chunkSize: {
        type: Number,
    },
    metadata: {
        uploadedFrom: String,
        uploadDate: Date,
    }
});

export const MusicModel = mongoose.model("audios.files", SongSchema);