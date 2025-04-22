import express, {Router} from "express"
import {getMusic, uploadMusic,} from "../connections/upload.connections.js";
import cors from "cors";

const uploadRouter = Router()

uploadRouter.post('/upload/:filename', uploadMusic)
uploadRouter.get('/music/:filename', getMusic)

export default uploadRouter