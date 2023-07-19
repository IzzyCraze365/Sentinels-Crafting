// Sentinel Comics Issue #404: Lock Down
// Crafting Aid

//TODO Fix Import Statement
console.log("Crafting Items Import");
import craftingItems from "./crafting-words.js"; // Pulls our Crafting Matrix from another file.
console.log("Crafting Items Import", craftingItems); //! TEST

let craftingWordMatrix = craftingItems.map(
  (craftWords) => craftWords.craftingWord
);
craftingWordMatrix = craftingWordMatrix.sort();
console.log("Crafting Word Matrix =", craftingWordMatrix); //! TEST
console.log("Crafting a new Item");

let searchCraftingWords = craftingWordMatrix; // Making a copy of the matrix that can be manipulated
let craftIngredients = []; // This is the matrix that will store the Crafting Words we are adding to the table

// Going Fishing
let itemChosen = document.querySelector(".search-input"); //Going Fishing
console.log("User Input =", itemChosen);

let addButton = document.querySelector("#addItem-btn"); //Going Fishing
let itemSearcher = document.querySelector("#searched-item"); // Search Bar

//! Index Card Queries
let nameLarp = document.querySelector(".nameLARP"); //Index Card Header
let cardType = document.querySelector(".cardType"); // Index Card Header
let itemName = document.querySelector("#itemName"); // Probably will just be "New Device" or "Created Mixture"
let itemDescription = document.querySelector("#itemDescription"); //TODO This is going to be the most complicated part of the code
let numberOfUses = document.querySelector("#itemUsesValue"); //How many Times can the item be used
let itemUses = document.querySelector("#itemUsesTime"); //Uses per game or uses per combat?

dropdownMenu(); //Call the drop down

function dropdownMenu() {
  searchCraftingWords.forEach((craftWord) => {
    let dropdownWords = document.createElement("option");
    dropdownWords.value = craftWord;
    let dropdownList = document.getElementById("crafting-words");
    dropdownList.appendChild(dropdownWords);
    //console.log("Drop Down List", dropdownList); //! TEST
  });
}

// TODO there is a problem with this button click
addButton.addEventListener("click", addItem());
    
function addItem(){
console.log("Inside Add Item"); //! TEST
/* let selectedWord = itemSearcher.options[itemSearcher.selectedIndex].text(); */
console.log("itemSearcher", itemSearcher.value); //! TEST
console.log("selectedWord", selectedWord); //! TEST


    
    console.log("addButton Function"); //! TEST
/*   let data = await fetchCraftingInfo(
    itemChosen.value.toLowerCase(),
    craftingItems
  ); */
  
  //populateTable(data);
  itemSearcher.preventDefault();
};

function populateTable(data) {
  console.log("In Populate Table", data); //! TEST
  nameLarp.innerText = titleCase(data.name);
  cardType.innerHTML = `<h3 class="hp"><span>HP</span> ${data.stats[0].base_stat}</h3>`; //New way to change the template
  pokemonWeight.innerText = Math.round(data.weight / 0.453592) / 10;
  pokemonPicture.src = data.sprites.front_default;
  pokemonAbility.innerText = titleCase(data.abilities[0].ability.name);
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
