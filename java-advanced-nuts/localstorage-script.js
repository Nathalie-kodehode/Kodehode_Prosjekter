//localstorage recap

//lagre objects/info/data på tvers av browser sessions

//Setter localstorage
localStorage.setItem("name", "Sander");
{name: 'Sander'}
//Hente localstorage
const name = localStorage.getItem("name") || "Ingen namn";
console.log(name)

//Number
localStorage.setItem("number", 25);
//tall er ikkje string, bruk Number(localstorage.getitem)
const number = Number(localStorage.getItem("number"));
console.log(number)

//Objekter (konvertere objekt til string)
const user = {
    name: 'Sander',
    age: 25
}

//Lagrer brukeren sin info, men i stringformat
//JSON konverterer user til ein string
localStorage.setItem("user", JSON.stringify(user));
//Konvertere tilbake til objekt
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser);

const myDate = new Date().getMonth() +1
console.log(myDate)