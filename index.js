// Sentinel Comics Issue #404: Lock Down
// Crafting Aid

import craftingItems from "./crafting-words"; // Pulls our Crafting Matrix from another file.
// Reference Jeopardy game

console.log("Crafting a new Item");
let itemChosen = document.querySelector(".search-input"); //Going Fishing
console.log("User Input =", itemChosen);

let addButton = document.querySelector(".addItem-btn"); //Going Fishing

// TODO Get rid of all Pokemon Stuff
let pokemonName = document.querySelector(".nameLARP"); //Index Card Header
let pokemonHitPoints = document.querySelector(".cardType"); // Index Card Header
let pokemonWeight = document.querySelector(".weight"); //TODO New
let pokemonPicture = document.querySelector("img"); //TODO New
let pokemonAbility = document.querySelector(".ability"); //TODO New

addButton.addEventListener("click", async (itemSearcher) => {
  itemSearcher.preventDefault();

  let data = await fetchCraftingInfo(itemChosen.value.toLowerCase(), craftingItems);
  console.log(data); //! TEST
  populateTable(data);
});

function populateTable(data) {
  console.log(data);
  pokemonName.innerText = titleCase(data.name);
  pokemonHitPoints.innerHTML = `<h3 class="hp"><span>HP</span> ${data.stats[0].base_stat}</h3>`; //New way to change the template
  pokemonWeight.innerText = Math.round(data.weight / 0.453592) / 10;
  pokemonPicture.src = data.sprites.front_default;
  pokemonAbility.innerText = titleCase(data.abilities[0].ability.name);
}

async function fetchCraftingInfo(itemChosen, craftingItems) {
  let item = craftingItems
  console.log("Item", item); //! TEST

  try {
    let response = await fetch(item);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Capitalize the Player's Input
function titleCase(myString) {
  return myString
    .split(" ")
    .map((word) => {
      word = word.trim();
      let firstLetter1 = word.charAt(0).toUpperCase();
      let restOfWord1 = word.slice(1).toLowerCase();
      return firstLetter1 + restOfWord1;
    })
    .join(" ");
}
