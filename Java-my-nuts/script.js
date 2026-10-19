//Loops

//A loop is a way to repeat code without writing it multiple times.

// Section 1: Why we use loops?

const names = ["Battler", "George", "Jessica"];

console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);
console.log(`Hei ${names[2]}`);

// Section 2: The `for loop`

//where does it start? i = 0
//when does it end? i < 3 (ends when i reaches 3)
//what changes each loop? i++ (i goes up by 1)
//i = incrementor/index

//Section 3: combine loops with functions and methods

//function that tkaes in an array as a parameter, cleans and onsole logs each element of the array one by one using a loop.

for (let i = 0; i < 3; i++) {
    console.log(`Hei ${names[i]}`);
}

const people = ["   alice", "   BOB", "  chaLIe", "   dEBby"];
const people2 = ["   JiM", "  henRY", "    janET", "      sUSie"];
//we want to console log, clean up and greet everyone.
//we makae it a function to make this reusablee.
//we are running this function call twice.
//inside the function we got a nromal for loop. the main 3 rules. ends at the arrays length.
//we target the array with i
function greetEveryone(array) { 
for (let i = 0; i < array.length; i++) {
const cleanedName = array[i].trim().toLowerCase();
console.log(`Hello, ${cleanedName}`);
}
}

greetEveryone(people);
greetEveryone(people2);

//Section 4: the "for of loop"

//DRY (dont repeat yourself)

const colors = ["red", "green", "blue"];

//we can use a "for of loop" when we want to loop over an array, hitting every element along the way from start to end.
for (let color of colors) {
    console.log(color);
}

// Section 5: The "while loop"

//A while loop will run until a certain criteria is met - useful for when we dont know how many lops are necessary.
//THIS LOOP CAN LOOP INFINTELY IF YOU ARE NOT CAREFUL
let count = 0

while (count <=5) {
console.log(count)
count++    
}

// guessing game using a while loop

//generate a random number between 1-10
const secretNum = Math.floor(Math.random() * 10)+1;
console.log(secretNum);

let guess = 0;

while (guess !== secretNum) {
    guess++
    console.log(`Guessing ${guess}`)

    if (guess === secretNum) {
        console.log (`Correct! The secret number was: ${secretNum}`)
    }
}


// Section 6: populating an array using a loop

//make a function which returns an array of random numbers.
//array is inside box, so it doesnt affect any other arrays

function makeRandomArray(length, sides) {
const resultArray = [];

//we want 5 random numbers sent to the resultArray, between 1-10.
for (let i = 0; i < length; i++) {
const randomNum = Math.floor(Math.random() * sides) + 1
resultArray.push(randomNum)
}
return resultArray;
}
//think dnd dice.
//5 is connected to length, 10 is connected to sides
console.log(makeRandomArray(5, 10));
console.log(makeRandomArray(10, 20));
console.log(makeRandomArray(100, 12));

//Section 7: finding the highest number in an array

function findHighest(array) {
let highestNum = 0;

for (let num of array) {
    if (num > highestNum); {
        highestNum = num;
    }
    console.log(highestNum);
}
return highestNum;
}

const exampleArray = [20, 5, 100, 2, 10, 16]
console.log(findHighest(exampleArray))

//for loop, while loop can break pc if you dont have an end contidion
//make sure this ends up false, becuase other wise the loop will crash
