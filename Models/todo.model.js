const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
})

const Todo = mongoose.model("todo_collections", todoSchema)

module.exports = Todo