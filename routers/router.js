import express from "express"
import { getHome, postHome, deleteStudent } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.post("/", postHome)

router.post("/student/delete/:id", deleteStudent)

export { router }