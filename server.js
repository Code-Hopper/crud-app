import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config({ path: "./config.env" })

import { router } from "./routers/router.js"

let port = process.env.PORT || 3057

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static("./public"))

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} | http://localhost:${port} | http://127.0.0.1:${port}`)
})