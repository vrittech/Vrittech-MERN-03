//DRY
//Palidrome
const a = '300';
const str = 'asmaddddam';
let newString;


// console.log(test);

// // hoisting
// // let data
// console.log(typeof test);
// let test = 10;

// console.log(typeof test);


// function-- set of block code// specific task/ problem

//normal function
//Fn declaration/definition
//DRY
function checkPalidrome(string) {
   if (typeof string === 'number') {
      newString = string.toString();
   } else {
      newString = string;
   }

   let reverse = '';
   for (let i = newString.length - 1; i >= 0; i--) {
      reverse = reverse + newString[i];
   }

   if (reverse === newString) return 'Palidrome'
   else return 'not palidrome';

   // reverse === newString ? console.log(' palindrome') : console.log('not palindrome');
}


//Fn call
// const ispalidrome = checkPalidrome(str);
// console.log(checkPalidrome(1122));

// console.log(checkPalidrome(3333))
// checkPalidrome('madam');
// checkPalidrome('asda');

// console.log(ispalidrome)


//arrow function
// var testuser = 20;
// function abc() {
//    var testuser = 30
// }
// abc()
// console.log(testuser)



// == & ===, let vs var vs const
// passing fn as value
// console.log(newVariable)
let newVariable = '25';
const sumTwoNums = (num1, num2) => {
   console.log(newVariable)
   var newVariable;
   // return { num1, num2, newVariable }
}

sumTwoNums(5, 6);



//let vs const vs var

// let , const - specfic block of code



//Functions


// DRY

//map  forEach filter

let vritStuds = ['Samrat Sapkotasadas sadad', 'test', 'laxman Samrat Sapkota', 'samik Samrat Sapkota Samrat Sapkota'];

let name = 'Samrat Sapko...';

//slice 

const mapStuds = vritStuds.map((value, index) => {
   if (value.length > 10) {
      // slice
   } else {
      return value;
   }
})

// dom
// object methods, array methods, string methods, async, await, callback

