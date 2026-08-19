async function fetchMultiplePokemon(name) {
  try {
    const promises = name.map(name => 
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch the pokemon");
        } else {
          return res.json()
        }
      })
  
    )
  } catch (error) {
    console.error(error)
  }


   const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${names[index]} sprite:`, result.value.sprites.front_default);
    } else {
      console.error(`${names[index]} failed:`, result.reason.message);
    }
  });
}

fetchMultiplePokemon(["pikachu", "not-a-real-pokemon", "bulbasaur"]);