/******************************************************************************
OPPGAVE 1 FERDIG

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2 FERDIG

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst) FERDIG
- Number (tall) FERDIG
- Boolean (sann/usann) FERDIG
- Array (liste) FERDIG

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

// STRING
let peanutString = "Eg er ein peanøtt" //Han er ein peanøtt
console.log (peanutString);
peanutString = "Nei, eg er IKKJE ein peanøtt" //No er han ikkje ein peanøtt
console.log (peanutString);

// NUMBER
const bananerNumber = 150 //Antall bananer eg har
console.log (bananerNumber)

// BOOLEAN
let småballerTrue = true //(truth) ballene mine er små... :(
console.log (småballerTrue);
let storeballerFalse = false //(lie) ballene mine er STORE >:)
console.log (storeballerFalse);

// ARRAY
let handlelisteArray = ["ost", "agurk", "tortilla"] //Jævla trist taco om du berre skal ha dette her LOL
console.log (handlelisteArray[0]); //0 = Ost (litt usikker på kvifor den starter på 0 og ikkje 1, er sikkert noko meg må define sjølv?)
console.log (handlelisteArray[1]); //1= Agurk
console.log (handlelisteArray[2]); //2 = Tortilla

/******************************************************************************
OPPGAVE 3 FERDIG

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

const num1 = 1;
const num2 = 5;
const num3 = 10;

console.log (1, 5, 10)

//Her brukar eg kun variablene
console.log (num1 + num2); //Pluss
console.log (num3 - num1); //Minus
console.log (num3 * num3); //Gonging
console.log (num3 / num2); //Deling
console.log (num1 % num3); //Modulus

//Her prøver eg ut num1-3 og andre tall
console.log (num1 + 80); //Pluss
console.log (30 - num3); //Minus
console.log (num3 * 50); //Gonging
console.log (89 / num2); //Deling
console.log (67 % num3); //Modulus


//Lager namn og leggjer dei saman. Bruker også shift + ` teknikken vi lærte i dagens leksjon, det var meir efficient enn å bruke "_" om og om igjen.
const firstName = "John";
console.log (firstName);
const lastName = "Halo";
console.log (lastName);
const fullName = (`${firstName} ${lastName}`);
console.log (fullName);


/******************************************************************************
OPPGAVE 4 FERDIG

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

// Skriv koden for oppgave 4 her

let userName = " ";
let userAge = 18;
let userIsLoggedIn = true;
let userIsBlocked = false;
let goToPage = "/home";

//Om personen har skrevet inn brukernamn, er 18 eller eldre og er pålogga, så går alt greit.
if (userName === " " && userAge >= 18 && userIsLoggedIn) {
    console.log ("Velkommmen tilbake!");
    //Om dei ikkje har skrevet inn brukarnamn, er under 18 og ikkje pålogga, så vert dei blokkert.
} else if (userName === "" && userAge <= 0 && userIsBlocked) {
    console.log ("Du er blokkert frå å besøke nettsida")
}
//om det er noko anna, så får dei feilmelding
else {
    console.log ("Det har skjedd ein uventa feil. Vennligst prøv igjen seinare.");
}

/******************************************************************************
OPPGAVE 5 FERDIG

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

// Skriv koden for oppgave 5 her

const userMale = false;
//venstre er alltid sann, og høgre er alltid falsk. Derfor skal eg få opp "Mrs" på console log om dette er rett.
let userTitle = userMale ? "Mr." : "Mrs.";
console.log ("User:", userTitle);

