import mongoose from "mongoose";

let studentSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    dob: String,
    address: String,
    prev_education: String,
    stream: String,
    course_instrested: String,
    entrance_marks: Number,
    timeStamp: String,
    intrested: Boolean,
    admission: Boolean,
    admissionDate: String,
    entrance_percentages: Number
})

// pre & post

studentSchema.pre("save", function () {
    this.timeStamp = new Date().toLocaleTimeString() + " | " + new Date().toLocaleDateString()
    this.intrested = null
    this.admission = false
    this.admissionDate = null
    this.entrance_percentages = Number(((this.entrance_marks / 300) * 100).toFixed(2))
})

let studentModel = new mongoose.model("students", studentSchema)

export { studentModel }