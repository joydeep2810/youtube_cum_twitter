import express, { json } from "express"
import cors from "cors"
import cookie_parser from "cookie-parser"

const app = express()

app.use(cors())
app.use(cookie_parser())

app.use(express.static("public"))
app.use(json)

app.get("/", function (req, res) {
  res.send("Hello")
})

app.post("/", function (req, res) {
  res.send("Hello")
})

app.put("/", function (req, res) {
  res.send("Hello")
})

export default app
