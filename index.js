fetchData();
async function fetchData() {
  try {

    const pokemonName = document.getElementById('pokemonName').value.toLowerCase;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/${pokemonName}");

    if(!response.ok) {
      throw new error('Could not fetch the resource');
    }
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error(error)
  }
}