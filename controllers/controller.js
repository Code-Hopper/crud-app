import "../Database/conn.js"
import { studentModel } from "../models/studentSchema.js"

let getHome = (req, res) => {
    console.log("get home route")
    res.status(200).render("index")
}

let postHome = async (req, res) => {
    console.log("post home route")
    let data = req.body

    try {

        // use studentModel to insert the data into the students collection
        // first create a new model then use save method

        let studentEntry = new studentModel(data)

        let result = await studentEntry.save()

        console.log("entry saved into database = ", result)

        res.status(202).redirect("/")

    } catch (err) {
        console.log("unable to post the student entry data")
        console.log(err)
        res.status(400).redirect("/")
    }
}

export { getHome, postHome }