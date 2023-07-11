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
// TODO Delete the below "craftingItems" Object once the import statement above works
const craftingItems = [
  //! Chemical Crafting
  {
    itemName: "Coffee",
    craftingWord: "Active",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 1,
    actionTime: "Power",
    damageType: "",
    uses: "1 encounter or 10 minutes",
    potency: 1,
    targets: 1,
    backlash: 0,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect: "Power – Direct (1 effect to 1 target)",
  },
  {
    itemName: "Amazonian Flowers",
    craftingWord: "Continuous",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 3,
    actionTime: "Ongoing",
    damageType: "Buff",
    uses: "1 encounter or 10 minutes",
    potency: 1,
    targets: 1,
    backlash: 0,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect: "Ongoing – Buff (+1 effect)",
  },
  {
    itemName: "Sodium",
    craftingWord: "Crystalized",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 2,
    actionTime: "Power",
    damageType: "Armor",
    uses: "1 encounter or 10 minutes",
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 2,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect: "Power – Armor (-1 effect received for 2 turns)",
  },
  {
    itemName: "Grease",
    craftingWord: "Lubricant",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 2,
    actionTime: "Power",
    damageType: "Buff",
    uses: "1 encounter or 10 minutes",
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 2,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect: "Power – Buff (+1 effect to 1 target for 2 turns)",
  },
  {
    itemName: "Formaldihide",
    craftingWord: "Preserving",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 5,
    actionTime: "Ongoing",
    damageType: "Armor",
    uses: "1 encounter or 10 minutes",
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect: "Ongoing – Armor (-1 effect received)",
  },
  {
    itemName: "Ammonia",
    craftingWord: "Product",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 4,
    actionTime: "End",
    damageType: "",
    uses: "1 encounter or 10 minutes",
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect: "End - Direct (1 effect to 1 target)",
  },
  {
    itemName: "Chlorine",
    craftingWord: "Reactant",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 4,
    actionTime: "Start",
    damageType: "",
    uses: "1 encounter or 10 minutes",
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect: "Start - Direct (1 effect to 1 target)",
  },
  {
    itemName: "Ethanol",
    craftingWord: "Residual",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 3,
    actionTime: "Reaction",
    damageType: "",
    uses: "1 encounter or 10 minutes",
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect: "Reaction - Direct (1 effect to 1 target)",
  },
  {
    itemName: "Ethanol",
    craftingWord: "Spasmodic",
    craftingType: "Chemical",
    itemType: "Solution",
    craftingNumber: 4,
    actionTime: "Reaction",
    damageType: "Redirect",
    uses: "1 encounter or 10 minutes",
    potency: 2,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect:
      "Reaction - Redirect (Redirect the next 2+potency effect to target)",
  },
  {
    itemName: "Sulfuric Acid",
    craftingWord: "Acidic",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 3,
    actionTime: "",
    damageType: "Toxic",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Growth Hormones",
    craftingWord: "Coagulated",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 1,
    actionTime: "",
    damageType: "Melee",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Abiotic",
    craftingWord: "Corrupted",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 3,
    actionTime: "",
    damageType: "Infernal",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Paint Thinner",
    craftingWord: "Debilitating",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 4,
    actionTime: "",
    damageType: "Debuff",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 1,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Debuff (-1 damage for 1 turn, Direct only)",
  },
  {
    itemName: "Purified Water",
    craftingWord: "Distilled",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 3,
    actionTime: "",
    damageType: "Radiant",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "AntiFreeze",
    craftingWord: "Endothermic",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 2,
    actionTime: "",
    damageType: "Cold",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Glycerol",
    craftingWord: "Exothermic",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 2,
    actionTime: "",
    damageType: "Energy",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Tobacco",
    craftingWord: "Flammable",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 2,
    actionTime: "",
    damageType: "Fire",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Iodine",
    craftingWord: "Galvanic",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 2,
    actionTime: "",
    damageType: "Lightning",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Ink",
    craftingWord: "Injected",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 1,
    actionTime: "",
    damageType: "Projectile",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Crystalized Myelin",
    craftingWord: "Neural",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 3,
    actionTime: "",
    damageType: "Psychic",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Acitone",
    craftingWord: "Pulsating",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 3,
    actionTime: "",
    damageType: "Sonic",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Chemical X",
    craftingWord: "Supersaturated",
    craftingType: "Chemical",
    itemType: "varies",
    craftingNumber: 6,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Player may add any 1 Crafting Word of their choice to the Mixture",
  },
  {
    itemName: "Honey",
    craftingWord: "Sweet",
    craftingType: "Chemical",
    itemType: "Compound",
    craftingNumber: 4,
    actionTime: "",
    damageType: "Healing",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "",
  },
  {
    itemName: "Industrial Cleaner",
    craftingWord: "Alkaline",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 1,
    effect: "Potency +1, Backlash +1 when consumed",
  },
  {
    itemName: "Caster Oil",
    craftingWord: "Concentrated",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 0,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Targets +1",
  },
  {
    itemName: "Cloroform",
    craftingWord: "Congealed",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 1,
    effect: "Potency +1, Backlash +1 when consumed",
  },
  {
    itemName: "Laughing Gas",
    craftingWord: "Convulsive",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 1,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 2,
    effect: "Potency +1, Backlash +2 when consumed",
  },
  {
    itemName: "Oil",
    craftingWord: "Crude",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 1,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 2,
    consumedBacklash: 0,
    effect: "Potency +1, Collateral Damage +2 on Power",
  },
  {
    itemName: "Aerosol",
    craftingWord: "Dehydrated",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 1,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 25,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +1, Targets Everyone",
  },
  {
    itemName: "Nitro Glycerine",
    craftingWord: "Explosive",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 2,
    targets: 25,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 3,
    effect: "Potency +2, Targets Everyone, Backlash +3 when consumed",
  },
  {
    itemName: "Turpentine",
    craftingWord: "Hazardous",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 3,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 2,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 3,
    consumedBacklash: 0,
    effect: "Potency +2, Collateral Damage +3 on Power",
  },
  {
    itemName: "Methanol",
    craftingWord: "Ionic",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 3,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +1",
  },
  {
    itemName: "Mutant Fungus",
    craftingWord: "Mutagenic",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 3,
    actionTime: "",
    damageType: "",
    uses: "Permanent",
    potency: -1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 4,
    effect:
      "Potency -1, Backlash +4 when consumed, effect is permanent, gains the [Extract] tag.  (Spite nets +0 Potency)",
  },
  {
    itemName: "Adrenaline",
    craftingWord: "Saturated",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 1,
    consumedBacklash: 0,
    effect: "Potency +1, Collateral Damage +1 on Power",
  },
  {
    itemName: "Saline",
    craftingWord: "Unsaturated",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: -1,
    targets: 2,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency -1, Targets +2",
  },
  {
    itemName: "Liquid Krypton",
    craftingWord: "Unstable",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 0,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 1,
    effect: "Targets +1, Backlash +1 when consumed",
  },
  {
    itemName: "Hydrogen Peroxide",
    craftingWord: "Violent",
    craftingType: "Chemical",
    itemType: "Catalyst",
    craftingNumber: 5,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 2,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 3,
    effect: "Potency +2, Backlash +3 when consumed",
  },
];

console.log("Crafting Items Import", craftingItems); //! TEST
let craftingWordMatrix = craftingItems.map(
  (craftWords) => craftWords.craftingWord
);
craftingWordMatrix = craftingWordMatrix.sort();
console.log("Crafting Word Matrix =", craftingWordMatrix); //! TEST

function dropdownList(data, element) {
  if (data) {
    element.innerHTML = "";
    data.forEach((item) => {
      innerElement += <li>${item}</li>;
    });
    element.innerHTML = innerElement;
  }
}

dropdownList(craftingWordMatrix, craftingItems);

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
  input = itemChosen;
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
