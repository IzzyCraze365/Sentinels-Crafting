// Sentinel Comics Issue #404: Lock Down
// Crafting Aid Helper Tool

/* 
//TODO Fix Import Statement Otherwise all Crafting words will have to be copied HERE!!!
console.log("Crafting Items Import"); //! TEST
import craftingItems from "./crafting-words.js"; // Pulls our Crafting Matrix from another file.
console.log("Crafting Items Import", craftingItems); //! TEST
 */

//TODO part of me is wondering if I should have made all the crafting Items into Constructors (Classes - see Dorkington)

const craftingItems = [
  //! Chemical Crafting
  {
    itemName: "Coffee",
    craftingWord: "Active",
    craftingType: "Chemical",
    itemType: "1-Solution",
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
    itemType: "1-Solution",
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
    itemType: "1-Solution",
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
    itemType: "1-Solution",
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
    itemType: "1-Solution",
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
    itemType: "1-Solution",
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
    itemType: "1-Solution",
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
    itemType: "1-Solution",
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
    itemType: "1-Solution",
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
    itemType: "2-Compound",
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
    effect: "Toxic Damage",
  },
  {
    itemName: "Growth Hormones",
    craftingWord: "Coagulated",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Melee Damage",
  },
  {
    itemName: "Abiotic",
    craftingWord: "Corrupted",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Infernal Damage",
  },
  {
    itemName: "Paint Thinner",
    craftingWord: "Debilitating",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    itemType: "2-Compound",
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
    effect: "Radiant Damage",
  },
  {
    itemName: "AntiFreeze",
    craftingWord: "Endothermic",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Cold Damage",
  },
  {
    itemName: "Glycerol",
    craftingWord: "Exothermic",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Energy Damage",
  },
  {
    itemName: "Tobacco",
    craftingWord: "Flammable",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Fire Damage",
  },
  {
    itemName: "Iodine",
    craftingWord: "Galvanic",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Lightning Damage",
  },
  {
    itemName: "Ink",
    craftingWord: "Injected",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Projectile Damage",
  },
  {
    itemName: "Crystalized Myelin",
    craftingWord: "Neural",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Psychic Damage",
  },
  {
    itemName: "Acitone",
    craftingWord: "Pulsating",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Sonic Damage",
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
    effect:
      "Special! Player may add any 1 Crafting Word of their choice to the Mixture",
  },
  {
    itemName: "Honey",
    craftingWord: "Sweet",
    craftingType: "Chemical",
    itemType: "2-Compound",
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
    effect: "Healing",
  },
  {
    itemName: "Industrial Cleaner",
    craftingWord: "Alkaline",
    craftingType: "Chemical",
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
    itemType: "3-Catalyst",
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
  //! Mechanical Crafting
  {
    itemName: "Scrap Metal",
    craftingWord: "Assisting",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 2,
    actionTime: "Power",
    damageType: "Buff",
    uses: 4,
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 2,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Power – Buff (+1 effect to 1 target for 2 turns)",
  },
  {
    itemName: "Expresso Machine",
    craftingWord: "Automatic",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 4,
    actionTime: "Start",
    damageType: "",
    uses: 4,
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Start - Direct",
  },
  {
    itemName: "Computer",
    craftingWord: "Auxiliary",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 4,
    actionTime: "End",
    damageType: "",
    uses: 4,
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "End - Direct",
  },
  {
    itemName: "Scrap Electronics",
    craftingWord: "Cordless",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 1,
    actionTime: "Power",
    damageType: "",
    uses: 4,
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Power – Direct (1 effect to 1 target)",
  },
  {
    itemName: "Goggles",
    craftingWord: "Personal",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 5,
    actionTime: "Ongoing",
    damageType: "Buff",
    uses: 4,
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Ongoing – Buff (+1 effect)",
  },
  {
    itemName: "Hair Dryer",
    craftingWord: "Spring-Loaded",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 3,
    actionTime: "Reaction",
    damageType: "",
    uses: 4,
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Reaction - Direct (1 effect to 1 target)",
  },
  {
    itemName: "Freedom Tower Door",
    craftingWord: "Sturdy",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 3,
    actionTime: "Ongoing",
    damageType: "Armor",
    uses: 4,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Ongoing – Armor (-1 effect received)",
  },
  {
    itemName: "Plasma TV",
    craftingWord: "Triggered",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 4,
    actionTime: "Reaction",
    damageType: "Redirect",
    uses: 4,
    potency: 2,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect:
      "Reaction - Redirect (Redirect the next 2+potency effect to target)",
  },
  {
    itemName: "Duct Tape",
    craftingWord: "Welding",
    craftingType: "Mechanical",
    itemType: "1-Frame",
    craftingNumber: 2,
    actionTime: "Power",
    damageType: "Armor",
    uses: 4,
    potency: 1,
    targets: 1,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Power – Armor (-1 effect received for 2 turns)",
  },
  {
    itemName: "Fan",
    craftingWord: "Coolant",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Cold Damage",
  },
  {
    itemName: "Car Battery",
    craftingWord: "Corrosive",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Toxic Damage",
  },
  {
    itemName: "Circuit Board",
    craftingWord: "Digital",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Energy Damage",
  },
  {
    itemName: "Laser Pointer",
    craftingWord: "Halogen",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Radiant Damage",
  },
  {
    itemName: "Capacitor",
    craftingWord: "Inhibitor",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
    craftingNumber: 4,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 1,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Debuff (-1 damage for 1 turn, Direct only)",
  },
  {
    itemName: "Uranium",
    craftingWord: "Irradiated",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
    craftingNumber: 4,
    actionTime: "",
    damageType: "Infernal",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Infernal Damage",
  },
  {
    itemName: "Battery",
    craftingWord: "Magnetic",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Lightning Damage",
  },
  {
    itemName: "Air Horn",
    craftingWord: "Pneumatic",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Projectile Damage",
  },
  {
    itemName: "Superglue",
    craftingWord: "Repairing",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Healing",
  },
  {
    itemName: "Rubber Ducky",
    craftingWord: "Rube-Goldberg",
    craftingType: "Mechanical",
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
    effect:
      "Special! Player may add any 1 Crafting Word of their choice to the Device",
  },
  {
    itemName: "Speaker",
    craftingWord: "Seismic",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Sonic Damage",
  },
  {
    itemName: "Metal Shards",
    craftingWord: "Sharp",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Melee Damage",
  },
  {
    itemName: "Bunsen Burner",
    craftingWord: "Thermal",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Fire Damage",
  },
  {
    itemName: "V.R. Helmet",
    craftingWord: "Wireless",
    craftingType: "Mechanical",
    itemType: "2-Mechanism",
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
    effect: "Psychic Damage",
  },
  {
    itemName: "Barrel",
    craftingWord: "Bulky",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 3,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 3,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +3, gains the [Heavy] tag",
  },
  {
    itemName: "Micro-Fusion Cell",
    craftingWord: "Compressed",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 3,
    actionTime: "",
    damageType: "",
    uses: -1,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +1, Uses -1",
  },
  {
    itemName: "Gun Powder",
    craftingWord: "Dangerous",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 1,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 25,
    backlash: 2,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +1, Targets Everyone, Backlash +2",
  },
  {
    itemName: "Engine",
    craftingWord: "Diesel",
    craftingType: "Mechanical",
    itemType: "3-Component",
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
    effect: "Potency +1, Collateral Damage +1",
  },
  {
    itemName: "Engine",
    craftingWord: "Efficient",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 5,
    actionTime: "",
    damageType: "",
    uses: 1,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Uses +1",
  },
  {
    itemName: "Unity's Power",
    craftingWord: "Golem",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 0,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect:
      "Unity instead can make a Golem with Health = number of Uses that can Device can be used before it dies (does not work for healing)",
  },
  {
    itemName: "Broken Laser Turret",
    craftingWord: "High-Maintenance",
    craftingType: "Mechanical",
    itemType: "3-Component",
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
    effect: "Potency +1, Collateral Damage +2",
  },
  {
    itemName: "Infrared Sensor",
    craftingWord: "Incandescent",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: -1,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +1, Uses -1",
  },
  {
    itemName: "Focusing Lens",
    craftingWord: "Manual",
    craftingType: "Mechanical",
    itemType: "3-Component",
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
    itemName: "Om-X Power",
    craftingWord: "Module",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 0,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +1, can only be used by Om-X, cannot be Stolen",
  },
  {
    itemName: "Servos",
    craftingWord: "Motorized",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 3,
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
    itemName: "Projector",
    craftingWord: "Overclocked",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: -2,
    potency: 2,
    targets: 25,
    backlash: 2,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +2, Targets Everyone, Backlash +2, Uses -2",
  },
  {
    itemName: "Centrifuge",
    craftingWord: "Precision",
    craftingType: "Mechanical",
    itemType: "3-Component",
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
    effect: "Device will deal Irreducible damage",
  },
  {
    itemName: "Fuel Cell",
    craftingWord: "Prototype",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 4,
    actionTime: "",
    damageType: "",
    uses: -2,
    potency: 2,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +2, Uses -2",
  },
  {
    itemName: "Rope",
    craftingWord: "Reliable",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 3,
    actionTime: "",
    damageType: "",
    uses: 1,
    potency: -1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency -1, Uses +1",
  },
  {
    itemName: "Processed Alloy",
    craftingWord: "Rigid",
    craftingType: "Mechanical",
    itemType: "3-Component",
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
    itemName: "Giant Saw Blade",
    craftingWord: "Ruinous",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 2,
    targets: 0,
    backlash: 3,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +2, Backlash +3",
  },
  {
    itemName: "Gyroscope",
    craftingWord: "Supercharged",
    craftingType: "Mechanical",
    itemType: "3-Component",
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
    effect: "Potency +2, Collateral Damage +3",
  },
  {
    itemName: "Binoculars",
    craftingWord: "Targeting",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: -1,
    targets: 2,
    backlash: 0,
    turns: 0,
    collateralDamage: 3,
    consumedBacklash: 0,
    effect: "Potency -1, Targets +2",
  },
  {
    itemName: "Old Costume",
    craftingWord: "User-Friendly",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: -25,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +1, Self Only",
  },
  {
    itemName: "Joystick",
    craftingWord: "Vibrating",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 1,
    actionTime: "",
    damageType: "",
    uses: 0,
    potency: 1,
    targets: 0,
    backlash: 2,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency +1, Backlash +2",
  },
  {
    itemName: "Video Game",
    craftingWord: "Virtual",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 6,
    actionTime: "",
    damageType: "",
    uses: -2,
    potency: 0,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Uses -2, Uses are now per Combat",
  },
  {
    itemName: "Drill",
    craftingWord: "Wind-Up",
    craftingType: "Mechanical",
    itemType: "3-Component",
    craftingNumber: 2,
    actionTime: "",
    damageType: "",
    uses: 1,
    potency: -1,
    targets: 0,
    backlash: 0,
    turns: 0,
    collateralDamage: 0,
    consumedBacklash: 0,
    effect: "Potency -1, Uses +1",
  },
];

let craftingWordMatrix = craftingItems.map(
  (craftWords) => craftWords.craftingWord
); // This just pulls the Crafting Words for the Drop Down Menu
craftingWordMatrix = craftingWordMatrix.sort(); // This sorts the Crafting Words Alphabetically
//console.log("Crafting Word Matrix =", craftingWordMatrix); //! TEST

let searchCraftingWords = craftingWordMatrix; // Making a copy of the matrix that can be manipulated
let craftIngredients = []; // This is the matrix that will store the Crafting Words we are adding to the table.
//! craftingItems[47], craftingItems[42], craftingItems[48],craftingItems[59], craftingItems[63]
//TODO "craftIngredients" should be an empty array, words there are just to test for now

/* 
  // Query Selectors
  let itemChosen = document.querySelector(".search-input");
  console.log("User Input =", itemChosen); //! TEST
  let itemSearcher = document.querySelector("#searched-item"); // Search Bar
   */

//! Buttons
let addButton = document.querySelector("#addItemButton");
const searchInput = document.querySelector("[data-search]"); // Search Field
let createButton = document.querySelector("#createButton");
let resetButton = document.querySelector("#resetButton");

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

addButton.addEventListener("click", addItem);
populateTable(craftIngredients); // Populates the Table with the Crafting Words in our craftIngredients Matrix

// Input field value is read here.
searchInput.addEventListener("input", (e) => {
  let value = e.target.value; // This find the value of the input field
  console.log("Value 1", value); //! TEST
  value = titleCase(value);
  console.log("Value 2", value); //! TEST
  console.log("craft Ingredients 1", craftIngredients);
});

function addItem() {
  //preventDefault();
  console.log("Inside Add Item"); //! TEST
  let itemSearcher2 = document.querySelector("#searched-item"); // Search Bar
  console.log("itemSearcher", itemSearcher2.value); //! TEST
  console.log("addButton Function"); //! TEST
  //itemSearcher.preventDefault();
}

//TODO This entire section does not work REMOVING ITEM LINE
let craftTable = document.querySelector(".craftTable");
craftTable.addEventListener("click", removeLine);
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
    <td class="craftingType" id="cType${i + 1}">${
      craftWords[i].craftingType
    }</td>
    <td class="craftingWord" id="cWord${i + 1}">${
      craftWords[i].craftingWord
    }</td>
    <td class="craftItemName" id="cItem${i + 1}">${craftWords[i].itemName}</td>
    <td class="craftItemType" id="cItemType${i + 1}">${
      craftWords[i].itemType
    }</td>
    <td class="craftNum" id="cNum${i + 1}">${craftWords[i].craftingNumber}</td>
    <td class="addedItemEffect" id="cEffect${i + 1}">${
      craftWords[i].effect
    }</td>
    <td><button class="button lineBTN" id="removeItemBtn${
      i + 1
    }" >Remove</button></td>
    </tr>`;
    table.innerHTML += template; //onclick="removeLine(i)"
  }
}

resetButton.addEventListener("click", resetTable);

function resetTable() {
  // This function will reset the table.
  console.log("Reset Button Clicked"); //! TEST
  console.log("Before", craftIngredients); //! TEST
  craftIngredients = []; // This should empty the table
  searchCraftingWords = craftingWordMatrix; // This should reset the dropdown menu
  console.log("After", craftIngredients); //! TEST
}

createButton.addEventListener("click", itemCardBuilder); //TODO This will need to be linked to the Craft Item Button
function itemCardBuilder() {
  console.log("Craft item Button Clicked"); //! TEST
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
    console.log("This is Item cannot be crafted"); //! TEST
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
