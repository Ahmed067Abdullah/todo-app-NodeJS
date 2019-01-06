const express = require('express');
const bodyParser = require('body-parser');
const todos = require('./routes/todos_routes');

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/api/todo',todos)

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})