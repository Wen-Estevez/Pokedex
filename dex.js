const baseURL ="https://pokeapi.co/api/v2/pokemon/";
const pokemon = document.getElementById("pokemonName");
const buttonSearch = document.getElementById("searchPokemon");
const buttonCancel = document.getElementById("cancelPokemon");
const appNode = document.getElementById("dex")

buttonSearch.addEventListener("click",insertPokemon());
buttonSearch.addEventListener("touchStart",insertPokemon()); //tocar pantalla movil
buttonCancel.addEventListener("click",removePokemon());
buttonCancel.addEventListener("touchStart",removePokemon()); //tocar pantalla movil

function insertPokemon(){
    window.fetch(`${baseURL}${pokemon.value.toLowerCase()}`); //llamada a la api, envia pagina web y valor del pokemon 
        .then(function (response) { //envia la respuesta de la api como parametro
            if (response.status===404){
            alert("Pokemon no encontrado");
            }
            else {
                return response.json();
            }
        } )
        .then(function (responseJSON){
            const allItems=[]; //guarda lo que se va a mostrar
            const result=[];  // guarda la info de los pokemon
            for(let pokemonInfo in responseJSON ){
                result.push(pokemonInfo,responseJSON[pokemoInfo]) //Agrega al arreglo result el resultado de la consulta
            }
        }



        )
}
function removePokemon(){


}