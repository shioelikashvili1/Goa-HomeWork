import express from "express"
import {getMusics} from "../controllers/music.collections.js";

const apiMusicRoutes = express.Router()

apiMusicRoutes.get("/get-one-music", getMusics)

export {apiMusicRoutes}