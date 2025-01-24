const express = require("express")
const router = express.Router()

const { homepage, createTodo, deleteTodo, editTodo, updateTodo, cancelEdit } = require("../Controllers/todo.controller")


router.get("/", homepage)
router.post("/create", createTodo)
router.post("/delete/:id", deleteTodo)
router.post("/edit/:id", editTodo)
router.post("/update/:id", updateTodo)
router.post("/cancel", cancelEdit)


module.exports = router