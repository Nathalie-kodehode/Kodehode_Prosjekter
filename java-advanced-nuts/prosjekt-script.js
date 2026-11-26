//notater for prosjekt
//søkjefelt
//namn eller id nummer

//query parameters (offset=TALL&limit=TALL)
//limit begrensa antall pokemon synleg (20)
//HUSK NEXT
//offset hopper over dei første 20 pokemon om vi går til neste side (20)
//fin måte å leggje til pages (produktsider)
//høgreklikk, change symbol, renamer ting samtidig

const pokemonContainer = document.getElementById("pokemon-container");
const pokemonApiLink = "https://pokeapi.co/api/v2";

const buildPage = async (pokemonData) => {
  let pokemonList = pokemonData.results;
  for (let pokemon of pokemonList) {
    const pokemonCard = document.createElement("div");
    const pokemonName = document.createElement("h2");

    pokemonName.textContent = pokemon.name;
    pokemonCard.append(pokemonName);
    pokemonContainer.append(pokemonCard);
  }
};

const fetchPokemon = async (url) => {
  //await promise: "kom tilbake når du har den tingen eg vil ha"
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
const renderPage = async () => {
  const pokemonList = await fetchPokemon(`${pokemonApiLink}/pokemon`);
  await buildPage(pokemonList);
};

renderPage();