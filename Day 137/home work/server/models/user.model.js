import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number
})

export const Users = mongoose.model('users', userSchema)
