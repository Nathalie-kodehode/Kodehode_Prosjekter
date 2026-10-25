/******************************************************************************
------------------------------------
!LES OPPGAVETEKSTEN NØYE!
------------------------------------

1. DONE

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet). OK

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen. OK

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner. OK
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"]
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"]
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"]
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"]
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"]
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"]
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"]
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"]
	}
];

let combinedAge = 0;

// Skriv koden for oppgave 1 her

//Hopp over Otto
for (let i = 0; i < people.length; i++) {
 if (people[i].name === "Otto") {
	continue;
 }
//Random by
const tilfeldigBy = Math.floor(Math.random() * cities.length);
people[i].city = cities[tilfeldigBy];

//Er det Mr eller Mrs?
if (people[i].male === true) {
	people[i].title = "Mr.";
} else {
	people[i].title = "Ms.";
}
 //Å nei, eg har blitt 2 år eldre!
 people[i].age += 2;

 //no skal alle kode, dermed basta
 people[i].hobbies.unshift("coding");

 //Kor gamle er alle til saman?
 combinedAge += people[i].age;

}

//No må vi finne ut gjennomsnittsalderen (og runde av slik at det er lettare å lese)
const averageAge = Math.floor(combinedAge / 7);

//Resultata (trommevirvel takk)
console.log(people);
console.log(`Til saman er alle: ${combinedAge} år gammel!`);
console.log(`Gjennomsnittsalderen er: ${averageAge} år!`)


/******************************************************************************
2. DONE

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.

******************************************************************************/
// Skriv koden for oppgave 2 her

//vår d20 terning
function diceRollers (diceroll, sides) {
	//arrayen under skal då vise resultata
const diceArray = [];

//loopen som setning (huskjeregel)
// : "Let (i)t be 0, Loop while (i)t's weak, Add 1 per finished loop"
for (let i = 0; i < diceroll; i++) {
const randomNum = Math.floor(Math.random() *  sides) + 1
diceArray.push(randomNum)
}
return diceArray;
}
console.log(diceRollers(5, 20));

/******************************************************************************
3. DONE

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"

******************************************************************************/
// Skriv koden for oppgave 3 her

//Skriver litt notater her for min eigen del, dont mind me. Dette er den rotete arrayen
const messyText = ["thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];

//Funksonen tidyMessage har ein parameter kalt words. Eg skal sende kvar object i arrayen dit for å fikse dei.
//i for of loopen kaller vi kvar object i arrayen for "word". Lettare å huskje "word of words"
function tidyMessage(words) {
	let tidyWords = [];
	for (let word of words) {
		//Eg ber loopen gjere følgende endringer per ord i arrayen:
		//legg dei redigerte orda i ny gruppering/liste(tidyWords), fjern mellomrom i starten og slutten, fjern komma, gjere alt til småbokstaver
		tidyWords.push(word.trim().toLowerCase());
	}
	//når eg kaller på funksjonen, vil eg at den skal kombinere dei redigerte orda til ein ny array (som vert då TidyMessage)
	//må også leggje til mellomrom, ellers vert alt til 1 ord.
	return tidyWords.join(" ");
}
//send messyText arrayen til tidyMessage funksjonen, fiks den og vis resultatet til meg i consol loggen.
console.log(tidyMessage(messyText));

/******************************************************************************
4. DONE

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`, og bokstaver som matcher `charB` skal 
byttes med `charA`.

Eksempler:

doubleSwap("this is a string", "i", "s")
skal returnere "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
skal returnere "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
skal returnere "whao is ohe ptino tf ohis?"

******************************************************************************/

function doubleSwap(string, charA, charB) {
	// Skriv koden for oppgave 4 her
	let resultat = "";

	for (let char of string) {
		if (char === charA) {
			resultat += charB;
		} else if (char === charB) {
			resultat += charA;
		} else {
			resultat += char;
		}
	}
	return resultat;
}

// "thsi si a itrsng"
console.log(doubleSwap("this is a string", "i", "s"));

// "maybe another approach is necessary"
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));

// "whao is ohe ptino tf ohis?"
console.log(doubleSwap("what is the point of this?", "o", "t"));


/******************************************************************************/