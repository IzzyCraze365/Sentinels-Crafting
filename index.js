// Sentinel Comics Issue #404: Lock Down
// Crafting Aid

const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

/*  //TODO Fix Import Statement
console.log("Crafting Items Import");
import craftingItems from "./crafting-words.js"; // Pulls our Crafting Matrix from another file. 
*/

const craftingItems = [
  {
    itemName: "Coffee",
    craftingWord: "Active",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 1,
    actionTime: "Power",
    damageType: "",
    uses: 0,
    potency: 0,
    targets: 1,
    backlash: 0,
    collateralDamage: 0,
    extra: "",
  },
  {
    itemName: "Amazonian Flowers",
    craftingWord: "Continuous",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 3,
    actionTime: "Ongoing",
    damageType: "Buff",
    uses: 0,
    potency: 1,
    targets: 1,
    backlash: 0,
    collateralDamage: 0,
    extra: "",
  },
  {
    itemName: "Sodium",
    craftingWord: "Crystalized",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 2,
    actionTime: "Power",
    damageType: "Armor",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 2,
    collateralDamage: 0,
    extra: "active for 2 turns",
  },
  {
    itemName: "Sodium",
    craftingWord: "Lubricant",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 5,
    actionTime: "Power",
    damageType: "Buff",
    uses: 0,
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 2,
    collateralDamage: 0,
    extra: "active for 2 turns",
  },
];

console.log("Crafting Items Import", craftingItems); //! TEST
let craftingWordMatrix = craftingItems.map(
  (craftWords) => craftWords.craftingWord
);
console.log("Crafting Word Matrix =", craftingWordMatrix); //! TEST

console.log("Crafting a new Item");

// Going Fishing
let itemChosen = document.querySelector(".search-input"); //Going Fishing
console.log("User Input =", itemChosen);

let addButton = document.querySelector(".addItem-btn"); //Going Fishing

// TODO Get rid of all Pokemon Stuff
let nameLarp = document.querySelector(".nameLARP"); //Index Card Header
let cardType = document.querySelector(".cardType"); // Index Card Header
let pokemonWeight = document.querySelector(".weight"); //TODO New
let pokemonPicture = document.querySelector("img"); //TODO New
let pokemonAbility = document.querySelector(".ability"); //TODO New

addButton.addEventListener("click", async (itemSearcher) => {
  itemSearcher.preventDefault();

  let data = await fetchCraftingInfo(
    itemChosen.value.toLowerCase(),
    craftingItems
  );
  console.log(data); //! TEST
  populateTable(data);
});

function populateTable(data) {
  console.log(data);
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

/* //TODO get the dropdown menu to work
function addOption(selectbox, text, value) {
  var optn = document.createElement("OPTION");
  optn.text = text;
  optn.value = value;
  selectbox.options.add(optn);
}

for (var i=0; i < craftingWordMatrix.length;++i){
  addOption(document.drop_list.craftingWordMatrix, craftingWordMatrix[i], craftingWordMatrix[i]); 
  } */

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = itemChosen
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdownMenu");
  a = craftingWordMatrix;
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}