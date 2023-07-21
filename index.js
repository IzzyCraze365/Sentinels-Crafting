// Sentinel Comics Issue #404: Lock Down
// Crafting Aid

//TODO Fix Import Statement Otherwise all Crafting words will have to be copied HERE!!!
console.log("Crafting Items Import"); //! TEST
import craftingItems from "./crafting-words.js"; // Pulls our Crafting Matrix from another file.
console.log("Crafting Items Import", craftingItems); //! TEST

let craftingWordMatrix = craftingItems.map(
  (craftWords) => craftWords.craftingWord
); // This just pulls the Crafting Words for the Drop Down Menu
craftingWordMatrix = craftingWordMatrix.sort(); // This sorts the Crafting Words Alphabetically
console.log("Crafting Word Matrix =", craftingWordMatrix); //! TEST

let searchCraftingWords = craftingWordMatrix; // Making a copy of the matrix that can be manipulated
let craftIngredients = [
  craftingItems[47],
  craftingItems[42],
  craftingItems[48],
  craftingItems[59],
  craftingItems[61],
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
let cardFooterItemType = document.querySelector("#cardFooterItemType"); // Probably will just be "Device" or "Mixture"
let craftingNumberValue = document.querySelector("#craftingNumberValue");
let itemDescription = document.querySelector("#itemDescription"); //TODO This is going to be the most complicated part of the code
let numberOfUses = document.querySelector("#itemUsesValue"); //How many Times can the item be used
let itemUses = document.querySelector("#itemUsesTime"); //Uses per game or uses per combat?

dropdownMenu(); //Call the drop down
populateTable(craftIngredients); // Populates the Table with the Crafting Words in our craftIngredients Matrix

// This displays all the Crafting Words in the Search Bar's drop down menu.
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

//TODO This entire section does not work REMOVING ITEM LINE
let craftTable = document.querySelector(".craftTable");
craftTable.addEventListener("click", removeLine());
function removeLine(itemLine) {
  console.log("Test 1", itemLine);
}

// This function populates the table
function populateTable(craftWords) {
  let table = document.querySelector("#tableAdd");
  console.log("In Populate Table", craftWords, "Length =", craftWords.length); //! TEST

  // This section automatically sorts the table by its Item Type
  craftIngredients.sort((a, b) => {
    const itemA = a.itemType.toUpperCase();
    const itemB = b.itemType.toUpperCase();
    if (a.itemType < b.itemType) {
      //no constants needed with these variables
      return -1;
    }
    if (itemA > itemB) {
      //if you want to use the constants
      return 1;
    }
    return 0;
  });

  // This loops through the craftWords Matrix and builds the table
  for (let i = 0; i < craftWords.length; i++) {
    // console.log("in for loop", i, "Crafting Word", craftWords[i]); //! TEST
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
  }" >Remove</button></td>
  </tr>`;
    table.innerHTML += template; //onclick="removeLine(i)"
  }
}

// This is to find the crafting word from the drop Down // TODO Broken
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

itemCardBuilder(); //TODO This will need to be linked to the Craft Item Button
function itemCardBuilder() {
  let chemCT = 0; //Chemical Crafting Type
  let mechCT = 0; //Mechanical Crafting Type
  for (let i = 0; i < craftIngredients.length; i++) {
    if (craftIngredients[i].craftingType == "Chemical") {
      console.log(
        craftIngredients[i].craftingWord,
        "is a Chemical crafting type."
      );
      chemCT++;
    } else if (craftIngredients[i].craftingType == "Mechanical") {
      console.log(
        craftIngredients[i].craftingWord,
        "is a Mechanical crafting type."
      );
      mechCT++;
    } else {
      console.log(
        `There is an error with ${craftIngredients[i].craftingWord}'s crafting type`
      );
    }
    console.log("chemCT =", chemCT, "& mechCT =", mechCT); //! TEST
  }
  identifyDeviceOrMixture(chemCT, mechCT); // Mixture or Device
  identifyCraftingNumber(); // Adds up Crafting Number
}

// This function checks to make sure proper items are being mixed.
function identifyDeviceOrMixture(chemCT, mechCT) {
  console.log("Inside fucntion deviceOrMixture"); //! TEST
  if (chemCT >= 2 && mechCT == 0) {
    console.log("This is a crafted Chemical Mixture"); //! TEST
    itemName.innerHTML = `Crafted Chemical Mixture`;
    cardFooterItemType.innerHTML = `(Mixture:`;
    numberOfUses.innerHTML = "";
    itemUses.innerHTML = craftIngredients[0].uses;
  } else if (mechCT >= 2 && chemCT == 0) {
    console.log("This is a crafted Mechanical Device"); //! TEST
    itemName.innerHTML = `Crafted Mechanical Device`;
    cardFooterItemType.innerHTML = `(Device:`;
    deviceUses(); // Adds up Item Uses
  } else {
    alert("This item is not viable to be crafted."); // ALERT
  }
}

function identifyCraftingNumber() {
  let craftNumber = 0;
  for (let i = 0; i < craftIngredients.length; i++) {
    craftNumber += craftIngredients[i].craftingNumber;
    console.log(craftNumber, "CraftNumber)"); //! TEST
  }
  craftingNumberValue.innerHTML = craftNumber;
}

function deviceUses() {
  let uses = 0;
  for (let i = 0; i < craftIngredients.length; i++) {
    uses += craftIngredients[i].uses;
    console.log(uses, "Item Uses)"); //! TEST
  }
  numberOfUses.innerHTML = uses;
  itemUses.innerHTML = `in total before device breaks`; //TODO This is to switch it to combat from special cards.
}

// Capitalize the User's Input
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

export { addItem, removeLine };
