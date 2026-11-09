//Callback Funskjon
//function vi kan kjøre seinare når den trengs
const logger = (resultat) => {
  console.log(`Resultatet ble: ${resultat}`);
};

const add = (a, b, callbackFn) => {
  callbackFn(a + b);
};

const subtract = (a, b, callbackFn) => {
  callbackFn(a - b);
};

add(1, 1, console.log); //console logge 2
add(2, 2, logger); //resultatet ble 2
// add(3, 5, alert) lager popup vindu

//lowkey føler at vi har allereie gått gjennom dette med han Joe????
//bergensern er litt yap king
//logger høyrast ut som ein slur som ikkje har blitt funnet opp ennå
//lowkey jævla distraherande at riley og marius sitter her og jobber med lekser når eg prøver å følgje med på lecture

//Namngitte vs anonyme callback funskjoner
//same konseptet, sende inn i funsjon som vi kan bruke seinare. har funksjonen namn eller ikkje?
subtract(7, 2, console.log);
//logger er ein namngitt funskjon fordi vi kan referere den
subtract(8, 4, logger);
//under er anonym funskjon
subtract(30, 20, (result) => {
  console.log(`Anonym funsjon sitt resultat: ${result}`);
});

//MAIN FORSKJELL, anonym er SINGLE USE, namngitt er REUSEABLE

//.map(), .filter(), .forEach(), .sort(), .reduce()

//forEach()
const fruits = [`apple`, `strawberry`, `pear`];
//#1 apple, #2 strawberry, #3 pear
fruits.forEach((fruit, index) => console.log(`#${index + 1} ${fruit}`));

//map
const names = [`Alice`, `Bob`, `Charlie`, `Frode`, `Joe`];
const nicknames = names.map((name) => `The Legendary ${name}`);
console.log(names);
console.log(nicknames);

//some (BODY once told me)
//sjekker gjennom lista ein gong, stopper når han kjem til noko som er true
//misfits reference hehe
const dungeonParty = [`barbarian`, `monk`, `wizard`, `cleric`, `ranger`];
const hasHealer = dungeonParty.some((role) => role === `cleric`);
console.log(hasHealer);

//shop example: reduce, filter
const gold = 1000;
const shop = [
  {
    name: "Plot Armor",
    price: 9999,
  },
  {
    name: "Warglaves of Azinoth",
    price: 1337,
  },
  {
    name: "Maid Outfit of Awesomeness",
    price: 500,
  },
];

//Reduce
//burde øve på dette, kan vere useful
const numbers = [1, 2, 3, 4, 5, 6, ,7 ,8, 9];
const totalNumbers = numbers.reduce((accumilated, currValue) => accumilated + currValue);
console.log(totalNumbers);

const totalShopPrice = shop.reduce((accumilated, currValue) => accumilated + currValue.price, 0);
console.log(totalShopPrice);

//predicate: MÅ returnere ein bollean

//Filter
const affordableItems = shop.filter((shopItem) => shopItem.price <= gold);
//sjekker hvilket item vi har råda til i butikken
console.log(affordableItems);
console.log(shop);

// Sort
const newNumbers = [5, 8, 7, 3, 4, 6, 2, 1, 10, 9];
newNumbers.sort((a, b) => a - b);
console.log(newNumbers);

//Negativt: a, skal før B
//Positivt: a, etter B
//0: Ingen endring