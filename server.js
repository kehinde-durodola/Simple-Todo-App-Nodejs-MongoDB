const express = require("express")

const app = express()
require("dotenv").config()
const connectDatabase = require("./Dbconfig/db.connect")
const todoRoute = require("./Routes/todo.route")


app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.use("/", todoRoute)



connectDatabase()


const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
    console.log(`App successfully started on port ${PORT}`);

})