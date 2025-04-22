import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { getMongoDatabase } from "./db/connectDB.js";
import uploadRouter from "./routes/upload.route.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());

app.use(uploadRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await getMongoDatabase();
    console.log(`Server running on port ${PORT}`);
});
