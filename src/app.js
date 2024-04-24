import express, { json } from "express"
import cors from "cors"
import cookie_parser from "cookie-parser"

const app = express()

app.use(cors())
app.use(cookie_parser())

app.use(express.static("public"))
app.use(json)

//import routes
import router from "./routes/user.js"

//routes declaration
app.use("/users", userRouter)

export default app
