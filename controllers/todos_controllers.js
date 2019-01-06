let todos = [];

const getTodos = (req, res) => {
  res.send(todos);
};

const addTodo = (req, res) => {
  todoObj = req.body;
  if (todos.find(todo => todo.id === todoObj.id))
    res.status(400).send({ error: "ID already occupied" });
  else {
    todos.push(todoObj);
    res.send(todoObj);
  }
};

const editTodo = (req, res) => {
  const id = req.params.id;
  const todo = req.body.todo;
  let flag = false;
  todos = todos.map(todoObj => {
    if (todoObj.id === id) {
      todoObj.todo = todo;
      flag = true;
    }
    return todoObj;
  });
  if (flag) res.send(todos);
  else res.status(404).send({ error: "Todo not Found" });
};

const deleteTodo = (req, res) => {
  const id = req.params.id;
  let updatedTodos = todos.filter(todo => todo.id !== id);
  if (updatedTodos.length === todos.length)
    res.status(404).send({ error: "Todo not Found" });
  else {
    todos = updatedTodos;
    res.send(todos);
  }
};

module.exports = {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo
};
