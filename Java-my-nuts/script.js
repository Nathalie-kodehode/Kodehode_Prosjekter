//Loops

//A loop is a way to repeat code without writing it multiple times.

// Section 1: Why we use loops?

const names = ["Battler", "George", "Jessica"];

console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);
console.log(`Hei ${names[2]}`);

// The `for loop`

//where does it start? i = 0
//when does it end? i < 3 (ends when i reaches 3)
//what changes each loop? i++ (i goes up by 1)
//i = incrementor/index

for (let i = 0; i < 3; i++) {
    console.log(`Hei ${names[i]}`);
}