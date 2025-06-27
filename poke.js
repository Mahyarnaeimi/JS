const table = document.getElementById("pokemonTable");

fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;

    pokemons.forEach(pokemon => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = pokemon.name;

      const urlCell = document.createElement("td");
      const link = document.createElement("a");
      link.href = pokemon.url;
      link.textContent = "View";
      link.target = "_blank";
      urlCell.appendChild(link);

      row.appendChild(nameCell);
      row.appendChild(urlCell);
      table.appendChild(row);
    });
  })
  .catch(error => console.error("Error fetching Pokémon:", error));
