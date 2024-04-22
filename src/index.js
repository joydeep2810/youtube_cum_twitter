import "dotenv/config"
import connectDB from "./db/connect.js"
import app from "./app.js"

connectDB()
  .then(() => {
    app.listen(process.env.PORT)
  })
  .catch((e) => {
    console.log("MONGO DB CONNECTION FAILED")
  })
