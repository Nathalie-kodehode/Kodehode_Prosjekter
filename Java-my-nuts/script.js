//Functions and Methods RECAP

//Check if an array includes an item. (function, array, ternary, methods)

// Our shipping list
const shoppingList = ["milk", "bread", "cheese", "pasta"];
const gamesList = [
  "Mario Kart",
  "Hello Kitty Island Adventure",
  "Control Resonant",
  "Counter Strike",
  "Pang",
  "Animal Crossing",
  "Dragon Quest 11",
  "Call of Duty",
];

// the function checks if there is an item inside our array
function checkItem(item, array) {
  if (array.includes(item)) {
    // remember to use template string to make this bs easier to type in
    return `The array includes ${item}`;
  } else {
    return `${item} was not in the array`;
  }
}
//various results
console.log(checkItem("milk", shoppingList));
console.log(checkItem("pasta", shoppingList));
console.log(checkItem("cheese", shoppingList));
console.log(checkItem("hamburger", shoppingList));
console.log(checkItem("Dragon Quest 11", gamesList));

//convert a sentence into kebab case (function, methods)

function toKebabCase(rawString) {
  // the order of the commands below ARE VERY IMPORTANT! KEEP THIS IN MIND
  const kebabbedString = rawString.trim().toLowerCase().replaceAll(" ", "-");

  return kebabbedString;
}

const mySentence = "     Hello World From JavaScript    ";
// "hello-world-from-javascript"

console.log(toKebabCase(mySentence));
console.log(toKebabCase("stroking my PEANITS"));

// Mkae a funtion to check if a word is apalindrome

function checkPalindrome(word) {
  //DO NOT FORGET THE FUCKING BRACKETS
  if (word.toLowerCase() === word.toLowerCase().split("").reverse().join(""))
    return `${word} is a palindrome`;
  else {
    return `${word} is NOT a palindrome`;
  }
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("Bingus"));
console.log(checkPalindrome("ho-oh"));

//we cannot use .reverse() on a string, array only.
// instead concert string to array, reverse it and then convert back to string.

//split to array, reverse then join back to string
console.log("banana".split("").reverse().join(""));

//Math.random()
//0.0 - 0.999
console.log(Math.random());

console.log(Math.random() * 10);

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 10) + 1);

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
  "alakazam",
];

//first mon, starts at 0
console.log(pokemon);

const randomIndex = Math.floor(Math.random() * pokemon.length);
console.log(randomIndex);

console.log(pokemon[randomIndex]);

//make a rock paper scissors game

const rockPaperScissors = (player1, player2) => {
  switch (player1 + player2) {
    //player 2 wins
    case "rock" + "paper":
    case "paper" + "scissors":
    case "scissors" + "rock":
      return "player 2 wins";
      //player 1 wins
    case "paper" + "rock":
    case "scissors" + "paper":
    case "rock" + "scissors":
      return "player 1 wins";
      //a draw
          case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "It's a tie";
      default:
        return "Error"
  }
};

console.log(rockPaperScissors("rock", "paper"));
console.log(rockPaperScissors("scissors", "paper"));
console.log(rockPaperScissors("rock", "rock"));

const answerArray = ["rock", "paper", "scissors"]

const ranIndex = Math.floor(Math.random() * 3)
const ranIndex2 = Math.floor(Math.random() * 3)
console.log(ranIndex)
console.log(ranIndex2)

const aiAnswer = answerArray[ranIndex]
const aiAnswer2 = answerArray[ranIndex2]
console.log(aiAnswer)

console.log(rockPaperScissors(aiAnswer, aiAnswer2));



//the computers answer will be randomized

