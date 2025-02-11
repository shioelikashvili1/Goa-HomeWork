import express from "express"
import cors from "cors"

const PORT = 5000
const app = express()
app.use(cors({origin: "http://localhost:5173"}))
const user ={
    id: 1,
    name: "jhon week",
    email: "example@gmail.com",
    img: "https://variety.com/wp-content/uploads/2023/03/John-Wick-3.jpg?w=1000&h=562&crop=1"
}

app.get("/api/user", (req, res) =>{
try {
    res.status(200).json(user)
  } catch (error) {
    res.status(200).json({error: error})
  }
})

app.listen(PORT, () => {

    console.log(`server is chilling at http://localhost:${PORT}`)
})