import express from "express"
import { getHome, postHome, deleteStudent ,editStudent} from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.post("/", postHome)

router.post("/student/delete/:id", deleteStudent)

router.post("/student/edit/:id", editStudent)

export { router }