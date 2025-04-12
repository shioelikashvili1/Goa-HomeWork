import express from "express"
import {getMusics} from "../controllers/music.js";

const apiMusicRoutes = express.Router()

apiMusicRoutes.get("/get-one-music", getMusics)

export {apiMusicRoutes}