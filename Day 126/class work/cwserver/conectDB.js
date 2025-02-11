import mongoose from "mongoose";

export const conectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongoose connect to: ", conn.connection.host)
    } catch (error) {
     console.log(error)
        
    }
}