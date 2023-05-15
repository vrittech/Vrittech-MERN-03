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

let todos = []

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
      li.classList.add('list-group-item');
      const div = document.createElement("div");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.classList.add('form-check-input', 'me-2');

      const span = document.createElement('span');
      span.innerText = todo.name;
      span.classList.add('ms-2');

      div.append(checkbox)
      div.append(span);
      li.append(div);

      todoList.append(li);
   })
}