const mongoose = require("mongoose")

const connectDatabase = async () => {
    try {
        const URI = process.env.DB_URI

        if (!URI) {
            throw new Error("Database URI is missing in the enviroment variable !");
        }

        await mongoose.connect(URI)
        console.log("Database connected succesfully !");

    } catch (error) {
        console.error("Error connecting databse:", error)
    }
}

module.exports = connectDatabase