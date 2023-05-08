// JS Operators


//Assignment operator
let x = 10;
const y = 10;

//Arithmetic operator

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(y % x)

// let vs var vs const

//Comparison operator return in boolean expression

//It checks only value
console.log('x==y', x == y);
//It checks only value & type
console.log('x===y', x === y);
//It checks value and type
console.log(x !== y)
console.log(x >= y)
console.log(x < y)

//Logical operato
//logical and
console.log("Logical and", x - y === 10 && y && x > y && x != y);
console.log("Logical or", x === y || x > y || x < y);


//Ternary operator



// Conditional statement

// Odd number or even number

let num = 14;

//(true or false) ?  clg('abc') : clg('def')
// (num % 2 === 0) ? console.log('is a even number') : console.log('is a odd number');


//Logical and logical or

// num !== undefined && (num % 2 === 0) && console.log('number');


// const number = prompt("Enter a string");

// const num = Number(number);

// if (num < 0 && num === 0) {
//    alert(`${num} is a negative num`);
// } else if (num % 2 === 0) {
//    alert(num + ' ' + ' is a even num');
// } else {
//    alert(`${num} is a odd num`);
// }
// JSON
// key: value
let vritStudent = {
   "full name": 'Samik',
   age: 25,
   "isStudying": [true],
   "isUer": false,
}
console.log(vritStudent.isStudying[0])



// console.log(vritStudent.age)
// console.log(vritStudent["full name"])
// console.log(vritStudent["age"])

const arrayData = [
   {
      lastname: 'dhakal',
      age: 30
   },
   vritStudent,
   "Quick brown fox",
   true,
   "adsads",
   "ads",
];


//For loop
// for  of
// map
// forEach

let columnNames = Object.keys(vritStudent);

console.log(columnNames);

// for (let a of columnNames) {
//    if (a === "full name") {
//       console.log(a)
//    }
// }


// for (let i = 0; i < arrayData.length; i++) {
//    console.log(arrayData[i], i);
// }

//Prime numbers 3,5,7,13,11
//Palindrome 1221 madam



