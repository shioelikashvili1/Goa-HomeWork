import mongoose, { connect } from "mongoose"

export default async function connectDB() {
    try {
        const conn = await connect(process.env.MONGODB_URI)
        console.log("DUBARA")
    } catch (error) {

        console.log("dushashi")

    }

}