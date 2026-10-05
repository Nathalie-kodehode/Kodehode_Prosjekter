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

// Operators

const num1 = 10;
const num2= 5;

console.log (num1, num2);

// Arithmetic operators
console.log (num1 + num2); //Plus
console.log (num1 - num2); //Minus
console.log (num1 * num2); //Multiplication
console.log (num1 / num2); //Division
console.log (num1 % num2); //Modulus (remainer)
// More examples of modulus below
console.log (10 % 5);
console.log (20 % 17);

// Using the + operator to concatenate (add together) strings
const firstName = "John";
const lastName = "Halo";
const fullName = firstName + " " + lastName;

console.log (firstName);
console.log (lastName);
console.log (firstName + " " + lastName)
console.log (fullName)

//Compund Assignments

let counter = 0;

// Shortut, do not repeat yourself
counter += 1;
console.log (counter);

counter -= 5;
console.log (counter);

// Increment/Decrement by 1
let productStock = 10;

productStock--;
console.log (productStock);

// Comaprison
// These operators compare alues and return a boolean (true or false)

console.log (15 > 20); //greater than > (false)
console.log (15 < 20) //less than < (true)
console.log (15 >= 15) //greater than or equal to > (true)
console.log (15 <= 15) //less than or equal to > (true)

console.log (15 == 15) // equal to (single = is used for assigning values)
console.log (15 === "15") //strictly equal (does take into account value type)

console.log (15 != 20) //NOT equal to

// typeof operator (tells you what value type your variable has)

const myNum = 100
const myString = "hello there"
const myBool = true

console.log (typeof myNum) //we learn this is a number value