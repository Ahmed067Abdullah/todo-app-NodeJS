const express = require("express");
const todosController = require( "../controllers/todos_controllers");

const router = express.Router();

router.get("/", todosController.getTodos);

router.post("/", todosController.addTodo);

router.put("/:id", todosController.editTodo);

router.delete("/:id", todosController.deleteTodo);

module.exports = router;
