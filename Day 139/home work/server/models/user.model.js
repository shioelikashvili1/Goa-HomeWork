import mongoose from "mongoose";


const userShema = new mongoose.Schema({
    name: String,
    username: String,
    age: Number,
})

 export const Users = mongoose.model("users", userShema)
