fetchData();
async function fetchData() {
  try {
    const inputElement = document.getElementById("pokemonName");
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok) {
      throw new Error('Could not fetch the resource');
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display= "block";

    inputElement.value = '';
    
  } catch (error) {
    console.error(error)
  }
}