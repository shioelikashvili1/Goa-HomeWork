import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name: String,
    username: String,
    age: Number,
})

const user = mongoose.model("users", userSchema)