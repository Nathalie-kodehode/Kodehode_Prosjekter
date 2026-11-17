//Descructuring

//We can use destructuring method to unpack all the values in a string or an array
//The unpacked values ends up in a single line of code

const bruker = {
    namn: "per",
    alder: 23,
    jobb: "designer",
    penger: "12kr",
    hus: false
}

let namnBruker = bruker.namn

const {namn, alder, ...informasjonAvBruker} = bruker
console.log(informasjonAvBruker)

//if (jobb === undefined) { 
//console.log("null jobb")
//} else { 
//console.log(namn + " " + alder + " " + jobb)
//}
//console.log(namn, jobb)

//herregud eg klarer ikkje å følgje med, ho går så raskt igjennom

const nyBruker = {
    nyNamn: "otto",
    nyAlder: 23,
    nyJobb: "rema",
}

let {nyNamn, nyJobb = "uten jobb"} = nyBruker //default value
console.log(nyNamn, nyJobb)

const farger = ["blå", "rosa", "lilla", "gul"]

//const [førsteFarge, mellomverdi, andreFarge] = farger
//console.log(førsteFarge + " " + andreFarge)

const [førsteFarge, andreFarge, ...restFarger] = farger
console.log(restFarger)