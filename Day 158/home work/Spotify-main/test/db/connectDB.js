import mongoose from 'mongoose';
import { MongoClient, GridFSBucket } from 'mongodb';

import dotenv from 'dotenv';

dotenv.config();
let gfsBucket;
let mongoClient;

mongoose.connect(process.env.MONGODB_URI)

const conn = mongoose.connection;

conn.once('open', () => {
    gfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'audios'
    });
    console.log('MongoDB connected, GridFS initialized');
});

export const getGFSBucket = () => gfsBucket;

export const getMongoDatabase = async () => {
    if (!mongoClient) {
        mongoClient = new MongoClient(process.env.MONGODB_URI);
        await mongoClient.connect();
    }
    return mongoClient.db("spotify");
};
