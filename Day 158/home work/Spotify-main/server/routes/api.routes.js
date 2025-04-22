import express from "express"
import {apiMusicRoutes} from "./api.music.js";
import {faovritesRoutes} from "./api.favite.js";
const apiRoutes = express.Router()

apiRoutes.use("/music", apiMusicRoutes)
apiRoutes.use("/favorites", faovritesRoutes)

export {apiRoutes}