const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon = document.getElementById('pokemonName');
const buttonPokemon = document.getElementById('searchPokemon');
const buttonClear = document.getElementById('clearPokemon');
const appNode = document.getElementById('dex');

buttonPokemon.addEventListener('click' , insertPokemon);
buttonPokemon.addEventListener('touchstart' , insertPokemon); //*Tocar la pantalla movil

buttonClear.addEventListener('click' , deletePokemons);
buttonClear.addEventListener('touchstart' , deletePokemons); //* Tocar la pantalla movil

async function insertPokemon() {
  try {
    const res = await fetch(`${baseUrl}${pokemon.value.toLocaleLowerCase()}`)
    const pokemonDataJSON = await res.json()

    const allItems = [];
    const result = []; //*Guardaremos la respuesta en el array

    for (let pokemonInfo in pokemonDataJSON) { //*Convertimos el objeto JSON a array
      result.push([pokemonInfo , pokemonDataJSON[pokemonInfo]]);
    }
      
      
function removePokemon(){


}
