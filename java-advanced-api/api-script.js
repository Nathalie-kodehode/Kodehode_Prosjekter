//Consting
const pokemonContainer = document.getElementById("display-pokemon");
//Connecting the Pokemon API to the webpage
const pokemonLink = "https://pokeapi.co/api/v2";

//Fetch me a Pokemon
const fetchPokemon = async (url) => {
  //await promise: "kom tilbake når du har den tingen eg vil ha"
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

//Render the Page


//Generate 9 random Pokemon from the API

//Display the Pokemon's image, name

//Button: Change between shiny and default sprite

//Button: Change between front and back sprite