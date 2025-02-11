import express from "express"
import dotenv from "dotenv"
import { conectDB } from "./db/conectDB.js"

const app = express()
dotenv.config()

app.listen(5000, ()=>{
    conectDB()
})