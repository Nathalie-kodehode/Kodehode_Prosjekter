//loop & objects recap

//llooping through arrays

const fruits = ["Apple", "Banana", "Mango", "Grapes", "Pear"];

//for loop - grans us access to starting index, when we end, how we increment.
//i = increment
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

//for of loop - loops over arrays, gives us access to a variable which stores a different element of the array each loop. The loop will start at the beginning of the array and go through all elements, then stop.
//logs one item inside the array at a time, ends when it reaches end of array.
for (let fruit of fruits) {
console.log(fruit)
}

//section 2: looping with conditions

const numbers = [12, 5 , 8, 130, 44, 3, 22];

for (let number of numbers) {
        //if the current number being looped over is less than 10, skip it.
 if (number < 10) {
continue;
 }
    //if the current number being looped is over 100, stop the loop.
 if (number >= 100) {
    break;
 }
 
console.log(number);
}

//While loop - sets a condition to run the loop, MAKE SURE EVENTUALLY IT WILL BE FALSE! Otherwise we gen an infinite loop :(

const ranNum = Math.floor(Math.random() * 10) + 1
let guess= 0

while (guess !== ranNum) {
    guess++
    console.log(`Guessing: ${guess}`)
    if (guess === ranNum) {
        console.log (`Correct! The number was: ${ranNum}`);
    }
}

//Basic Object Review

const movie = {
  title: "The Matrix",
  stars: [
    "keanu reeves",
    "laurence fishburne",
    "carrie-ann moss",
    "hugo weaving",
  ],
  runtime: "2h16m",
  year: 1999,
};

console.log(movie);
console.log(movie.title);
console.log(movie.stars[3]);

//change runtime to 2h30min"
movie.runtime = "2h30min"; //change value in a a key
console.log(movie);

movie.year = 2000; //change the value in a key
console.log(movie);

movie.rating = 5; //create a new value-pair key
console.log(movie);

//delete a key value pair
delete movie.runtime;
console.log(movie);


//Section 5 - Looping through an object using for in loop / dynmaic keys
for (let key in movie) {
console.log(key); //current key were looping over
console.log(movie[key]); //current key's value
}

//Section 6: Array of objects

const fruits2 = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    countryOfOrigin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    countryOfOrigin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    countryOfOrigin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    countryOfOrigin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    countryOfOrigin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    countryOfOrigin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    countryOfOrigin: "Costa Rica",
  },
];

//Describe each fruit using a loop

//PINEAPPLE is a BROWN fruit from COSTA RICA.
for (let fruit of fruits2) {
    console.log(`${fruit.name} is a ${fruit.color} fruit from ${fruit.countryOfOrigin}`);
}

// --------------------------------------
// Section 7: Find the Cheapest Fruit
// --------------------------------------

let cheapest = null;
let lowestPrice = Infinity;

for (let fruit of fruits) {
  if (fruit.pricePerKg < lowestPrice) {
    lowestPrice = fruit.pricePerKg;
    cheapest = fruit.name;
  }
}

console.log(
  `The cheapest fruit is ${cheapest}, costing ${lowestPrice} kr. per kg.`,
);

// --------------------------------------
// Section 8: Adding and Removing Properties in a Loop
// --------------------------------------

// Add a "good" property to every fruit
for (let fruit of fruits2) {
  fruit.good = true;
}

console.log(fruits2); // now all have "good: true"

// Remove the "good" property
for (let fruit of fruits2) {
  delete fruit.good;
}

console.log(fruits2); // back to original

// --------------------------------------
// Section 9: Object in Function
// --------------------------------------

function describeFruit(fruit) {
  return `${fruit.name} contains ${fruit.calories} calories per 100g and costs ${fruit.pricePerKg} kr. per kg.`;
}

console.log(describeFruit(fruits2[0]));

// --------------------------------------
// Section 10: Summary
// --------------------------------------

// ✅ Use loops to repeat tasks or go through arrays and objects.
// ✅ for...of is great for typical arrays;
// ✅ for...in is used for object keys.
// ✅ Objects store data in key-value pairs.
// ✅ Arrays can contain multiple objects. (Object arrays)
// ✅ Loops can combine with logic, conditions, and functions.
// ✅ You can add, modify, or delete properties dynamically.