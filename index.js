// Sentinel Comics Issue #404: Lock Down
// Crafting Aid

//TODO Fix Import Statement Otherwise all Crafting words will have to be copied HERE!!!
console.log("Crafting Items Import"); //! TEST
import craftingItems from "./crafting-words.js"; // Pulls our Crafting Matrix from another file.
console.log("Crafting Items Import", craftingItems); //! TEST

let craftingWordMatrix = craftingItems.map(
  (craftWords) => craftWords.craftingWord
);
craftingWordMatrix = craftingWordMatrix.sort();
console.log("Crafting Word Matrix =", craftingWordMatrix); //! TEST
console.log("Crafting a new Item"); //! TEST

let searchCraftingWords = craftingWordMatrix; // Making a copy of the matrix that can be manipulated
let craftIngredients = [
  craftingItems[15],
  craftingItems[7],
  craftingItems[16],
  craftingItems[33],
  craftingItems[28],
]; // This is the matrix that will store the Crafting Words we are adding to the table.
//TODO "craftIngredients" should be an empty array, words there are just to test for now

// Query Selectors
let itemChosen = document.querySelector(".search-input");
console.log("User Input =", itemChosen); //! TEST
let addButton = document.querySelector("#addItem-btn");
let itemSearcher = document.querySelector("#searched-item"); // Search Bar

//! Index Card Queries
let nameLarp = document.querySelector(".nameLARP"); //Index Card Header
let cardType = document.querySelector(".cardType"); // Index Card Header
let itemName = document.querySelector("#itemName"); // Probably will just be "New Device" or "Created Mixture"
let itemDescription = document.querySelector("#itemDescription"); //TODO This is going to be the most complicated part of the code
let numberOfUses = document.querySelector("#itemUsesValue"); //How many Times can the item be used
let itemUses = document.querySelector("#itemUsesTime"); //Uses per game or uses per combat?

dropdownMenu(); //Call the drop down
populateTable(craftIngredients); // Poopulates the Table with the Crafting Words in our craftIngredients Matrix

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

function addItem() {
  console.log("sup"); //! TEST
  /* 
  preventDefault();
  console.log("Inside Add Item"); //! TEST
  let itemSearcher2 = document.querySelector("#searched-item"); // Search Bar
  console.log("itemSearcher", itemSearcher2.value); //! TEST
  console.log("addButton Function"); //! TEST
  //itemSearcher.preventDefault();
   */
}

function populateTable(craftWords) {
  let table = document.querySelector("#tableAdd");
  console.log("In Populate Table", craftWords, "Length =", craftWords.length); //! TEST

  for (let i = 0; i < craftWords.length; i++) {
    console.log("in for loop", i, "Crafting Word", craftWords[i]); //! TEST
    let template = `<tr>
  <td class="craftingType" id="cType${i + 1}">${craftWords[i].craftingType}</td>
  <td class="craftingWord" id="cWord${i + 1}">${craftWords[i].craftingWord}</td>
  <td class="craftItemName" id="cItem${i + 1}">${craftWords[i].itemName}</td>
  <td class="craftItemType" id="cItemType${i + 1}">${
      craftWords[i].itemType
    }</td>
  <td class="craftNum" id="cNum${i + 1}">${craftWords[i].craftingNumber}</td>
  <td class="addedItemEffect" id="cEffect${i + 1}">${craftWords[i].effect}</td>
  <td><button class="button lineBTN" id="removeItemBtn${
    i + 1
  }">Remove</button></td>
  </tr>`;
    table.innerHTML += template;
  }
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

export { addItem };
