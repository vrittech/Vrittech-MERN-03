//methods -> split, reverse, join

//push, pop, shift, unshift, 

''

// const str = 'abc';

// const newArr = str.split('');
// console.log('newArr', newArr)

// newArr.reverse();
// console.log(newArr);

// const joinedStr = newArr.join('');

// console.log(joinedStr)

// const arr = [
//    { id: 1 }, { id: 2 }]

// arr.push("samrat");

// console.log(arr)
// arr.pop();

// const data = [1, 2, 3, 4, 5];


// console.log(arr)

// arr.shift();

// console.log('shift', arr);
// console.log('unshift', arr.unshift({ id: 4 }));

// console.log(arr)

//slice, splice

// console.log(new Date().getFullYear())

// console.log(Math.floor(5.9))
// console.log(Math.ceil(5.1))
// console.log(Math.round(5.6))
// console.log(Math.round(5.1))

// const firstName = document.querySelector('#firstName');

// console.log(firstName);
// firstName.value = 'Kunwor';

// console.log(firstName)

// EVENT HANDLERS

//Mouse Event - click, dblclick, mousehover, mousedown, mouseup
//Keyboard event - keydown, keyup,
// form event -focus, blur, change,

// const button = document.getElementById("submit-handle");

// get input value
// const handleSubmit = (event) => {
//    const firstName = document.querySelector('#firstName').value;

// }

// button.addEventListener('click', handleSubmit)

const inputType = document.querySelector('#inputType');
const form = document.querySelector('#form');
const labelValue = document.querySelector('#labelValue');

labelValue.addEventListener('keyup', (event) => {
   const keyPressed = event.key;
   console.log(keyPressed)

   if (keyPressed === 'Enter') {
      const type = inputType.value;
      const label = labelValue.value;

      const labelInput = document.createElement('label');
      const div = document.createElement('div');

      let input;
      if (type === 'textarea') {
         input = document.createElement('textarea');
      } else {
         input = document.createElement('input');
      }
      //label value add
      labelInput.innerHTML = label;
      //input type add
      input.type = type;
      input.classList.add('form-control');

      labelInput.classList.add('form-label');
      div.classList.add("mb-3");
      //submit doesnot require label input
      if (type !== 'submit') {
         div.appendChild(labelInput)
      }
      if (type === 'submit') {
         input.classList.add('btn');
         input.classList.add('btn-success');
         input.value = label;
      }

      div.appendChild(input)

      form.append(div);

   }
})