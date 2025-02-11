import mongoose from 'mongoose'
export default async function connectDB (){
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB is chilling at ${conn.connection.host}`)
  } catch (error) {
    console.log("Error at connect DB", error.message)
  }
}
