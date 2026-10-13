// Methods

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it. Some methods alter the original piece of data, others don't alter the original!

//Section 1.0
//String Methods

const text = "     Hello, JavaScript World World!   ";
console.log(text);
console.log(text.trim()); //trim removes white space from both ends
//doesnt alter our original string.

//converts string to CAPSLOCK
console.log(text.toUpperCase());
//converts string to lowercase
console.log(text.toLowerCase());
//returns starting index of the first instance of the passed in text
console.log(text.indexOf("JavaScript"));
//slice removes parts of the string, decided by the index numbers (5, 9). Srtating index is included end index is not included.
console.log(text.slice(5, 10));
//replace replaces X with Y in the (). But only the first instance.
console.log(text.replace("World", "Universe"));
//replace replaces all instances of the passed in word with the new one.
console.log(text.replaceAll("World", "Galaxy"));
//returns the unicode number of charater at passed in index. Capital H (at index 5) is unicode nr 72
console.log(text.charCodeAt(5));
//repeats the passed in text, decided by the number in the ()
console.log(text.repeat(3));
//counts the length of the string. the sentence above has 38 characters. Very useful, for arrays
console.log(text.length);

// Section 1.1
//Converting a String into an Array

//splits everything up in the sentence
console.log(text.split(""));
//splits up sentence into spaces and words
console.log(text.split(" "));
//trim removes the empty spaces
console.log(text.trim().split(" "));
//the split removes the letter 0, so we get hell, havascript w, rid w, osv
console.log(text.trim().split("o"));

//Section 1.2
//Converting a String into a Number

let numberString = "123.45xyz";
//converts a string into a number. returns NaN (not a number) if any part of the string is invalid.
console.log(Number(numberString));
//Converts a string into a whole number, ignores text and decimals.
console.log(parseInt(numberString)); //int stands for integer
//same as parseInt, but doesnt ignores decimals. But still ignores text.
console.log(parseFloat(numberString));

//Section 2.0
//Array Methods
//even though colors is a const we can use man y different methods to alter theelements insdeit he arra. we still cant rassign colors with =.

const colors = ["Red", "Green", "Blue"];
//specifiy which color by number
console.log(colors[0]);
//3 elements
console.log(colors.length);
//push adds "Yellow" to the end of the array as a new element at the end, without having to manually adding it it ourself.
colors.push("Yellow");
console.log(colors);
//Pop removes the last element of the array, like popping a balloon. But does affect the original array.
colors.pop();
console.log(colors);
//unshift adds a new element at the start of the array
colors.unshift("Purple");
console.log(colors);
//shift removes the first element of the array
colors.shift();
console.log(colors);
//replaces elements in the array, alters the original array.
colors.splice(0, 2, "Orange", "Pink");
console.log(colors);
//works like splice, but DOESNT alter the original
const splicedColors = colors.toSpliced(1, 1, "Brown");
console.log(splicedColors);

const numbersArray = [3, 1, 4, 1, 5, 9, 5];
const sortedNumbers = numbersArray.toSorted();
//makes a copy of the array and sorts the elemts insdie
console.log(sortedNumbers);
console.log(numbersArray);
//sorts the original array
numbersArray.sort();
console.log(numbersArray);

const stringArray = ["hello", "this", "is", "an", "array", "of", "strings"];
//sorts the strings alphabetically
stringArray.sort();
console.log(stringArray);

console.log(sortedNumbers[6]);
//targets element at index 6
console.log(sortedNumbers.at(6));
//-number goes towards left, targets the last elemnt in the array
console.log(sortedNumbers.at(-2));
//makes a copy of the orignal array and reverses the order of the elements in the array
const reversedArray = sortedNumbers.toReversed();
console.log(reversedArray);

//Section 2.1
//Converting an array to a String

//combines the elements in an array, but without space. use "_" to ensure the elements have space between.
console.log(colors);
console.log(colors.join(" "));

//Section 3
//Number Methods

const myNum = 3.98493573097509359;

console.log(myNum);
//rounds up to the nearest number, and converted the number into a string
console.log(myNum.toFixed(2));
//returns our number in exponential notation if we have a big number, this can take less space on screen
console.log(myNum.toExponential());

//Section 3.1
//Converting a Number into a String
//turns number into string
console.log(myNum.toString());

const rawString = "                 JavaScript is fun!          ";
const processedString = rawString;
//remove whitespace from front and back
//replace "fun" with "aweseom"
//make it uppercase
console.log(rawString
    .trim()
    .replace("fun", "awesome")
    .toUpperCase()
);



//convert from array to string
//make the string lowercase
const wordsArray = ["Hello", "worLD"]

const cleanedArray = wordsArray.join(" ").toLowerCase();
//if you get an error, you might be using the wrong method on the wrong array!
console.log(cleanedArray);

const exampleNum = 34544.0848434

const cleanedNum = exampleNum.toFixed(2).repeat(2);

//TOSTRING IS ALREADY BUILT INTO TOFIXED
console.log(cleanedNum)

//Sidequest

//Math with CAPITAL M FIRST
//math.round rounds the passed in number to the nearest whole number/integer.
console.log(Math.round(123.45));
//math.ceil rounds it UP to the ceiling
console.log(Math.ceil(123.45));
//rounds down the passed in number to the nearest whole number
console.log(Math.floor(123.45));

//Random number

//Math.random gives us a random number between 0.000000 - 0.9999999
console.log(Math.random());
//random number between 0.0000 - 9.99999
console.log(Math.random()*10);

//rnadom num between 0 - 9

console.log(Math.floor(Math.random()*11));
console.log(Math.floor(Math.random()*11));
console.log(Math.floor(Math.random()*11));

//random numb between 1- 10
console.log(Math.floor(Math.random()*10 + 1));
