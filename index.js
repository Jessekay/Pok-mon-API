fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
.then(response => {
  if(!response.ok) {
    console.log('Could not fetch the resource');
  }

  return response.json();
})
.then((data) => console.log(data.name))
.catch(error => console.error(error))
