let myHeading = document.querySelector('h1');
myHeading.textContent = 'Be Kind using Js';

// Arrays
// is a structue that allows you to store multi values in one single variable.
// EXample
let myData = [33, 'Tom', 'Portland'];
myData[0] = 34;

console.log(myData);

myData[1] = 'Tom Walker';

console.log(myData);

myData.push('Oregon');
console.log(myData);

myData.pop();
console.log(myData);

// String data type
let myName = 'Tom Walker';
console.log(myName);
// Number data type
let age = 34;
console.log(age);
// boolean is true or flase

// Array data type
let myCars = ['toyota', 'toyota 4runner'];
console.log(myCars);
console.log(myCars[1]);

// object data types
let person = { firstName: 'Tom', lastName: 'Walker' };
console.log(person);

//  Mixing Data types
let x = ['John', 25];
console.log(x);

let a = 7 + 7;
let b = '7' + 7;
console.log(a, b);

// String Operators

let one = 'show me';
let two = 'the money';
let three = one + ' ' + two;
console.log(three);

let c = 'Hello';

c += ' World!';

console.log(c);
