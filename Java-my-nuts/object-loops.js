//Objects

//Section 1: What is an Object?
//An ovject is a datatype that stores related data in key value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "designer",
};

console.log(person); //logs entire object
console.log(person.job); //logs a specific value stored in a key - dot notation
console.log(person["name"]); //logs a specific values stored in a key - bracket notation

// Dot vs bracket:
// - Use dot when you know the key name at code time: person.name
// - Use brackets when the key is dynamic or not a valid identifier: person[key]

//Section 2: Creating, Modifying and Deleting

person.country = "Norway"; //creates a new key value pair
person.age = 29;

delete person.job; //deletes the key completely

console.log(person);

//Section 3: Looping through an Object using a "for in loop"

const user = {
  name: "Joe",
  age: 38,
  location: "Stavenger",
  hobbies: "gaming",
};

for (let key in user) {
  console.log(key); //logs the current loops key
  console.log(user[key]); //logs the current key's value
}

//Section 4: Nested objects and arrays

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isMember: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
};

console.log(userData.firstName);
console.log(userData.hobbies[1]);
console.log(userData.address.postCode);

// Section 5: Array of Objects // Object Array

const products = [
  { productName: "Shirt", productId: 5, stock: 32 },
  { productName: "Pants", productId: 6, stock: 5 },
  { productName: "Socks", productId: 10, stock: 22 },
];

//what type of loop? / for of loop becuase were looping over an array

//product.ProductName is product.productID ID 5 and product.stock 32 in stock

for (let product of products) {
  console.log(`${product.productName} is product ID ${product.productId} and has ${product.stock} in stock.`,
  );
}

//We're gonna need a bigger array

const people = [
  {
    name: "Thomas",
    isMember: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMember: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMember: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMember: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    isMember: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    isMember: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    isMember: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    isMember: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

//We want to console log: Name is age, membership and first interest

for (let person of people) {
  //how do we target only the name of the person?
console.log(
    //here we can make a random hobby
    `${person.name} is ${person.age} years old, ${person.isMember ? "is" : "is not"} a member and enjoys ${person.hobbies[Math.floor(Math.random() * person.hobbies.length)]} `
);
}



