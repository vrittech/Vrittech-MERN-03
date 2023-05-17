// // JSON
// // object REST API - JSON  GRAPHQL tRPC

// // GET
// // GET By Id
// //POST -Individual data/ Multiple data
// //PATCH/PUT -ID
// //DELETE

// // const response

// // frontend - backend data communication
// // Destrucring/spread operator
// const data = {
//    title: "product",
//    id: 1,
//    price: 300
// }

// let hello = []

// const cars = ["Ford", "4WD", {
//    id: 1
// }];

// const test = ["mustang", "data", {
//    id: 2
// }];

// // console.log(cars[0])
// //Array destrucring
// const [car1] = cars;

// console.log('cars', ...cars)

// //Spread Operator
// hello = [...cars, ...test]

// function sum(x, y, z) {
//    return x + y + z;
// }

// const numbers = [1, 2, 10];

// console.log(sum(...numbers))



// // console.log(data)

// async function postData(url, postData) {
//    const response = await fetch(url, {
//       method: "POST",
//       headers: {
//          "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postData)
//    });

//    const { title, id } = await response.json();

//    console.log(id);
// }

// postData('https://dummyjson.com/products/add', data);


const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");


//state
let todos = [];
let todoId = "";

todoForm.addEventListener('submit', (event) => {
   event.preventDefault();
   const todo = {
      id: Date.now(),
      name: todoInput.value,
      completed: false
   }
   todos.push(todo);
   displayTodos();
   todoForm.reset()
})

function displayTodos() {
   todoList.innerHTML = '';
   todos.forEach((todo) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
      const div = document.createElement("div");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.classList.add('form-check-input', 'me-2');
      checkbox.addEventListener('change', (event) => {
         event.preventDefault();
         todo.completed = event.target.checked;
         displayTodos();
      })
      //name of todo
      const span = document.createElement('span');
      span.innerText = todo.name;
      span.classList.add('ms-2');
      span.style.textDecoration = todo.completed ? 'line-through' : 'none';

      div.append(checkbox)
      div.append(span);

      li.append(div);


      const rightDiv = document.createElement('div');
      //Edit button
      const editButton = document.createElement('button');
      editButton.classList.add('btn', 'btn-secondary', 'btn-sm');
      editButton.innerText = "Edit";
      editButton.setAttribute("data-bs-toggle", "modal");
      editButton.setAttribute("data-bs-target", "#editModal");
      editButton.addEventListener('click', (event) => {
         event.preventDefault();
         document.getElementById('todo-edit').value = todo.name;
         document.getElementById('todo-id').value = todo.id;
         // localStorage vs sessionStorage
         todoId = todo.id;
         localStorage.setItem("todoId", todo.id)
         sessionStorage.setItem("todoId", todo.id)

         //value fetch from local/session storage
         const data = localStorage.getItem("todoId");
         localStorage.removeItem("todoId")
         const data1 = sessionStorage.getItem("todoId");
      })

      rightDiv.append(editButton);
      //Delete button
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', (event) => {
         event.preventDefault();
         todos = todos.filter((value) => {
            return value.id !== todo.id;
         })
         displayTodos();
      })

      rightDiv.append(deleteButton);

      li.append(rightDiv);

      todoList.append(li);
   })
}

const editHandler = (event) => {
   event.preventDefault();
   todos = todos.map((value) => {
      return value.id === Number(todoId) ? {
         id: Number(todoId),
         name: document.getElementById("todo-edit").value,
         completed: false
      } : value;
   })
   displayTodos();
   document.getElementById('btn-close').click();
}