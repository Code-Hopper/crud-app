import express from "express"
import { getHome, postHome } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.post("/", postHome)

export { router }