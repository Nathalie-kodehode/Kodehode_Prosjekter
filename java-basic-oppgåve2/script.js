/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1. FERDIG FIXED

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/
// Skriv koden for oppgave 1 her

function checkOddEven(checkNum) {
  //modulo deler talet på 2 og sjekker om talet er oddetall eller partall
  if (checkNum % 2 === 0) {
    //talet er delt på 2 og restetalet ender opp på 0 (sant).
    return `${checkNum} er eit partall!`;
  } else {
    //talet er delt på 2, men restetalet ender ikkje på 0 (usant).
    return `${checkNum} er eit oddetall!`;
  }
}
//console log for oddetall
console.log(checkOddEven(3));
//console log for partall
console.log(checkOddEven(8));

/******************************************************************************
2. FERDIG

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/
// Skriv koden for oppgave 2 her
//make function, then call

const kulLiten = "Dette er kult!";
function kulStor (kulLiten) {
  return 
}

console.log(kulStor(kulLiten.toUpperCase()));


/******************************************************************************
3.FERDIG

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/
// Skriv koden for oppgave 3 her
const tid = 24;
const namn = "Frode";
//noter dette ned i notatbok for future ref
function greetName(tid, namn) {
  //Mellom klokka 0 og 5
  if (tid >= 0 && tid <= 5) {
    return `God Natt ${namn}`;
  }
  //Mellom klokka 6 og 11
  else if (tid <= 11 && tid >=6) {
    return `God Morgen ${namn}`;
    //Mellom klokka 12 og 17
  } else if (tid <= 17 && tid>= 12) {
    return `God Dag, ${namn}`;
    //Mellom klokka 18 og 23
  } else if (tid <= 23 && tid >= 18) {
    return `God Kveld, ${namn}`;
    //Klokka er vel over 24
  } else
  {
    return `Ugyldig Tid`;
  }
}

console.log(greetName(tid, namn));
console.log(greetName(3, "john"));
console.log(greetName(16, "Nathalie"));

/******************************************************************************
4.FERDIG

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/
// Skriv koden for oppgave 4 her

const colorArray = ["Rød", "Grønn", "Blå", "Gul"];
//console.log(colorArray);
//const newColor = colorArray;

const numArray = ["En", "To", "Tre", "Fire", "Fem", "Seks"];
//console.log(numArray);
//const newNum = numArray;

function trimArray(arr){
  arr.shift();
  arr.pop();

  return arr;
}

const myArr = ["Toyota", "Opel", "Lexus", "Ford", "Audi", "BMW", "Volvo"];
const endretArr = trimArray(myArr);
console.log(endretArr);
console.log(trimArray(endretArr));

console.log(trimArray(colorArray));
console.log(trimArray(numArray));


function Add(num = 1, num2 = 10, num3 = 100){
/*  console.log(num);
  console.log(num2);
  console.log(num3);
*/
   let sum = num + num2 + num3;
  return sum;
}

console.log(Add());
console.log(Add(5));
console.log(Add(5,6));
console.log(Add(5,6,7));

console.log(1+10+100);
console.log(5+10+100);
console.log(5+6+100);
console.log(5+6+7);



/*
console.log(Add(2, 3));
console.log(Add(5, 8));
console.log(Add(1, 7));
console.log(Add(2, 1));
console.log(Add(4, -2));
console.log(Add(-5, 19));
console.log(Add(0, -3));
*/
/*
newColor.shift();
newColor.pop();
console.log(newColor);

newNum.shift();
newNum.pop();
console.log(newNum);
*/

/******************************************************************************
5. FERDIG

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/
// Skriv koden for oppgave 5 her

const myStr = "Hei";
const myStr2 = "på";
const myStr3 = "deg";

console.log("Frode sier: " + myStr+" "+myStr2+" "+myStr3 + " din gamle sjokolade!"); // Konkatinering (Concatination). slår sammen flere strings.
console.log(`Frode sier: ${myStr} ${myStr2} ${myStr3} din gamle sjokolade!`); //Setter inn verdier inn i stringen du har.

const minSetning = "    Javascript er vanskeleg    ";


function fixedSetning (minSetning) {
minSetning.trim().replace("vanskeleg", "gøy");

return minSetning;
}

/******************************************************************************
6. FERDIG FIXED

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/
// Skriv koden for oppgave 6 her

//console.log(items);

items.shift();
console.log(items);

const newItems = items.toSpliced(2, 1, "Linjal");
console.log(newItems);

newItems.splice(0, 2, "Markeringspenn");
console.log(newItems);

console.log(newItems.join("|"));
