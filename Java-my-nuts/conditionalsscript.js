// Conditionals

// If / else if / else

// basic if statement

let temperature = 25;

// If the temperature is greater than 25, display this message. If else, display the other messages.
if (temperature > 25) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a warm day.");
} else if (temperature > 0) {
  console.log("It's a chilly day!");
} else if (temperature <= 0) {
  //Use this to inlcude the limit
  console.log("God DAMN it's cold!");
} else {
  console.log("an error has occured");
}

// >= greater than or equal to
// <= less than or equal to
//   // > greater than
// < less than

//    Logical Operators && (AND) || (OR)

// AND &&

let age = 18;
let hasLicense = true;
let points = 0;

// if the person is 18 or older, has the license and has less than 8 marks, they can drive
if (age >= 18 && hasLicense && points < 8) {
  console.log("You are old enough to drive");
} else {
  console.log("You are not allowed to drive.");
}
// If comes first, else if comes second, else comes last!
// OR ||
let day = "Friday";
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend! Yippie!");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday...");
} else {
  console.log("Invalid day detected!");
}

// Using both && || in the same conditional

let referal = false;
let firstShop = true;
let premiumMember = false;

// if the user has a referal and it's their first shop, they get a discount.
// Premium members always get a discount.

if ((referal && firstShop) || premiumMember) {
    console.log ("You get a discount!")
} else {
    console.log ("No discount, consider becoming a premium member!")
}

// Ternary (its a container of 3 expressions)

let isMember = false;

// if the user is a member (true), they pay 50kr delivery. Otherwise (false) it's 100 kr.

// if (isMember) {
//     console.log ("Delivery: 50 kr");
// } else {
//     console.log ("Delivery: 100 kr");
// }

let deliveryCost = isMember ? "50 kr" : "100 kr"; //left is ALWAYS true, right is ALWAYS false
console.log ("Delivery:", deliveryCost);

// Switch Statement

//A switch statement checks a calue against multiple cases

let fruit = "banana"

switch (fruit) {
    case "apple": 
    console.log ("Apples are delicious!")
    break
case "banana":
    console.log ("Bananas are a great source of potassium!");
    break
    case "orange":
        console.log ("Oranges are full of vitamin C!")
        break
        default:
            console.log ("Unknown fruit detected!")
}

//Use if/ else if for: complex or varied conditions
// the switch for one variable with many fixed values

// Truthy and Falsey

let value = []

if (value) {
    console.log ("The value is true!")

} else {
    console.log ("The value is false!")
}
//True
//A string with value came back true
//A positive number
//A negative number
//Array with values inside
//Empty brackets (it assumes the brackets itself are a value)
//Emoty object

//False
//A string with no value inside came back false
//The number 0 (it assumes there is no value)
//Null
//Undefined
//NaN (not a number)