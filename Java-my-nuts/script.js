//Functions in Jajascript

//A fimncion is a block of code dsignerd to do one spedicid task. It lets you write code once and reuise it, keeping your program clean and organized. Hpwoever, the function wont do anything until you call it.
// This is us establishing/creating sayHello
function sayHello() {
  console.log("Hello");
}

// Regular function and hoisting

// This is how we call on the function sayHello
sayHello();

//We are allowed to call the function, before weved coded it because of hoisting. Hoisting places the function at the top (we dont see this happen)

// Function call
//Arrowfunctions HAS to be called below their origin points, otherwise they are treated as they do not exist.

// Arrow Function

// Below is another way to making a function
const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

function messageOne() {
  console.log(
    "This function sends a message to the console. The function does not return any data.",
  );
}

messageOne();

// Return
//info is created here, then we send it outside of the box
function messageTwo() {
  const data = 100;
  return data;
}

console.log(messageTwo());

//If we create a variable with data inseide a function, it is only scoped to that fcuntion, we cant use it outside the fuction.

//We can use the return keytword to send data back to/replace the function call. REMEMBER! It REPLACES the function call!!!

//Only ONE return at a time. As soon tas the reutn runs, we exit the function and no code below inside the function is read is read. Best to keep them at the bottom of the code.

// Functions with Parameters

//Example 1: Hard Coded
function add() {
  return 6 + 7;
}

console.log(add());

// Example 2: soft coded dynamic

// creating parameters
function minus(num1, num2) {
  // using parameters
  return num1 - num2;
}
// parameters result (reusable)
console.log(minus(10, 3));
console.log(minus(50, 30));

//a greeting function
//parameter
const greeter = (name, time) => {
  return `Good ${time}, ${name}`;
};

//argument
console.log(greeter("BITCH", "Morning"));
console.log(greeter("Joe", "Evening"));
console.log(greeter("Hoe", "Day"));

//implicit return in arrowfunctions

const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log(multiply(5, 10));
console.log(multiply(100, 10));

//If we're instantly returning data from an arrow function, we dont need the reutnr keyword or the {} (curly brackets). Its not necessary, but less code.

//Making a calculator using afunction and a switch condition

function calculator(num1, num2, operator) {
  switch (operator) {
    //"in the case of THIS happening, run THIS code."
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Error, invalid operator";
  }
}

console.log(calculator(50, 5, "+"));
console.log(calculator(50, 5, "-"));
console.log(calculator(50, 5, "*"));
console.log(calculator(50, 5, "/"));

//Updating a global varialbe using a function
//Were making a game and we need to adjust the palyers health when they pick up heals or take damage.

let hitPoints = 100;

let maxHP = 200

//make a function. that changes the players health.

function changeHP(direction, amount) {
  //if the direction parameter is set to "uo", we run the code health += 50. (pseudocoding)
  if (direction === "up") {
    hitPoints += amount;
    if (hitPoints > 200) {
        hitPoints = maxHP;
        }
  } else if (direction === "down") {
    //make the hp variable go down a certain amount
    hitPoints -= amount;
  }
  if (hitPoints <= 0) {
    console.log ("You died!")
    hitPoints = 100
}
}

changeHP("up", 20); //picked up small health pack
console.log(hitPoints);
changeHP("down", 100); //fell down a cliff
console.log(hitPoints);
changeHP("up", 500); //huge healthpack
console.log(hitPoints);
changeHP ("down", 2000) //TERRITORIAL ROTBART, LEVEL 80 UNIQUE MONSTER
console.log(hitPoints);

//does health go up or down decided when we cal lthe function?
//it wont always be 50 up or down
//if health is grater than 200, health is 200.

//max hp is 200
//if the health gets to 0, sonsole log (you died) and set thge health to 100 and start the next game.

