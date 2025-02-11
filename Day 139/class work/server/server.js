import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connect } from "mongoose"
import connectDB from "./db/connectDB.js"
import { Users } from "./models/user.model.js"


dotenv.config()
const app = express()
app.use(cors({origin: "http://localhost:5173"}))
const user ={
    id: 1,
    name: "jhon week",
    email: "example@gmail.com",
    img: "https://variety.com/wp-content/uploads/2023/03/John-Wick-3.jpg?w=1000&h=562&crop=1"
}

app.get("/api/users", async(req, res) =>{
try {
  const users = await Users.find()
  
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({error: error})
  }
})

app.listen(process.env.PORT, () => {

connectDB()
  
    console.log(`server is chilling at http://localhost:${process.env.PORT}`)
})