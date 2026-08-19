fetchData();
async function fetchData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    if(!response.ok) {
      throw new error('Could not fetch the resource');
    }
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error(error)
  }
}