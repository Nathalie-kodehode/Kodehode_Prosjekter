//Callback Funskjon
//function vi kan kjøre seinare når den trengs
const logger = (resultat) => {
    console.log(`Resultatet ble: ${resultat}`)
}

const add = (a, b, callbackFn) => {
callbackFn(a+b)
}

const subtract = (a, b, callbackFn) => {
    callbackFn (a-b)
}

add(1, 1, console.log) //console logge 2
add(2, 2, logger) //resultatet ble 2
// add(3, 5, alert) lager popup vindu

//lowkey føler at vi har allereie gått gjennom dette med han Joe????
//bergensern er litt yap king
//logger høyrast ut som ein slur som ikkje har blitt funnet opp ennå

//Namngitte vs anonyme callback funskjoner
//same konseptet, sende inn i funsjon som vi kan bruke seinare. har funksjonen namn eller ikkje?
subtract(7, 2, console.log);
//logger er ein namngitt funskjon fordi vi kan referere den
subtract (8, 4, logger);
//under er anonym funskjon
subtract (30, 20, (result) => {
    console.log(`Anonym funsjon sitt resultat: ${result}`)
})

//MAIN FORSKJELL, anonym er SINGLE USE, namngitt er REUSEABLE


//.map(), .filter(), .forEach(), .sort(), .reduce()