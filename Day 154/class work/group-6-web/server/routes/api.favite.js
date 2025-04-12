import express from "express"
import {geFavorites} from "../controllers/getFavorite.js"

const faovritesRoutes = express.Router()

// one
faovritesRoutes.get("/get-favorites", geFavorites)
export {faovritesRoutes}