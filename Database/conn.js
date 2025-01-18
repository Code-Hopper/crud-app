import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({ path: "./config.env" })

async function conn() {

    try {

        await mongoose.connect(process.env.mongodb_string)
        console.log("connection with database was successful !")

    } catch (err) {
        console.log("unable to connect with database !")
        console.log(err)
    }

}

conn()