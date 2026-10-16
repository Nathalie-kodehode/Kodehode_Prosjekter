/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/
// Skriv koden for oppgave 1 her
const oddeTall = [1, 3, 5, 7, 9];
const parTall = [0, 2, 4, 6, 8];


function checkNumber(myNumber, oddeTall, parTall) {
  if (myNumber === oddeTall) {
    return `${myNumber} er eit oddetall`;
  } else (myNumber === parTall); {
    return `${myNumber} er eit partall`;
  }
}

console.log(checkNumber(5));

/******************************************************************************
2. FERDIG

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/
// Skriv koden for oppgave 2 her

const kulTekst = "Dette er kult!";
console.log(kulTekst.toUpperCase());

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
const tid = 3;
const namn = "Frode";

function greetName(tid, namn) {
  //Mellom klokka 0 og 5
  if (tid <= 0) {
    return `God Natt ${namn}`;
  }
  //Mellom klokka 6 og 11
  else if (tid <= 10) {
    return `God Morgen ${namn}`;
    //Mellom klokka 12 og 17
  } else if (tid <= 17) {
    return `God Dag, ${namn}`;
    //Mellom klokka 18 og 23
  } else if (tid <= 23) {
    return `God Kveld, ${namn}`;
  } else tid <= 24;
  {
    return `Ugyldig Tid`;
  }
}

console.log(greetName(tid, namn));

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
console.log(colorArray);
const newColor = colorArray;

const numArray = ["En", "To", "Tre", "Fire", "Fem", "Seks"];
console.log(numArray);
const newNum = numArray;

newColor.shift();
newColor.pop();
console.log(newColor);

newNum.shift();
newNum.pop();
console.log(newNum);

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

const mySentence = "    Javascript er vanskeleg    ";
const fixedSentence = mySentence;

console.log(fixedSentence.trim().replace("vanskeleg", "gøy"));

const myMethods = "  Det er vanskeleg å bruke metoder   ";
const fixedMethods = myMethods;

console.log(fixedMethods.trim().replace("vanskeleg", "GØY"));

/******************************************************************************
6. FERDIG

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

console.log(items);

items.shift();
console.log(items);

const newItems = items.toSpliced(2, 1, "Linjal");
console.log(newItems);

newItems.splice(0, 2, "Markeringspenn", "Markeringspenn");
console.log(newItems);

console.log(items.join("|"));
