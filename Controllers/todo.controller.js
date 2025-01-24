const Todo = require("../Models/todo.model")


let message;
let isEditing = false;
let editingTodo = null;


const homepage = async (req, res) => {
    const todos = await Todo.find()

    res.render("index", { todos, message, isEditing, editingTodo })

}


const createTodo = async (req, res) => {
    try {
        const { title, content } = req.body

        if (!title.trim() || !content.trim()) {
            console.log("All fields are mandatory !!");
            message = "All fields are mandatory !!"

        } else {
            const newTodo = await Todo.create({ title, content })
            message = ""

            if (newTodo) {
                console.log("New todo created successfully !");

            } else {
                console.log("New todo not created !!");
            }
        }

        res.redirect("/")

    } catch (error) {
        console.error("Error creating new todo:", error)
    }

}


const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params

        const deletedTodo = await Todo.findByIdAndDelete(id)
        isEditing = false

        if (deletedTodo) {
            console.log("Todo deleted successfully !");

        } else {
            console.log("Todo unable to delete");
        }

        res.redirect("/")

    } catch (error) {
        console.error("Error deleting todo:", error)
    }

}


const editTodo = async (req, res) => {
    const { id } = req.params

    editingTodo = await Todo.findById(id)
    isEditing = true

    res.redirect("/")

}


const updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, content } = req.body

        const updatedTodo = await Todo.findByIdAndUpdate(id, { title, content }, { new: true })
        isEditing = false
        editingTodo = null

        if (updateTodo) {
            console.log("Todo updated succesfully !");

        } else {
            console.log("Unable to update todo");

        }

        res.redirect("/")

    } catch (error) {
        console.error("Error updating todo:", error)
    }

}

const cancelEdit = (req, res) => {
    isEditing = false
    editingTodo = null

    res.redirect("/")

}




module.exports = { homepage, createTodo, deleteTodo, editTodo, updateTodo, cancelEdit }