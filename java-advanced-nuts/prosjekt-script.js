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

const renderPokemonImage = (pokemonObject, shiny, gender, direction) => {
  if (gender === "male") {
    return shiny
      ? direction === "front"
        ? pokemonObject.sprites.front_shiny
        : pokemonObject.sprites.back_shiny
      : direction === "front"
        ? pokemonObject.sprites.front_default
        : pokemonObject.sprites.back_default
  } else {
    return shiny ? (
        direction === "front"
        ? pokemonObject.sprites.front_shiny_female
        : pokemonObject.sprites.back_shiny_female
    ) : (
        direction === "front"
        ? pokemonObject.sprites.front_default_female
        : pokemonObject.sprites.back_default_female
    )
  }
};

const toggleShinyButton = (pokemonImg, pokemonObject, pokemon) => {
    const button = document.createElement("button");
    button.textContent = "Toggle Shiny";
    button.addEventListener("click", () => {
pokemon.isShiny = !pokemon.isShiny
pokemonImg.src = renderPokemonImage (
       pokemonObject, 
        pokemon.isShiny, 
        pokemon.gender, 
        pokemon.direction
);
    })
    return button;
}

const toggleDirection = (pokemonImg, pokemonObject, pokemon) => {
    const button = document.createElement("button");
    button.textContent = "Toggle Direction";
    button.addEventListener("click", () => {
        pokemon.direction = pokemon.direction === "back"
        ? "front"
        : "back"
        pokemonImg.src = renderPokemonImage (
           pokemonObject, 
        pokemon.isShiny, 
        pokemon.gender, 
        pokemon.direction   
        );
    })
return button;
}

const buildPage = async (pokemonData) => {
  let pokemonList = pokemonData.results.map(pokemon => ({
    ...pokemon, 
    isShiny: false, 
    direction: "front", 
    gender: "male"
  }));
  for (let pokemon of pokemonList) {
    const pokemonObject = await fetchPokemon(pokemon.url);
    console.log(pokemonObject);

    const pokemonCard = document.createElement("div");
    const pokemonName = document.createElement("h2");

    const pokemonImg = document.createElement("img");
    pokemonImg.src = renderPokemonImage(
        pokemonObject, 
        pokemon.isShiny, 
        pokemon.gender, 
        pokemon.direction
    );

    pokemonName.textContent = pokemon.name;
    pokemonCard.append(pokemonImg);
    pokemonCard.append(pokemonName);
    pokemonCard.append(toggleShinyButton(pokemonImg, pokemonObject, pokemon));
    pokemonCard.append(toggleDirection(pokemonImg, pokemonObject, pokemon));
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
