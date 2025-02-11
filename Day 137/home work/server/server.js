import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'
import mongoose from 'mongoose'
import { Users } from './models/user.model.js'

dotenv.config()
const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))

app.get('/api/user', async (req, res) => {
  try {
    const users = await Users
    const user = await users.findOne({"name": "gio"})
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

app.listen(process.env.PORT, () => {
  connectDB()
  console.log(`Server is chilling at http://localhost:${process.env.PORT}`)
})
