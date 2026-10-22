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
2. FERDIG FIXED

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/
// Skriv koden for oppgave 2 her
//make function, then call

const kulLiten = "Dette er kult.";
console.log(kulLiten);

function nyTekst (kulStor) {
kulStor = kulStor.toUpperCase();
kulStor = kulStor.replace(".", "!");
  return kulStor;
}
console.log(nyTekst(kulLiten));



/******************************************************************************
3.FERDIG FIXED

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

/******************************************************************************
4.FERDIG FIXED

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

console.log(trimArray(colorArray));
console.log(trimArray(numArray));

/******************************************************************************
5. FERDIG FIXED

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

//Eg har valgt å skrive koden på alle 3 eksempler for min eigen læring. 
//Eg lærer godt frå repetetisjon, så når eg gjer dette då sitter det betre i hovudet.

//Eksempel 1
const minSetning1 = "    Javascript er vanskeleg    ";

function fixedSetning (nySetning) {
nySetning = nySetning.trim();
nySetning = nySetning.replace("vanskeleg", "gøy");
return nySetning;
}
console.log(fixedSetning(minSetning1));

//Eksempel 2
const minSetning2 = " Det er vanskeleg å bruke metoder ";

function fixedSetning2 (nySetning2) {
nySetning2 = nySetning2.trim();
nySetning2 = nySetning2.replace("vanskeleg", "gøy");
return nySetning2;
}
console.log(fixedSetning2(minSetning2));

//Eksempel 3
const minSetning3 = "   vanskeleg        ";

function fixedSetning3 (nySetning3) {
  nySetning3 = nySetning3.trim();
  nySetning3 = nySetning3.replace("vanskeleg", "gøy");
  return nySetning3;
}
console.log(fixedSetning3(minSetning3));

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
