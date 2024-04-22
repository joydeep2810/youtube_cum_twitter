import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDB = async function () {
  try {
    await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
    console.log("MongoDB Connected Succesfully")
  } catch (error) {
    console.log("Error", error)
  }
}

export default connectDB
