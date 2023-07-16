// Sentinel Comics Issue #404: Lock Down
// Crafting Aid

//TODO Fix Import Statement
console.log("Crafting Items Import");
import craftingItems from "./crafting-words.js"; // Pulls our Crafting Matrix from another file.

// TODO Delete the below "craftingItems" Object once the import statement above works

console.log("Crafting Items Import", craftingItems); //! TEST
let craftingWordMatrix = craftingItems.map(
  (craftWords) => craftWords.craftingWord
);
craftingWordMatrix = craftingWordMatrix.sort();
console.log("Crafting Word Matrix =", craftingWordMatrix); //! TEST

console.log("Crafting a new Item");

// Going Fishing
let itemChosen = document.querySelector(".search-input"); //Going Fishing
console.log("User Input =", itemChosen);

let addButton = document.querySelector(".addItem-btn"); //Going Fishing

dropdownMenu(); //Call the drop down

// TODO Get rid of all Pokemon Stuff
let nameLarp = document.querySelector(".nameLARP"); //Index Card Header
let cardType = document.querySelector(".cardType"); // Index Card Header
let pokemonWeight = document.querySelector(".weight"); //TODO New
let pokemonPicture = document.querySelector("img"); //TODO New
let pokemonAbility = document.querySelector(".ability"); //TODO New

// TODO there is a problem with this button click
addButton.addEventListener("click", async (itemSearcher) => {
  itemSearcher.preventDefault();

  let data = await fetchCraftingInfo(
    itemChosen.value.toLowerCase(),
    craftingItems
  );
  console.log("addButton Data", data); //! TEST
  populateTable(data);
});

function populateTable(data) {
  console.log("In Populate Table", data); //! TEST
  nameLarp.innerText = titleCase(data.name);
  cardType.innerHTML = `<h3 class="hp"><span>HP</span> ${data.stats[0].base_stat}</h3>`; //New way to change the template
  pokemonWeight.innerText = Math.round(data.weight / 0.453592) / 10;
  pokemonPicture.src = data.sprites.front_default;
  pokemonAbility.innerText = titleCase(data.abilities[0].ability.name);
}

function dropdownMenu() {
  craftingWordMatrix.forEach((craftWord) => {
    let dropdownWords = document.createElement("option");
    dropdownWords.value = craftWord;
    console.log("Drop Down Words", dropdownWords); //! TEST
    let dropdownList = document.getElementById("crafting-words");
    dropdownList.appendChild(dropdownWords);
    console.log("Drop Down List", dropdownList); //! TEST
  });
}

async function fetchCraftingInfo(itemChosen, craftingItems) {
  let item = craftingItems;
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
