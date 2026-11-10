//Alvas Marked

const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];
console.log(products);

//Bruk en array metode for å hente ut kun produkter som koster mindre enn 200. Hint: Det kan være ingen produketer, og det kan være en eller flere produkter som matcher dette kriteria. DONE
//FILTER()
const belowPrice = products.filter(product => product.price < 200);
console.log(belowPrice);

// Bruk en array metode for å hente kun produktnavnene for rask oversikt. DONE
//MAP()
//Med map() ber eg metoden kun hente namn på produkta
const productNames = (products.map(product => product.name));
console.log(productNames)

//ekstra eksempel, kor eg henter alle prisene og kun dei via map()
const productPrices = (products.map(product => product.price))
console.log(productPrices)

//ekstra eksempel 2, kor eg henter alle kategoriene og kun dei via map()
const productCategories = (products.map(product => product.category));
console.log(productCategories)

// Bruk en eller flere array metoder for å hente ut alle produkt navnene innendfor kategori "electronics". DONE
//FILTER()
//Her går metoden gjennom lista:
//"Filtrer products-lista"
//"Gå gjennom kvar category i products"
//"Matcher category med electronics, då skal namnet på produktet i den arrayen visast når eg console logger den."
//"Alt anna som ikkje matcher electronics, skal du sjå vekk ifrå"
const electronicProducts = products.filter(products => products.category === "electronics").map(product => product.name);
//i consolelog får eg kun fram 3 av produktene i arrayet. Desse har alle kategorien "electronics"
console.log(electronicProducts)

// Bruk en array metode for å finne ut hvis noen av produktene koster 1000 eller mer. Hint: Du skal ikke liste ut produktene, bare returne true dersom et eller flere produkter koster 1000 eller mer, eller false dersom ingen produkter koster 1000 eller mer. DONE
//SOME()
//"costsMore = gå gjennom kvart produkt i arrayen, send TRUE dersom 1 eller fleire produkter koster 1000 eller meir"
const costsMore = products.some(product => product.price <= 1000);
console.log(costsMore); //Han skriver TRUE

// Bruk en array metode for å finne den totale kostnaden av alle produktene. Hint: Du skal bare returne et heltall. DONE
//REDUCE()
//"totalSum = legg saman alle prisene i arrayet"
const totalSum = products.reduce((total, product) => total + product.price, 0); //Viktig å ta med 0 ellers får du berre garbled string tekst
console.log(totalSum); //2850 vert svaret

// Regler for oppgaven
// Lever lenke til din github repository som inneholder koden.
// Du skal ikke lage funksjoner. Ikke function, ikke piler (=>) for egne helper-funksjoner. Istedet bruk kun innebygde javascript metoder.
// Ikke muter products arrayet. Hvis du trenger sortering eller endre verdier, lag en kopi først.
// Lagre resultater i variabler med beskrivende navn (engelsk anbefales).
// Kommenter koden: Én kort setning over hver linje som forklarer hva som skjer.
// Du kan bruke console.log(...) for å sjekke resultatene.