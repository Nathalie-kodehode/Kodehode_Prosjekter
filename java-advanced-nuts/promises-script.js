
// Fetch (henter data, kjem an på nettsida kor fort det går)

//promise(pending)
console.log(fetch("https://pokeapi.co/api/v2/pokemon/nidoking"));

//response (henta dataen frå urlen)
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



//Synkront 
//eksempel: står i 1 kø med 15k folk, men kun 1 kasse.
//rekkjefølgje hierarki
//dette kan ta veldig lang tid

//Asynkront
//eksempel: 4 bord venter på mat. rettene tar ulik tid på å bli ferdig
//kelneren går til kvart bord i rekkefølgje
//kelneren sjekker om maten er ferdig for kvart bord.
//om bord 2 sin mat er ferdig før bord 1, så får bord 2 sin mat først

