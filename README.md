API DOCUMENTATION

1) Get all Todos
  url : localhost:3000/api/todo/
  request type : GET
  response : [{
              "id": "1",
              "todo": "hello world"
            }, ...]

2) Add a Todo
  url : localhost:3000/api/todo/
  request type : POST
  request body : {
                id : String,
                todo : String
              }
  response : {
              "id": "1",
              "todo": "hello world"
            }
  
3) Edit a Todo
  url : localhost:3000/api/todo/:id
  request type : PUT
  request body : {
                todo : String
              }
  response : [{
              "id": "1",
              "todo": "hello world"
            }, ...]
   
4) Delete a Todo
  url : localhost:3000/api/todo/:id
  request type : DELETE
  response : [{
              "id": "1",
              "todo": "hello world"
            }, ...]
   
   
