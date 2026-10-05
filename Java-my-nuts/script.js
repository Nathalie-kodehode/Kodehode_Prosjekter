// Intro to Javascript

// We can use comments in JS that look like this.

// console.log

console.log ("hello world");

console.log (10);

console.log (5*5);

// camelCase (strongly recommended in JS)
// This is when we write the first words letter in lwercase and subsewuent first letters of words in upper case. its used for namring cariables and functions in jacascript.

// Data Types

// String (text in JS)

let exampleString = "This is a string";
console.log (exampleString);

// Numbers
let myExampleNumber = 100
console.log (myExampleNumber)

// Boolean (True or False)
let exampleTrue = true;
let exampleFalse = false;

console.log (exampleTrue);
console.log (exampleFalse);

// Array
// Arrays use Indexes to track where elements are inside. Index starts at 0.
let exampleArray = ["milk", "cheese", "cum"];
console.log (exampleArray);
console.log (exampleArray[1]);

// Object - store key-value pairs (will learn more in future lesson)
let person = {
name: "Alice",
age: "25",
isStudent: true,
};

console.log (person.isStudent);

// Undefined variable - declared but not assigned a value.
let exampleUndefined;
console.log (exampleUndefined);

// Null
let exampleNull = null;
console.log (exampleNull);

// Null we have deliberately given no value. Undefined is that we havent added a value.

// Let - declare our variables
// let vs const
// use let when the value of the variable might change, and const when it should remain constant.

let changeableMessage = "Babe come back, I can change"
console.log (changeableMessage);
changeableMessage = "Babe, I've changed"
console.log (changeableMessage);

let penisMessage = "my dick smol"
console.log (penisMessage);
penisMessage = "my dick BIG"
console.log (penisMessage);

// Constant. A value that will never change.

// Use const unless we have to use let.

const fixedValue = "I WILL NEVER CHANGE"
console.log (fixedValue);
