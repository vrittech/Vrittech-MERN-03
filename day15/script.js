// console.log('first')

// setTimeout(() => {
//    console.log('second');
// }, 0);

// console.log('thirrd')

// queue

//callback
//promises
//async/await ES7

//callback hell

function sum(a, b, cb) {
   console.log(a + b);
   cb(a, b, mul);
}

function sub(a, b, callback) {
   console.log(a - b);
   callback(a, b);
}

function mul(a, b) {
   console.log(a * b);
}

sum(1, 2, sub);

//promises

// axios
const returnConcatString = (a, b) => {
   return new Promise(function (resolve, reject) {
      if (a !== undefined || b !== undefined) {
         resolve(data);
      } else {
         reject('Error while concating string')
      }
   })

}

const nextFUnct = () => {
   return new Promise((myRes, myRej) => {
      resolve()
   })
}


// returnConcatString('data1', 'data2').then((value) => {
//    console.log(value);
// }).then((resp) => {
//    console.log(resp)
// }).catch((err) => {
//    console.log(err);
// })



// console.log();

// fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
//    return response.json()
// }).then((data) => {
//    console.log(data);
// }).catch((err) => {
//    console.log(err);
// })

// Client - Server -> API

// HTTP REQUESTS - GET, POST, PUT, PATCH, DELETE

// API

//async//await

// function av() {
//    const getData = async (url) => {
//       try {
//          const resp = await fetch(url);
//          const data = await resp.json();
//       } catch (error) {
//          console.log(error)
//       }
//    }

//    getData('https://jsonplaceholder.typicode.com/todos');
// }

// av();

// callback

function fetchData(url, callback) {
   // fetch(url).then((resp) => resp.json()).then((value) => callback(value));
   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET", url);
   req.send();

   callback(value)
}

const getData = (data) => {
   console.log(data);
}

fetchData('https://jsonplaceholder.typicode.com/todos', getData)

//async/await
//promises

//destructring spread operator

// weather application