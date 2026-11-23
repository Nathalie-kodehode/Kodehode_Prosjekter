
// Fetch (henter data, kjem an på nettsida kor fort det går)

//promise(pending)
console.log(fetch("https://pokeapi.co/api/v2/pokemon/nidoking"));

//response (henta dataen frå urlen)
//ELDRE VERSJON
fetch("https://pokeapi.co/api/v2/pokemon/nidoking").then((response) => {

if (!response.ok) {
    throw new Error ("Pokemon not found!")
}

    return response.json();
})

.then((pokemon) => {
    console.log(pokemon)
})

.catch((error) => {
    //this is how we can make an error message
console.error(`Error: ${error.message}`)
})
;

//fetch returnerer promise
//NY VERSJON
//kan kun bruke await i ein async function
async function getPokemon() {
    console.log(`Fetching Pokemon...`);
   const response = await fetch("https://pokeapi.co/api/v2/pokemon/mew")
   const pokemon = await response.json();

   console.log(`Pokemon fetched!`)
  return pokemon //<-- bytt console logg med return
}


//Synkront 
//standard
//kun brukes om du skal vente på nokn data
//eksempel: står i 1 kø med 15k folk, men kun 1 kasse.
//rekkjefølgje hierarki
//dette kan ta veldig lang tid

//Asynkront
//useful i visse situasjoner (multitasking om ting tar tid)
//eksempel: 4 bord venter på mat. rettene tar ulik tid på å bli ferdig
//kelneren går til kvart bord i rekkefølgje
//kelneren sjekker om maten er ferdig for kvart bord.
//om bord 2 sin mat er ferdig før bord 1, så får bord 2 sin mat først

async function main() {
    const pokemon = await getPokemon() //await endrer rekkjefølgjen
    console.log(`Hello!`)
}

main()

// Simulerer matlaging (kopiert frå rafal bob eksempel)
function lagMat() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Maten er ferdig!");
        }, 3000);
    });
}

// Venter på at maten blir ferdig
async function bestillMat() {
    console.log("Bestilling mottatt!");

    const resultat = await lagMat();

    console.log(resultat);
    console.log("Gi beskjed til kunden!");
}

bestillMat();