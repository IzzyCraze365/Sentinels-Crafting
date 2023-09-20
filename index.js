// Sentinel Comics Issue #404: Lock Down
// Crafting Aid Helper Tool
// Coded by John 'Izzy' Isabella

class craftingWordAndItem {
  constructor({
    itemName,
    craftingWord,
    idKeyword,
    craftingType,
    itemType,
    craftingNumber,
    actionTime,
    damageType,
    uses,
    potency,
    targets,
    backlash,
    turns,
    collateralDamage,
    consumedBacklash,
    effect,
  }) {
    this.itemName = itemName;
    this.craftingWord = craftingWord;
    this.idKeyword = idKeyword;
    this.craftingType = craftingType;
    this.itemType = itemType;
    this.craftingNumber = craftingNumber;
    this.actionTime = actionTime;
    this.damageType = damageType;
    this.uses = uses;
    this.potency = potency;
    this.targets = targets;
    this.backlash = backlash;
    this.turns = turns;
    this.collateralDamage = collateralDamage;
    this.consumedBacklash = consumedBacklash;
    this.effect = effect;
  }
}

//! Chemical Crafting
const Active = new craftingWordAndItem({
  itemName: "Coffee",
  craftingWord: "Active",
  idKeyword: "Active",
  craftingType: "Chemical",
  itemType: "1-Solution",
  craftingNumber: 1,
  actionTime: "Power",
  damageType: "",
  uses: "1 encounter or 10 minutes",
  potency: 1,
  targets: 1,
  backlash: 0,
  turns: 0,
  collateralDamage: 0,
  consumedBacklash: 4,
  effect: "Power – Direct (1 effect to 1 target)",
});
const Continuous = new craftingWordAndItem({
  itemName: "Amazonian Flowers",
  craftingWord: "Continuous",
  idKeyword: "Continuous",
  craftingType: "Chemical",
  itemType: "1-Solution",
  craftingNumber: 3,
  actionTime: "Ongoing",
  damageType: "Buff",
  uses: "1 encounter or 10 minutes",
  potency: 1,
  targets: 1,
  backlash: 0,
  turns: 0,
  collateralDamage: 0,
  consumedBacklash: 4,
  effect: "Ongoing – Buff (+1 effect)",
});
const Crystalized = new craftingWordAndItem({
  itemName: "Sodium",
  craftingWord: "Crystalized",
  idKeyword: "Crystalized",
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
});
const Lubricant = new craftingWordAndItem({
  itemName: "Grease",
  craftingWord: "Lubricant",
  idKeyword: "Lubricant",
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
});
const Preserving = new craftingWordAndItem({
  itemName: "Formaldihide",
  craftingWord: "Preserving",
  idKeyword: "Preserving",
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
});
const Product = new craftingWordAndItem({
  itemName: "Ammonia",
  craftingWord: "Product",
  idKeyword: "Product",
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
});
const Reactant = new craftingWordAndItem({
  itemName: "Chlorine",
  craftingWord: "Reactant",
  idKeyword: "Reactant",
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
});
const Residual = new craftingWordAndItem({
  itemName: "Ethanol",
  craftingWord: "Residual",
  idKeyword: "Residual",
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
});
const Spasmodic = new craftingWordAndItem({
  itemName: "Ethanol",
  craftingWord: "Spasmodic",
  idKeyword: "Spasmodic",
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
  effect: "Reaction - Redirect (Redirect the next 2+potency effect to target)",
});
const Acidic = new craftingWordAndItem({
  itemName: "Sulfuric Acid",
  craftingWord: "Acidic",
  idKeyword: "Acidic",
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
});
const Coagulated = new craftingWordAndItem({
  itemName: "Growth Hormones",
  craftingWord: "Coagulated",
  idKeyword: "Coagulated",
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
});
const Corrupted = new craftingWordAndItem({
  itemName: "Abiotic",
  craftingWord: "Corrupted",
  idKeyword: "Corrupted",
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
});
const Debilitating = new craftingWordAndItem({
  itemName: "Paint Thinner",
  craftingWord: "Debilitating",
  idKeyword: "Debilitating",
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
});
const Distilled = new craftingWordAndItem({
  itemName: "Purified Water",
  craftingWord: "Distilled",
  idKeyword: "Distilled",
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
});
const Endothermic = new craftingWordAndItem({
  itemName: "AntiFreeze",
  craftingWord: "Endothermic",
  idKeyword: "Endothermic",
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
});
const Exothermic = new craftingWordAndItem({
  itemName: "Glycerol",
  craftingWord: "Exothermic",
  idKeyword: "Exothermic",
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
});
const Flammable = new craftingWordAndItem({
  itemName: "Tobacco",
  craftingWord: "Flammable",
  idKeyword: "Flammable",
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
});
const Galvanic = new craftingWordAndItem({
  itemName: "Iodine",
  craftingWord: "Galvanic",
  idKeyword: "Galvanic",
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
});
const Injected = new craftingWordAndItem({
  itemName: "Ink",
  craftingWord: "Injected",
  idKeyword: "Injected",
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
});
const Neural = new craftingWordAndItem({
  itemName: "Crystalized Myelin",
  craftingWord: "Neural",
  idKeyword: "Neural",
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
});
const Pulsating = new craftingWordAndItem({
  itemName: "Acitone",
  craftingWord: "Pulsating",
  idKeyword: "Pulsating",
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
});
const Supersaturated = new craftingWordAndItem({
  itemName: "Chemical X",
  craftingWord: "Supersaturated",
  idKeyword: "Supersaturated",
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
});
const Sweet = new craftingWordAndItem({
  itemName: "Honey",
  craftingWord: "Sweet",
  idKeyword: "Sweet",
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
});
const Alkaline = new craftingWordAndItem({
  itemName: "Industrial Cleaner",
  craftingWord: "Alkaline",
  idKeyword: "Alkaline",
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
});
const Concentrated = new craftingWordAndItem({
  itemName: "Caster Oil",
  craftingWord: "Concentrated",
  idKeyword: "Concentrated",
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
});
const Congealed = new craftingWordAndItem({
  itemName: "Cloroform",
  craftingWord: "Congealed",
  idKeyword: "Congealed",
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
});
const Convulsive = new craftingWordAndItem({
  itemName: "Laughing Gas",
  craftingWord: "Convulsive",
  idKeyword: "Convulsive",
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
});
const Crude = new craftingWordAndItem({
  itemName: "Oil",
  craftingWord: "Crude",
  idKeyword: "Crude",
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
});
const Dehydrated = new craftingWordAndItem({
  itemName: "Aerosol",
  craftingWord: "Dehydrated",
  idKeyword: "Dehydrated",
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
});
const Explosive = new craftingWordAndItem({
  itemName: "Nitro Glycerine",
  craftingWord: "Explosive",
  idKeyword: "Explosive",
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
});
const Hazardous = new craftingWordAndItem({
  itemName: "Turpentine",
  craftingWord: "Hazardous",
  idKeyword: "Hazardous",
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
});
const Ionic = new craftingWordAndItem({
  itemName: "Methanol",
  craftingWord: "Ionic",
  idKeyword: "Ionic",
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
});
const Mutagenic = new craftingWordAndItem({
  itemName: "Mutant Fungus",
  craftingWord: "Mutagenic",
  idKeyword: "Mutagenic",
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
});
const Saturated = new craftingWordAndItem({
  itemName: "Adrenaline",
  craftingWord: "Saturated",
  idKeyword: "Saturated",
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
});
const Unsaturated = new craftingWordAndItem({
  itemName: "Saline",
  craftingWord: "Unsaturated",
  idKeyword: "Unsaturated",
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
});
const Unstable = new craftingWordAndItem({
  itemName: "Liquid Krypton",
  craftingWord: "Unstable",
  idKeyword: "Unstable",
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
});
const Violent = new craftingWordAndItem({
  itemName: "Hydrogen Peroxide",
  craftingWord: "Violent",
  idKeyword: "Violent",
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
});
//! Mechanical Crafting
const Assisting = new craftingWordAndItem({
  itemName: "Scrap Metal",
  craftingWord: "Assisting",
  idKeyword: "Assisting",
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
});
const Automatic = new craftingWordAndItem({
  itemName: "Expresso Machine",
  craftingWord: "Automatic",
  idKeyword: "Automatic",
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
  effect: "Start - Direct (1 effect to 1 target)",
});
const Auxiliary = new craftingWordAndItem({
  itemName: "Computer",
  craftingWord: "Auxiliary",
  idKeyword: "Auxiliary",
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
  effect: "End - Direct (1 effect to 1 target)",
});
const Cordless = new craftingWordAndItem({
  itemName: "Scrap Electronics",
  craftingWord: "Cordless",
  idKeyword: "Cordless",
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
});
const Personal = new craftingWordAndItem({
  itemName: "Goggles",
  craftingWord: "Personal",
  idKeyword: "Personal",
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
});
const SpringLoaded = new craftingWordAndItem({
  // NOTE could not add the dash
  itemName: "Hair Dryer",
  craftingWord: "Spring-Loaded",
  idKeyword: "SpringLoaded",
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
});
const Sturdy = new craftingWordAndItem({
  itemName: "Freedom Tower Door",
  craftingWord: "Sturdy",
  idKeyword: "Sturdy",
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
});
const Triggered = new craftingWordAndItem({
  itemName: "Plasma TV",
  craftingWord: "Triggered",
  idKeyword: "Triggered",
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
  effect: "Reaction - Redirect (Redirect the next 2+potency effect to target)",
});
const Welding = new craftingWordAndItem({
  itemName: "Duct Tape",
  craftingWord: "Welding",
  idKeyword: "Welding",
  craftingType: "Mechanical",
  itemType: "1-Frame",
  craftingNumber: 2,
  actionTime: "Power",
  damageType: "Armor",
  uses: 4,
  potency: 1,
  targets: 1,
  backlash: 0,
  turns: 2,
  collateralDamage: 0,
  consumedBacklash: 0,
  effect: "Power – Armor (-1 effect received for 2 turns)",
});
const Coolant = new craftingWordAndItem({
  itemName: "Fan",
  craftingWord: "Coolant",
  idKeyword: "Coolant",
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
});
const Corrosive = new craftingWordAndItem({
  itemName: "Car Battery",
  craftingWord: "Corrosive",
  idKeyword: "Corrosive",
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
});
const Digital = new craftingWordAndItem({
  itemName: "Circuit Board",
  craftingWord: "Digital",
  idKeyword: "Digital",
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
});
const Halogen = new craftingWordAndItem({
  itemName: "Laser Pointer",
  craftingWord: "Halogen",
  idKeyword: "Halogen",
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
});
const Inhibitor = new craftingWordAndItem({
  itemName: "Capacitor",
  craftingWord: "Inhibitor",
  idKeyword: "Inhibitor",
  craftingType: "Mechanical",
  itemType: "2-Mechanism",
  craftingNumber: 4,
  actionTime: "",
  damageType: "Debuff",
  uses: 0,
  potency: 1,
  targets: 0,
  backlash: 0,
  turns: 1,
  collateralDamage: 0,
  consumedBacklash: 0,
  effect: "Debuff (-1 damage for 1 turn, Direct only)",
});
const Irradiated = new craftingWordAndItem({
  itemName: "Uranium",
  craftingWord: "Irradiated",
  idKeyword: "Irradiated",
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
});
const Magnetic = new craftingWordAndItem({
  itemName: "Battery",
  craftingWord: "Magnetic",
  idKeyword: "Magnetic",
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
});
const Pneumatic = new craftingWordAndItem({
  itemName: "Air Horn",
  craftingWord: "Pneumatic",
  idKeyword: "Pneumatic",
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
});
const Repairing = new craftingWordAndItem({
  itemName: "Superglue",
  craftingWord: "Repairing",
  idKeyword: "Repairing",
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
});
const RubeGoldberg = new craftingWordAndItem({
  // NOTE could not add the dash
  itemName: "Rubber Ducky",
  craftingWord: "Rube-Goldberg",
  idKeyword: "RubeGoldberg",
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
});
const Seismic = new craftingWordAndItem({
  itemName: "Speaker",
  craftingWord: "Seismic",
  idKeyword: "Seismic",
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
});
const Sharp = new craftingWordAndItem({
  itemName: "Metal Shards",
  craftingWord: "Sharp",
  idKeyword: "Sharp",
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
});
const Thermal = new craftingWordAndItem({
  itemName: "Bunsen Burner",
  craftingWord: "Thermal",
  idKeyword: "Thermal",
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
});
const Wireless = new craftingWordAndItem({
  itemName: "V.R. Helmet",
  craftingWord: "Wireless",
  idKeyword: "Wireless",
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
});
const Bulky = new craftingWordAndItem({
  itemName: "Barrel",
  craftingWord: "Bulky",
  idKeyword: "Bulky",
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
});
const Compressed = new craftingWordAndItem({
  itemName: "Micro-Fusion Cell",
  craftingWord: "Compressed",
  idKeyword: "Compressed",
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
});
const Dangerous = new craftingWordAndItem({
  itemName: "Gun Powder",
  craftingWord: "Dangerous",
  idKeyword: "Dangerous",
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
});
const Diesel = new craftingWordAndItem({
  itemName: "Engine",
  craftingWord: "Diesel",
  idKeyword: "Diesel",
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
});
const Efficient = new craftingWordAndItem({
  itemName: "Engine",
  craftingWord: "Efficient",
  idKeyword: "Efficient",
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
});
const Golem = new craftingWordAndItem({
  itemName: "Unity's Power",
  craftingWord: "Golem",
  idKeyword: "Golem",
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
});
const HighMaintenance = new craftingWordAndItem({
  // NOTE could not add the dash
  itemName: "Broken Laser Turret",
  craftingWord: "High-Maintenance",
  idKeyword: "HighMaintenance",
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
});
const Incandescent = new craftingWordAndItem({
  itemName: "Infrared Sensor",
  craftingWord: "Incandescent",
  idKeyword: "Incandescent",
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
});
const Manual = new craftingWordAndItem({
  itemName: "Focusing Lens",
  craftingWord: "Manual",
  idKeyword: "Manual",
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
});
const Module = new craftingWordAndItem({
  itemName: "Om-X Power",
  craftingWord: "Module",
  idKeyword: "Module",
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
});
const Motorized = new craftingWordAndItem({
  itemName: "Servos",
  craftingWord: "Motorized",
  idKeyword: "Motorized",
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
});
const Overclocked = new craftingWordAndItem({
  itemName: "Projector",
  craftingWord: "Overclocked",
  idKeyword: "Overclocked",
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
});
const Precision = new craftingWordAndItem({
  itemName: "Centrifuge",
  craftingWord: "Precision",
  idKeyword: "Precision",
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
});
const Prototype = new craftingWordAndItem({
  itemName: "Fuel Cell",
  craftingWord: "Prototype",
  idKeyword: "Prototype",
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
});
const Reliable = new craftingWordAndItem({
  itemName: "Rope",
  craftingWord: "Reliable",
  idKeyword: "Reliable",
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
});
const Rigid = new craftingWordAndItem({
  itemName: "Processed Alloy",
  craftingWord: "Rigid",
  idKeyword: "Rigid",
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
});
const Ruinous = new craftingWordAndItem({
  itemName: "Giant Saw Blade",
  craftingWord: "Ruinous",
  idKeyword: "Ruinous",
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
});
const Supercharged = new craftingWordAndItem({
  itemName: "Gyroscope",
  craftingWord: "Supercharged",
  idKeyword: "Supercharged",
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
});
const Targeting = new craftingWordAndItem({
  itemName: "Binoculars",
  craftingWord: "Targeting",
  idKeyword: "Targeting",
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
  collateralDamage: 0,
  consumedBacklash: 0,
  effect: "Potency -1, Targets +2",
});
const UserFriendly = new craftingWordAndItem({
  // NOTE could not add the dash
  itemName: "Old Costume",
  craftingWord: "User-Friendly",
  idKeyword: "UserFriendly",
  craftingType: "Mechanical",
  itemType: "3-Component",
  craftingNumber: 2,
  actionTime: "",
  damageType: "",
  uses: 0,
  potency: 1,
  targets: -100,
  backlash: 0,
  turns: 0,
  collateralDamage: 0,
  consumedBacklash: 0,
  effect: "Potency +1, Self Only",
});
const Vibrating = new craftingWordAndItem({
  itemName: "Joystick",
  craftingWord: "Vibrating",
  idKeyword: "Vibrating",
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
});
const Virtual = new craftingWordAndItem({
  itemName: "Video Game",
  craftingWord: "Virtual",
  idKeyword: "Virtual",
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
});
const WindUp = new craftingWordAndItem({
  // NOTE could not add the dash
  itemName: "Drill",
  craftingWord: "Wind-Up",
  idKeyword: "WindUp",
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
});
const LegacyLineBlood = new craftingWordAndItem({
  // NOTE could not add the dash
  itemName: "Legacy-line Blood",
  craftingWord: "Legacy-line Blood",
  idKeyword: "LegacyLineBlood",
  craftingType: "Special",
  itemType: "special",
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
  effect: "Special - Needed for Specific Recipe",
});

const craftingWordList = {
  Active: Active,
  Continuous: Continuous,
  Crystalized: Crystalized,
  Lubricant: Lubricant,
  Preserving: Preserving,
  Product: Product,
  Reactant: Reactant,
  Residual: Residual,
  Spasmodic: Spasmodic,
  Acidic: Acidic,
  Coagulated: Coagulated,
  Corrupted: Corrupted,
  Debilitating: Debilitating,
  Distilled: Distilled,
  Endothermic: Endothermic,
  Exothermic: Exothermic,
  Flammable: Flammable,
  Galvanic: Galvanic,
  Injected: Injected,
  Neural: Neural,
  Pulsating: Pulsating,
  Supersaturated: Supersaturated,
  Sweet: Sweet,
  Alkaline: Alkaline,
  Concentrated: Concentrated,
  Congealed: Congealed,
  Convulsive: Convulsive,
  Crude: Crude,
  Dehydrated: Dehydrated,
  Explosive: Explosive,
  Hazardous: Hazardous,
  Ionic: Ionic,
  Mutagenic: Mutagenic,
  Saturated: Saturated,
  Unsaturated: Unsaturated,
  Unstable: Unstable,
  Violent: Violent,
  Assisting: Assisting,
  Automatic: Automatic,
  Auxiliary: Auxiliary,
  Cordless: Cordless,
  Personal: Personal,
  "Spring-Loaded": SpringLoaded,
  Sturdy: Sturdy,
  Triggered: Triggered,
  Welding: Welding,
  Coolant: Coolant,
  Corrosive: Corrosive,
  Digital: Digital,
  Halogen: Halogen,
  Inhibitor: Inhibitor,
  Irradiated: Irradiated,
  Magnetic: Magnetic,
  Pneumatic: Pneumatic,
  Repairing: Repairing,
  "Rube-Goldberg": RubeGoldberg,
  Seismic: Seismic,
  Sharp: Sharp,
  Thermal: Thermal,
  Wireless: Wireless,
  Bulky: Bulky,
  Compressed: Compressed,
  Dangerous: Dangerous,
  Diesel: Diesel,
  Efficient: Efficient,
  Golem: Golem,
  "High-Maintenance": HighMaintenance,
  Incandescent: Incandescent,
  Manual: Manual,
  Module: Module,
  Motorized: Motorized,
  Overclocked: Overclocked,
  Precision: Precision,
  Prototype: Prototype,
  Reliable: Reliable,
  Rigid: Rigid,
  Ruinous: Ruinous,
  Supercharged: Supercharged,
  Targeting: Targeting,
  "User-Friendly": UserFriendly,
  Vibrating: Vibrating,
  Virtual: Virtual,
  "Wind-Up": WindUp,
  "Legacy-line Blood": LegacyLineBlood,
};

// Created a new Matrix using the Constructors Crafting Words
const craftingWordMatrix = Object.entries(craftingWordList).map(
  (craftWords) => craftWords[1].craftingWord
);

let searchCraftingWords = craftingWordMatrix.sort();
let craftIngredients = []; // This is the matrix that starts off empty and will store the Crafting Words we are adding to the table.
let blueprint = "nada";

//! Buttons - Query Selectors
let workBench = document.querySelector(".crafting-table");
let indexCard = document.querySelector(".card");
let addButton = document.querySelector("#addItemButton");
const searchInput = document.querySelector("[data-search]"); // Search Field
let createButton = document.querySelector("#createButton");
let resetButton = document.querySelector("#resetButton");
let recipeBlueprintButton = document.querySelector("#recipeBlueprintButton");
let modal = document.querySelector("#modal");
let modalTitle = document.querySelector("#modal-title");
let modalSearch = document.querySelector("#modal-search");

//! Index Card Queries
let nameLarp = document.querySelector(".nameLARP"); //Index Card Header
let cardType = document.querySelector(".cardType"); // Index Card Header
let itemName = document.querySelector("#itemName"); // Probably will just be "New Device" or "Created Mixture"
let itemDescription = document.querySelector("#itemDescription"); //This is where all the rest of the variables are formatted into a sentence.
let usesWords = document.querySelector("#itemUses"); //Uses vs HP
let numberOfUses = document.querySelector("#itemUsesValue"); //How many Times can the item be used
let itemUsesTime = document.querySelector("#itemUsesTime"); //Uses per game or uses per combat?
let tag = document.querySelector(".tag"); //Tag Mechanic
let tagLine = document.querySelector("#tags"); //Tag Mechanic
let tag1 = document.querySelector("#tag1"); //Tag Mechanic, this will only Add Golem or Module
let tag3 = document.querySelector("#tag3"); //Tag Mechanic, this will add the Action Timing
let tag4 = document.querySelector("#tag4"); //Tag Mechanic, this will add the Damage Type
let tag5 = document.querySelector("#tag5"); //Tag Mechanic, this will only add Heavy or Extract
let cardFooterItemType = document.querySelector("#cardFooterItemType"); // Probably will just be "Device" or "Mixture"
let craftingNumberValue = document.querySelector("#craftingNumberValue");

dropdownMenu(searchCraftingWords); //Call the drop down
//The WorkBench & Index Card are initally hidden so you can see the sweet Oblivaeon Artwork
workBench.style.display = "none"; //Invisible Crafting Table
createButton.style.display = "none"; //Invisible Button
resetButton.style.display = "none"; //Invisible Button
recipeBlueprintButton.style.display = "none"; //Invisible Button
indexCard.style.display = "none"; //Invisible Index Card

// Input field value is read here.
searchInput.addEventListener("input", (e) => {
  let value = e.target.value; // This find the value of the input field
  value = titleCase(value);
});

// This displays all the Crafting Words in the Search Bar's drop down menu.
function dropdownMenu(inputCraftingWords) {
  dropdownClear(); // This will clear the drop down so it can be rebuilt
  let dropdownWords = [];
  let dropdownList = [];
  inputCraftingWords.forEach((craftWord) => {
    dropdownWords = document.createElement("option");
    dropdownWords.value = craftWord;
    dropdownList = document.getElementById("crafting-words");
    dropdownList.appendChild(dropdownWords);
  });
}

// This will clear the Drop Down Menu so it can be properly rebuilt
function dropdownClear() {
  let dropList = document.getElementById("crafting-words");
  while (dropList.hasChildNodes()) {
    dropList.removeChild(dropList.firstChild);
  }
}

// This removes a single HTML element, so no Crafting Words can be doubled up on.
function dropdownModifyRemove(removedItem) {
  let dropdownList = document.getElementById("crafting-words");
  for (let i = 0; i < dropdownList.children.length; i++) {
    if (removedItem === dropdownList.children[i].value) {
      dropdownList.children[i].remove(); //! THIS WILL REMOVE THE HTML ELEMENT
    }
  }
}

addButton.addEventListener("click", addItem); //! "Add Item" BUTTON
populateTable(craftIngredients); // Populates the Table with the Crafting Words in our craftIngredients Matrix

function addItem() {
  // This function adds an item
  if (craftIngredients.length >= 5) {
    alert(
      `Sorry, a maximum of 5 items can be used when Crafting. Please remove an item before adding another.`
    );
  } else {
    console.log("Add Item button clicked"); // Confirmation
    let itemSearcher = document.querySelector("#searched-item"); // Search Bar
    let wordIndex = searchCraftingWords.indexOf(itemSearcher.value);
    //console.log("Word Index", wordIndex, itemSearcher.value); //! Double Check
    if (wordIndex !== -1) {
      //If the Word in the Search Bar is not on the list then nothing happens
      workBench.style.display = "block"; //This makes the Crafting Table Appear
      createButton.style.display = "inline-block"; //This makes the Craft Item Button Appear
      resetButton.style.display = "inline-block"; //This makes the Craft Item Button Appear
      searchCraftingWords.splice(wordIndex, 1); //Removed Item from Drop Down list
      craftIngredients.push(itemSearcher.value); //This adds the searched word to the table
    }
    console.log("craftIngredients added to the Table", craftIngredients); //! Verify
    recipeBlueprintButton.style.display = "none"; //Invisible Button
    recipeChecker(); //This checks the specific Recipes in Game
    dropdownModifyRemove(itemSearcher.value);
    itemSearcher.value = ""; //Resets the Search Bar
    populateTable(craftIngredients); //Function Call to add item to the table
    indexCard.style.display = "none"; //Hides the Index Card if an Item is added
  }
}

//! "Remove" Button
// This function removes the selected row in the Table
function removeRow(index, selectedCW) {
  indexCard.style.display = "none"; //Makes the Index Card Disappear
  console.log("Remove button clicked"); //Confirmation
  document.querySelector(".craftTable").deleteRow(index);
  craftIngredients;
  recipeBlueprintButton.style.display = "none"; //Invisible Button
  let selectedWord = selectedCW.craftingWord;
  console.log("selectedWord", selectedWord); //! Verify
  let indexWord = craftIngredients.indexOf(selectedWord);
  console.log("indexWord", indexWord); //! Verify
  if (indexWord !== -1) {
    craftIngredients.splice(indexWord, 1);
    searchCraftingWords.push(selectedWord);
    searchCraftingWords = searchCraftingWords.sort();
    recipeChecker(); //This checks the specific Recipes in Game
    dropdownMenu(searchCraftingWords);
  }
  populateTable(craftIngredients);
  if (craftIngredients.length == 0) {
    createButton.style.display = "none"; //Makes the Craft item Button Disappear
    resetButton.style.display = "none"; //Makes the Reset Button Disappear
    workBench.style.display = "none"; //Hides the Crafting Table
  }
}

// This function populates the table
function populateTable(craftWords) {
  let table = document.querySelector("#tableAdd");
  //console.log("In Populate Table", craftWords, "Length =", craftWords.length); //! TEST

  // This section automatically sorts the table by its Item Type
  craftIngredients.sort((a, b) => {
    const itemA = craftingWordList[a].itemType;
    const itemB = craftingWordList[b].itemType;
    //const itemA = a.itemType.toUpperCase();
    //const itemB = b.itemType.toUpperCase();
    if (craftingWordList[a].itemType < craftingWordList[b].itemType) {
      //no constants needed with these variables
      return -1;
    }
    if (itemA > itemB) {
      //if you want to use the constants
      return 1;
    }
    return 0;
  });
  table.innerHTML = ""; // This resets the table before rebuilding it
  // This loops through the craftWords Matrix and builds the table
  for (let i = 0; i < craftWords.length; i++) {
    let template = `<tr id="tableRow${i + 1}" class="tableRow">
  <td class="craftingType" id="cType${i + 1}">${
      craftingWordList[craftWords[i]].craftingType
    }</td>
  <td class="craftingWord" id="cWord${i + 1}">${
      craftingWordList[craftWords[i]].craftingWord
    }</td>
  <td class="craftItemName" id="cItem${i + 1}">${
      craftingWordList[craftWords[i]].itemName
    }</td>
  <td class="craftItemType" id="cItemType${i + 1}">${
      craftingWordList[craftWords[i]].itemType
    }</td>
  <td class="craftNum" id="cNum${i + 1}">${
      craftingWordList[craftWords[i]].craftingNumber
    }</td>
  <td class="addedItemEffect" id="cEffect${i + 1}">${
      craftingWordList[craftWords[i]].effect
    }</td>
  <td><button onclick="removeRow(${i + 1}, ${
      craftingWordList[craftWords[i]].idKeyword
    })" class="button lineBTN" id="removeItemBtn${i + 1}" >Remove</button></td>
  </tr>`;
    table.innerHTML += template; //onclick="removeLine(i)"
  }
}

resetButton.addEventListener("click", resetTable); //! "Reset" Button

//This resets the Working Table
function resetTable() {
  console.log("Reset button clicked"); // Confirmation
  craftIngredients = []; // This should empty the table
  searchCraftingWords = Object.entries(craftingWordList)
    .map((craftWords) => craftWords[1].craftingWord)
    .sort(); // This should reset the dropdown menu
  //dropdownMenu(craftIngredients);
  dropdownMenu(searchCraftingWords);
  populateTable(craftIngredients);
  resetItemCard();
  workBench.style.display = "none"; //Makes the Crafting Table Disappear
  createButton.style.display = "none"; //Makes the Craft item Button Disappear
  resetButton.style.display = "none"; //Makes the Reset Button Disappear
  recipeBlueprintButton.style.display = "none"; //Makes the Reset Button Disappear
  indexCard.style.display = "none"; //Makes the Index Card Disappear
}

// This Resets the Index Card
function resetItemCard() {
  itemName.innerHTML = `Item Name`;
  itemDescription.innerHTML = `This Item does a Thing`;
  usesWords.innerHTML = `Uses:`;
  numberOfUses.innerHTML = `X`;
  itemUsesTime.innerHTML = `per combat`;
  tag1.innerHTML = `[ Tag 1, Tag 2,`;
  tag3.innerHTML = `Tag 3,`;
  tag4.innerHTML = `Tag 4,`;
  tag5.innerHTML = `Tag 5`;
  cardFooterItemType.innerHTML = `(Item:`;
  craftingNumberValue.innerHTML = `000`;
}

createButton.addEventListener("click", itemCardBuilder); //! "Craft Item" Button

function itemCardBuilder() {
  console.log("Craft Item button clicked"); //Confirmation
  specialCraftingWords();
  let chemCT = 0; //Chemical Crafting Type
  let mechCT = 0; //Mechanical Crafting Type
  console.log("chemCT =", chemCT, "& mechCT =", mechCT); // Begining Confirmation

  for (let i = 0; i < craftIngredients.length; i++) {
    console.log(
      craftingWordList[craftIngredients[i]].craftingWord,
      ": Index",
      i + 1,
      "of",
      craftIngredients.length
    ); // This will Verify the Crafting Word in the Console Log
    if (craftingWordList[craftIngredients[i]].craftingType == "Chemical") {
      console.log(
        craftingWordList[craftIngredients[i]].craftingWord,
        "is a Chemical crafting type."
      );
      chemCT++; // Adds 1 to the Chemical Crafting Type
    } else if (
      craftingWordList[craftIngredients[i]].craftingType == "Mechanical"
    ) {
      console.log(
        craftingWordList[craftIngredients[i]].craftingWord,
        "is a Mechanical crafting type."
      );
      mechCT++; // Adds 1 to the Mechanical Crafting Type
    } else {
      console.log(
        `There is an error with ${
          craftingWordList[craftIngredients[i]]
        }'s crafting type`
      );
    }
    console.log("chemCT =", chemCT, "& mechCT =", mechCT); //Step by Step Confirmation
  }
  identifyDeviceOrMixture(chemCT, mechCT); //Mixture or Device
}

// This function checks to make sure proper items are being mixed.
function identifyDeviceOrMixture(chemCT, mechCT) {
  console.log("Inside function deviceOrMixture"); //! TEST
  if (chemCT >= 2 && mechCT == 0) {
    console.log("This is a crafted Chemical Mixture"); //! TEST
    let solution1 = 0;
    let compound2 = 0;
    for (let i = 0; i < craftIngredients.length; i++) {
      if (craftingWordList[craftIngredients[i]].itemType == "1-Solution") {
        solution1++;
      } else if (
        craftingWordList[craftIngredients[i]].itemType == "2-Compound"
      ) {
        compound2++;
      }
    }
    if (solution1 == 0) {
      alert("This Chemical Mixture needs a Solution."); // ALERT
    } else if (solution1 > 1) {
      alert("This Chemical Mixture can only have 1 Solution."); // ALERT
    } else if (compound2 == 0) {
      alert("This Chemical Mixture needs at least 1 Compound."); // ALERT
    } else {
      itemName.innerHTML = `Crafted Chemical Mixture`;
      cardFooterItemType.innerHTML = `(Mixture:`;
      numberOfUses.innerHTML = craftingWordList[craftIngredients[0]].uses;
      itemUsesTime.innerHTML = `(after consumption)`;
      identifyCraftingNumber(); // Adds up Crafting Number
      effectDescription();
      if (craftIngredients.includes(`Mutagenic`)) {
        //This is a Special Case
        usesWords.innerHTML = `This is a Permanent Ability.`;
        numberOfUses.innerHTML = ``;
        itemUsesTime.innerHTML = ``;
      }
      indexCard.style.display = "block"; //This makes the Index Card Appear
    }
  } else if (mechCT >= 2 && chemCT == 0) {
    console.log("This is a crafted Mechanical Device"); //! TEST
    let frame1 = 0;
    let mechanism2 = 0;
    for (let i = 0; i < craftIngredients.length; i++) {
      if (craftingWordList[craftIngredients[i]].itemType == "1-Frame") {
        frame1++;
      } else if (
        craftingWordList[craftIngredients[i]].itemType == "2-Mechanism"
      ) {
        mechanism2++;
      }
    }
    if (frame1 == 0) {
      alert("This Mechanical Device needs a Frame."); // ALERT
    } else if (frame1 > 1) {
      alert("This Mechanical Device can only have 1 Frame."); // ALERT
    } else if (mechanism2 == 0) {
      alert("This Mechanical Device needs at least 1 Mechanism."); // ALERT
    } else {
      itemName.innerHTML = `Crafted Mechanical Device`;
      cardFooterItemType.innerHTML = `(Device:`;
      identifyCraftingNumber(); // Adds up Crafting Number
      deviceUses(); // Adds up Item Uses
      effectDescription();
      indexCard.style.display = "block"; //This makes the Index Card Appear
    }
  } else if (mechCT >= 1 && chemCT >= 1) {
    console.log(
      "Crafted Item cannot have both Chemical AND Mechanial Components."
    ); //! TEST
    alert("Crafted Item cannot have both Chemical AND Mechanial Components."); // ALERT
  } else {
    alert("You need at least 2 ingredients to craft an item."); // ALERT
  }
}

function identifyCraftingNumber() {
  let craftNumber = 0;
  for (let i = 0; i < craftIngredients.length; i++) {
    craftNumber += craftingWordList[craftIngredients[i]].craftingNumber;
    //console.log(craftNumber, "CraftNumber)"); //! TEST
  }
  craftingNumberValue.innerHTML = craftNumber;
}

function deviceUses() {
  let totalUses = 0;
  for (let i = 0; i < craftIngredients.length; i++) {
    totalUses += craftingWordList[craftIngredients[i]].uses;
    console.log(totalUses, "Item Uses)"); //! TEST
  }
  numberOfUses.innerHTML = totalUses;
  if (craftIngredients.includes("Golem")) {
    usesWords.innerHTML = `Health:`;
    itemUsesTime.innerHTML = `HP (Destroyed when HP is reduced to 0)`; //Special Case
  } else if (craftIngredients.includes("Virtual")) {
    itemUsesTime.innerHTML = `uses per Combat.`; //Special Case
  } else {
    itemUsesTime.innerHTML = `uses before the Device breaks.`; // Basic
  }
}

function effectDescription() {
  let totalPotency = 0;
  let totalTargets = 0;
  let thatThoseTargets = "that target";
  let totalBacklash = 0;
  let totalTurns = 0;
  let totalCollateralDamage = 0;
  let totalConsumedBacklash = 0;
  let totalDamageTypes = ``; // Lists different types of damages
  let totalDamageWords = ``; //Potency + Damage Types
  let count2 = 0; //Tracks how many 2-Compound or 2-Mechanism are in the Item

  for (let i = 0; i < craftIngredients.length; i++) {
    totalPotency += craftingWordList[craftIngredients[i]].potency;
    totalTargets += craftingWordList[craftIngredients[i]].targets;
    totalBacklash += craftingWordList[craftIngredients[i]].backlash;
    totalTurns += craftingWordList[craftIngredients[i]].turns;
    totalCollateralDamage +=
      craftingWordList[craftIngredients[i]].collateralDamage;
    totalConsumedBacklash +=
      craftingWordList[craftIngredients[i]].consumedBacklash;
    console.log(craftingWordList[craftIngredients[i]]); //Verify
    console.log(
      `After adding ${
        craftingWordList[craftIngredients[i]].craftingWord
      } the total values are as follows: Potency ${totalPotency}, Targets ${totalTargets}, Backlash ${totalBacklash}, Turns ${totalTurns}, Collateral Damage ${totalCollateralDamage}, Consumed Backlash ${totalConsumedBacklash}`
    ); //Verify that math is correct

    if (
      craftingWordList[craftIngredients[i]].itemType == "2-Compound" ||
      craftingWordList[craftIngredients[i]].itemType == "2-Mechanism"
    ) {
      count2++;
      console.log(`There's ${count2} 2-Mechanism / 2-Compound(s) being used.`); // !TEST
    }
  }

  //! Total Turns
  let totalTurnsWords = "X turns";
  if (totalTurns == 1) {
    totalTurnsWords = "1 turn";
  } else if (totalTurns <= 0) {
    totalTurnsWords = "";
  } else {
    totalTurnsWords = `${totalTurns} turns`;
  }

  //! Total Targets
  let totalTargetsWords = "X targets";
  if (totalTargets == 1) {
    totalTargetsWords = "1 target";
  } else if (totalTargets > 15) {
    totalTargetsWords = "everyone";
    thatThoseTargets = "every target";
  } else if (totalTargets <= 0) {
    // Self will always take Priority
    totalTargetsWords = "yourself";
    thatThoseTargets = "you";
  } else {
    totalTargetsWords = `${totalTargets} targets`;
    thatThoseTargets = "those targets";
  }

  //! Total Consumed Backlash Damage
  let consumedBacklashWords = ``; //If the number is 0 this is unchanged.
  if (totalConsumedBacklash > 0) {
    consumedBacklashWords = `If you consume this mixture take ${totalConsumedBacklash} Toxic backlash damage and gain the following ability: `;
  }

  //! Item's Damage Types Description
  let debuffWords = ""; //This only works for Direct Powers
  let damageTypeCount2 = 1; //Tracks the count up for Different Damage Types
  let damageTagCount = 1; //Tracks the Count for Tags
  let tag4Words = ""; //This is for the Tag line in [here]

  //! Tag 4 Determination
  for (let i = 0; i < craftIngredients.length; i++) {
    console.log(`There's ${count2} 2-Mechanism / 2-Compound(s) being used.`);
    if (
      craftingWordList[craftIngredients[i]].itemType == "2-Compound" ||
      craftingWordList[craftIngredients[i]].itemType == "2-Mechanism"
    ) {
      if (damageTagCount == 1) {
        tag4Words = craftingWordList[craftIngredients[i]].damageType;
        damageTagCount++;
        console.log("First Tag 4");
      } else if (damageTagCount == count2) {
        tag4Words =
          tag4Words + "/" + craftingWordList[craftIngredients[i]].damageType;
        damageTagCount++;
        console.log("Final Tag 4");
      } else {
        tag4Words =
          tag4Words + "/" + craftingWordList[craftIngredients[i]].damageType;
        damageTagCount++;
        console.log(damageTagCount, " Tag 4");
      }
    }
  }
  tag3.innerHTML = craftingWordList[craftIngredients[0]].actionTime + ","; //This sets the action Time Tage (Tag #3)
  tag4.innerHTML = tag4Words; // Sets Damage Type Tags (Tag #4)

  //! Extra Tags (Tag 1 and Tag 5)
  tag1.innerHTML = `[ Combat,`; // Default
  tag5.innerHTML = ``; //No Tag no words
  if (craftIngredients.includes(`Golem`)) {
    tag1.innerHTML = "[ Golem, Combat,";
  }
  if (craftIngredients.includes("Module")) {
    tag1.innerHTML = "[ Module, Combat,";
  }
  if (craftIngredients.includes("Bulky")) {
    tag5.innerHTML = ", Heavy";
  }
  if (craftIngredients.includes("Mutagenic")) {
    tag5.innerHTML = ", Mutagenic";
  }

  //! This determines the Damage Types of the Item
  for (let i = 0; i < craftIngredients.length; i++) {
    if (
      craftIngredients.includes(`Debilitating`) ||
      craftIngredients.includes(`Inhibitor`)
    ) {
      console.log("count2", count2);
      if (count2 > 1) {
        debuffWords = ` and reduce all damage dealt by ${thatThoseTargets} by ${totalPotency} for ${totalTurnsWords}`;
        console.log("debuff words", debuffWords); //! TEST
      } else if ((count2 = 1)) {
        debuffWords = `All damage dealt by ${totalTargetsWords} is reduced by ${totalPotency} damage for ${totalTurnsWords}`;
      }
    }
  }

  for (let i = 0; i < craftIngredients.length; i++) {
    console.log(`There's ${count2} 2-Mechanism / 2-Compound(s) being used.`);
    if (
      craftingWordList[craftIngredients[i]].itemType == "2-Compound" ||
      craftingWordList[craftIngredients[i]].itemType == "2-Mechanism"
    ) {
      if (
        damageTypeCount2 == 1 &&
        craftingWordList[craftIngredients[i]].damageType != "Debuff"
      ) {
        totalDamageWords =
          `${totalPotency} ` + craftingWordList[craftIngredients[i]].damageType;
        totalDamageTypes = craftingWordList[craftIngredients[i]].damageType;
        damageTypeCount2++;
        console.log("first damage type");
      } else if (
        damageTypeCount2 == count2 &&
        craftingWordList[craftIngredients[i]].damageType != "Debuff"
      ) {
        totalDamageWords =
          totalDamageWords +
          ` & ${totalPotency} ` +
          craftingWordList[craftIngredients[i]].damageType;
        totalDamageTypes =
          totalDamageTypes +
          ` & ` +
          craftingWordList[craftIngredients[i]].damageType;
        damageTypeCount2++;
        console.log("Final damage type");
      } else if (craftingWordList[craftIngredients[i]].damageType != "Debuff") {
        totalDamageWords =
          totalDamageWords +
          `, ${totalPotency} ` +
          craftingWordList[craftIngredients[i]].damageType;
        totalDamageTypes =
          totalDamageTypes +
          `, ` +
          craftingWordList[craftIngredients[i]].damageType;
        damageTypeCount2++;
        console.log(damageTypeCount2, " damage type");
      } else {
        damageTypeCount2++;
      }
    }
    console.log(
      "Total Damage Type",
      totalDamageTypes,
      "Total Damage Words",
      totalDamageWords
    ); //! TEST
  }

  //! Backlash Damage Description
  let backlashDamageType = "";
  let totalBacklashWords = ""; //If there is no damage value then nothing appears

  let damageTypeBacklashCount2 = 1; //Tracks the count up for Different Damage Types
  for (let i = 0; i < craftIngredients.length; i++) {
    console.log(`There's ${count2} 2-Mechanism / 2-Compound(s) being used.`);
    if (
      craftingWordList[craftIngredients[i]].itemType == "2-Compound" ||
      craftingWordList[craftIngredients[i]].itemType == "2-Mechanism"
    ) {
      if (damageTypeBacklashCount2 == 1) {
        backlashDamageType = craftingWordList[craftIngredients[i]].damageType;
        damageTypeBacklashCount2++;
        console.log("first damage type");
      } else if (damageTypeBacklashCount2 == count2) {
        backlashDamageType =
          backlashDamageType +
          ` & deal ${totalBacklash} ` +
          craftingWordList[craftIngredients[i]].damageType;
        console.log("Final damage type");
        damageTypeBacklashCount2++;
      } else {
        backlashDamageType =
          backlashDamageType +
          `, ${totalBacklash} ` +
          craftingWordList[craftIngredients[i]].damageType;
        damageTypeBacklashCount2++;
        console.log(damageTypeCount2, " damage type");
      }
    }
    console.log("Backlash", backlashDamageType); //! TEST
  }

  if (totalBacklash > 0) {
    totalBacklashWords = ` and deal ${totalBacklash} ${backlashDamageType} backlash damage to yourself`;
  }

  //Collateral Damage in Description
  let totalCollateralDamageWords = ""; //If there is no damage value then nothing appears
  if (totalCollateralDamage > 0) {
    totalCollateralDamageWords = ` and ${totalCollateralDamage} collateral damage to the room`;
  }

  //! Description is based on the 1-Solution / 1-Frame
  //There are 9 different types of Solutions / Frames
  for (let i = 0; i < craftIngredients.length; i++) {
    if (
      craftingWordList[craftIngredients[i]].itemType == "1-Solution" ||
      craftingWordList[craftIngredients[i]].itemType == "1-Frame"
    ) {
      //Power – Direct (1 effect to 1 target)
      if (
        craftingWordList[craftIngredients[i]].craftingWord == "Active" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Cordless"
      ) {
        if (
          count2 == 1 &&
          (craftIngredients.includes("Inhibitor") ||
            craftIngredients.includes("Debilitating"))
        ) {
          itemDescription.innerHTML = `${consumedBacklashWords}${debuffWords}${totalBacklashWords}${totalCollateralDamageWords}.`;
        } else {
          itemDescription.innerHTML = `${consumedBacklashWords}Deal ${totalTargetsWords} ${totalDamageWords} damage${debuffWords}${totalBacklashWords}${totalCollateralDamageWords}.`;
        }
      }
      //Power – Armor (-1 effect received for 2 turns)
      else if (
        craftingWordList[craftIngredients[i]].craftingWord == "Crystalized" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Welding"
      ) {
        if (
          count2 == 1 &&
          (craftIngredients.includes("Inhibitor") ||
            craftIngredients.includes("Debilitating"))
        ) {
          itemDescription.innerHTML = `${consumedBacklashWords}${debuffWords}${totalBacklashWords}${totalCollateralDamageWords}.`;
        } else {
          itemDescription.innerHTML = `${consumedBacklashWords}Reduce ${totalDamageTypes} damage dealt to ${totalTargetsWords} by ${totalPotency}for the next ${totalTurnsWords}${debuffWords}${totalBacklashWords}${totalCollateralDamageWords}.`;
        }
      }
      //Power – Buff (+1 effect to 1 target for 2 turns)
      else if (
        craftingWordList[craftIngredients[i]].craftingWord == "Lubricant" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Assisting"
      ) {
        if (
          count2 == 1 &&
          (craftIngredients.includes("Inhibitor") ||
            craftIngredients.includes("Debilitating"))
        ) {
          itemDescription.innerHTML = `${consumedBacklashWords}${debuffWords}${totalBacklashWords}${totalCollateralDamageWords}.`;
        } else {
          itemDescription.innerHTML = `${consumedBacklashWords}Choose ${totalTargetsWords}, incease all ${totalDamageTypes} damage dealt by ${totalPotency} for the next ${totalTurnsWords}${debuffWords}${totalBacklashWords}${totalCollateralDamageWords}.`;
        }
      }
      //Ongoing – Buff (+1 effect)
      else if (
        craftingWordList[craftIngredients[i]].craftingWord == "Continuous" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Personal"
      ) {
        itemDescription.innerHTML = `${consumedBacklashWords}Increase all ${totalDamageTypes} damage by +${totalPotency}${totalBacklashWords}${totalCollateralDamageWords}.`;
      }
      //Ongoing – Armor (-1 effect received)
      else if (
        craftingWordList[craftIngredients[i]].craftingWord == "Preserving" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Sturdy"
      ) {
        itemDescription.innerHTML = `${consumedBacklashWords}Reduce all ${totalDamageTypes} damage dealt to you by ${totalPotency}${totalBacklashWords}${totalCollateralDamageWords}.`;
      }
      //Start - Direct (1 effect to 1 target)
      else if (
        craftingWordList[craftIngredients[i]].craftingWord == "Reactant" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Automatic"
      ) {
        itemDescription.innerHTML = `${consumedBacklashWords}At the start of your turn, deal ${totalTargetsWords} ${totalDamageWords} damage${totalBacklashWords}${totalCollateralDamageWords}.`;
      }
      //End - Direct (1 effect to 1 target)
      else if (
        craftingWordList[craftIngredients[i]].craftingWord == "Product" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Auxiliary"
      ) {
        itemDescription.innerHTML = `${consumedBacklashWords}At the end of your turn, deal ${totalTargetsWords} ${totalDamageWords} damage${totalBacklashWords}${totalCollateralDamageWords}.`;
      }
      // Reaction - Direct (1 effect to 1 target)
      else if (
        craftingWordList[craftIngredients[i]].craftingWord == "Residual" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Spring-Loaded"
      ) {
        itemDescription.innerHTML = `${consumedBacklashWords}Whenever you are dealt damage, deal ${totalTargetsWords} ${totalDamageWords} damage${totalBacklashWords}${totalCollateralDamageWords}.`;
      }
      //Reaction - Redirect (Redirect the next 2+potency effect to target)
      else if (
        craftingWordList[craftIngredients[i]].craftingWord == "Spasmodic" ||
        craftingWordList[craftIngredients[i]].craftingWord == "Triggered"
      ) {
        itemDescription.innerHTML = `${consumedBacklashWords}Redirect the next ${
          2 + totalPotency
        } ${totalDamageTypes} damage you would take to ${totalTargetsWords} of your choice or turn that damage into collateral damage${totalBacklashWords}${totalCollateralDamageWords}.`;
        tag4.innerHTML = "Redirect/" + tag4Words; // Adds Redirect to the Tag 4
      }
      //in case the Code Breaks
      else {
        alert(
          `There is something wrong with ${
            craftingWordList[craftIngredients[i]].craftingWord
          }, try again`
        );
      }
    }
  }
}

//This checks the specific Recipes in Game that break the normal crafting rules
function recipeChecker() {
  if (
    craftIngredients.length == 4 &&
    craftIngredients.includes("Personal") &&
    craftIngredients.includes("Pneumatic") &&
    craftIngredients.includes("Prototype") &&
    craftIngredients.includes("Virtual")
  ) {
    blueprint = "Micro Targeting Computer";
  } else if (
    craftIngredients.length == 4 &&
    craftIngredients.includes("Assisting") &&
    craftIngredients.includes("Compressed") &&
    craftIngredients.includes("Magnetic") &&
    craftIngredients.includes("Spring-Loaded")
  ) {
    blueprint = "Utility Belt";
  } else if (
    craftIngredients.length == 4 &&
    craftIngredients.includes("Golem") &&
    craftIngredients.includes("Overclocked") &&
    craftIngredients.includes("Pneumatic") &&
    craftIngredients.includes("Triggered")
  ) {
    blueprint = "Bee Bot";
  } else if (
    craftIngredients.length == 5 &&
    craftIngredients.includes("Golem") &&
    craftIngredients.includes("Automatic") &&
    craftIngredients.includes("Digital") &&
    craftIngredients.includes("Sturdy") &&
    craftIngredients.includes("User-Friendly")
  ) {
    blueprint = "Platform Bot";
  } else if (
    craftIngredients.length == 5 &&
    craftIngredients.includes("Golem") &&
    craftIngredients.includes("Auxiliary") &&
    craftIngredients.includes("Bulky") &&
    craftIngredients.includes("Prototype") &&
    craftIngredients.includes("Sharp")
  ) {
    blueprint = "Raptor Bot";
  } else if (
    craftIngredients.length == 4 &&
    craftIngredients.includes("Module") &&
    craftIngredients.includes("Automatic") &&
    craftIngredients.includes("Precision") &&
    craftIngredients.includes("Thermal")
  ) {
    blueprint = "Focused Plasma Cannon";
  } else if (
    craftIngredients.length == 5 &&
    craftIngredients.includes("Module") &&
    craftIngredients.includes("Bulky") &&
    craftIngredients.includes("Halogen") &&
    craftIngredients.includes("Irradiated") &&
    craftIngredients.includes("Sturdy")
  ) {
    blueprint = "Temporal Shielding Plating";
  } else if (
    craftIngredients.length == 4 &&
    craftIngredients.includes("Compressed") &&
    craftIngredients.includes("Halogen") &&
    craftIngredients.includes("Overclocked") &&
    craftIngredients.includes("Personal")
  ) {
    blueprint = "Death Ray";
  } else if (
    craftIngredients.length == 5 &&
    craftIngredients.includes("Convulsive") &&
    craftIngredients.includes("Debilitating") &&
    craftIngredients.includes("Preserving") &&
    craftIngredients.includes("Spasmodic") &&
    craftIngredients.includes("Legacy-line Blood")
  ) {
    blueprint = "Regression Serum";
  } else if (
    craftIngredients.length == 4 &&
    craftIngredients.includes("Diesel") &&
    craftIngredients.includes("Exothermic") &&
    craftIngredients.includes("Explosive") &&
    craftIngredients.includes("Triggered")
  ) {
    blueprint = "Thermo-Pulse Explosive";
  } else {
    blueprint = "nada";
  }
  if (blueprint != "nada") {
    //This makes the Recipe Button Appear
    console.log(`Recipe for ${blueprint}`);
    recipeBlueprintButton.innerHTML = `Blueprint: ${blueprint}`;
    recipeBlueprintButton.style.display = "block";
  }
}

recipeBlueprintButton.addEventListener("click", blueprintRecipesCraft); //! "Blueprint Crafting" Button

//Creats Recipes from Blueprinces when the Craft Recipe Button is pushed
function blueprintRecipesCraft() {
  indexCard.style.display = "block"; //This makes the Index Card Appear
  console.log(`Craft Recipe button clicked for ${blueprint}`);
  if (blueprint == "Micro Targeting Computer") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `You deal +2 projectile damage.`;
    usesWords.innerHTML = ``;
    numberOfUses.innerHTML = ``;
    itemUsesTime.innerHTML = ``;
    tag1.innerHTML = `[ Wraith, Combat,`;
    tag3.innerHTML = `Ongoing,`;
    tag4.innerHTML = `Projectile`;
    tag5.innerHTML = ``;
    cardFooterItemType.innerHTML = `(Recipe Device: `;
    craftingNumberValue.innerHTML = `20`;
  } else if (blueprint == "Utility Belt") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `You may use an additional [Power] on your turn if both powers are found on items.  You may not use the same power more than once per turn.`;
    usesWords.innerHTML = ``;
    numberOfUses.innerHTML = ``;
    itemUsesTime.innerHTML = ``;
    tag1.innerHTML = `[ Wraith, Combat,`;
    tag3.innerHTML = `Ongoing`;
    tag4.innerHTML = ``;
    tag5.innerHTML = ``;
    cardFooterItemType.innerHTML = `(Recipe Device: `;
    craftingNumberValue.innerHTML = `20`;
  } else if (blueprint == "Bee Bot") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `You may redirect an attack that would deal damage to an allied target to Bee Bot. Bee Bot has 1 HP and deals 2 projectile damage to anyone who hits it.`;
    usesWords.innerHTML = `Health: `;
    numberOfUses.innerHTML = `2`;
    itemUsesTime.innerHTML = `HP (Destroyed when HP is reduced to 0)`;
    tag1.innerHTML = `[ Golem, Combat,`;
    tag3.innerHTML = `Reaction,`;
    tag4.innerHTML = `Projectile`;
    tag5.innerHTML = ``;
    cardFooterItemType.innerHTML = `(Recipe Device: `;
    craftingNumberValue.innerHTML = `5`;
  } else if (blueprint == "Platform Bot") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `A floating robot with 3 HP.  At the start of your turn, Platform Bot may deal 1 target 3 energy damage. Reduce damage dealt to Platform Bot by 1.`;
    usesWords.innerHTML = `Health: `;
    numberOfUses.innerHTML = `3`;
    itemUsesTime.innerHTML = `HP (Destroyed when HP is reduced to 0)`;
    tag1.innerHTML = `[ Golem, Combat,`;
    tag3.innerHTML = `Start,`;
    tag4.innerHTML = `Energy`;
    tag5.innerHTML = ``;
    cardFooterItemType.innerHTML = `(Recipe Device: `;
    craftingNumberValue.innerHTML = `11`;
  } else if (blueprint == "Raptor Bot") {
    itemName.innerHTML = blueprint + ` / Mr. Chomps`;
    itemDescription.innerHTML = `A dinosaur robot with 2 HP.  At the end of your turn Raptor Bot may deal 1 target 5 melee damage.`;
    usesWords.innerHTML = `Health: `;
    numberOfUses.innerHTML = `2`;
    itemUsesTime.innerHTML = `HP (Destroyed when HP is reduced to 0)`;
    tag1.innerHTML = `[ Golem, Combat,`;
    tag3.innerHTML = `End,`;
    tag4.innerHTML = `Melee`;
    tag5.innerHTML = ``;
    cardFooterItemType.innerHTML = `(Recipe Device: `;
    craftingNumberValue.innerHTML = `11`;
  } else if (blueprint == "Focused Plasma Cannon") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `At the start of your turn deal 1 target 2 irreducible fire damage.`;
    usesWords.innerHTML = ``;
    numberOfUses.innerHTML = ``;
    itemUsesTime.innerHTML = ``;
    tag1.innerHTML = `[ Module, Combat,`;
    tag3.innerHTML = `Start,`;
    tag4.innerHTML = `Fire`;
    tag5.innerHTML = ``;
    cardFooterItemType.innerHTML = `(Recipe Device: `;
    craftingNumberValue.innerHTML = `13`;
  } else if (blueprint == "Temporal Shielding Plating") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `Reduce [Psychic], [Infernal], [Radiant], and [Sonic] damage dealt to you by 2.  Prevents a singularity when 2 version of the same individual come into contact.`;
    usesWords.innerHTML = ``;
    numberOfUses.innerHTML = ``;
    itemUsesTime.innerHTML = ``;
    tag1.innerHTML = `[ Module, Combat,`;
    tag3.innerHTML = `Ongoing,`;
    tag4.innerHTML = ``;
    tag5.innerHTML = `Heavy / Plating`;
    cardFooterItemType.innerHTML = `(Recipe Device: `;
    craftingNumberValue.innerHTML = `17`;
  } else if (blueprint == "Death Ray") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `Deal 1 target 5 irreducible energy damage.`;
    usesWords.innerHTML = `Uses: `;
    numberOfUses.innerHTML = ``;
    itemUsesTime.innerHTML = `3 per combat`;
    tag1.innerHTML = `[ Baron Blade, Combat,`;
    tag3.innerHTML = `Power,`;
    tag4.innerHTML = `Energy`;
    tag5.innerHTML = ``;
    cardFooterItemType.innerHTML = `(Recipe Device: `;
    craftingNumberValue.innerHTML = `20`;
  } else if (blueprint == "Regression Serum") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `When used, it denies the Legacy-line the use of their abilities for 5 minutes. (This mixture is poured on a target)
    `;
    usesWords.innerHTML = `Uses: `;
    numberOfUses.innerHTML = `1`;
    itemUsesTime.innerHTML = ``;
    tag1.innerHTML = `[ Baron Blade, Combat,`;
    tag3.innerHTML = `Power,`;
    tag4.innerHTML = ``;
    tag5.innerHTML = `Specialty`;
    cardFooterItemType.innerHTML = `(Recipe Mixture: `;
    craftingNumberValue.innerHTML = `22`;
  } else if (blueprint == "Thermo-Pulse Explosive") {
    itemName.innerHTML = blueprint;
    itemDescription.innerHTML = `Deal 2 fire damage to all targets and 20 collateral damage to the room.`;
    usesWords.innerHTML = `Uses: `;
    numberOfUses.innerHTML = `1`;
    itemUsesTime.innerHTML = ``;
    tag1.innerHTML = `[ Baron Blade, Combat,`;
    tag3.innerHTML = `Power,`;
    tag4.innerHTML = `Fire,`;
    tag5.innerHTML = `Heavy`;
    cardFooterItemType.innerHTML = `(Recipe Device/Mixture: `;
    craftingNumberValue.innerHTML = `15`;
  } else {
    indexCard.style.display = "none"; //This makes the Index Card disappear
    console.log("There is no Recipe Present, something went wrong...");
  }
}

//This function checks if Supersaturated or Rube-Goldberg are used
//TODO buttons needed to trigger the change in the for Special Word
function specialCraftingWords() {
  console.log("Checking Special Words");
  if (craftIngredients.includes(`Supersaturated`)) {
    console.log(
      `Supersaturated is a Special Word.  Player can replace it with any Chemical Crafting Word they know.`
    );
    alert(
      `Supersaturated is a Special Word.  Player can replace it with any Chemical Crafting Word they know.`
    );
    modalTitle.innerHTML = `Supersaturated`;
    modal.style.display = "block";
    let searchChemicalWords = Object.entries(craftingWordList).map(
      (craftWords) => craftWords[1].craftingWord
    );
    searchChemicalWords = searchChemicalWords.sort();
    let supersaturatedOptions = [];
    for (let i = 0; i < searchChemicalWords.length; i++) {
      if (
        craftIngredients.includes(
          craftingWordList[searchChemicalWords[i]].craftingWord
        )
      ) {
        console.log(
          `Skipping ${craftingWordList[searchChemicalWords[i]].craftingWord}`
        );
      } else if (
        craftingWordList[searchChemicalWords[i]].craftingType == "Chemical"
      ) {
        console.log(
          `Adding ${
            craftingWordList[searchChemicalWords[i]].craftingWord
          } to search list`
        );
        supersaturatedOptions.push(
          craftingWordList[searchChemicalWords[i]].craftingWord
        );
      }
    }
    supersaturatedOptions.sort();
    console.log(
      "supersaturatedOptions",
      supersaturatedOptions.length,
      supersaturatedOptions
    ); //! TEST
    dropdownMenu(supersaturatedOptions);
  } else if (craftIngredients.includes(`Rube-Goldberg`)) {
    console.log(
      `Rube-Goldberg is a Special Word.  Player can replace it with any Mechanical Crafting Word they know.`
    );
    alert(
      `Rube-Goldberg is a Special Word.  Player can replace it with any Mechanical Crafting Word they know.`
    );
    modalTitle.innerHTML = `Rube-Goldberg`;
    modal.style.display = "block";
    let searchMechanicalWords = Object.entries(craftingWordList).map(
      (craftWords) => craftWords[1].craftingWord
    );
    searchMechanicalWords = searchMechanicalWords.sort();
    let rubeGoldbergOptions = [];
    for (let i = 0; i < searchMechanicalWords.length; i++) {
      if (
        craftIngredients.includes(
          craftingWordList[searchMechanicalWords[i]].craftingWord
        )
      ) {
        console.log(
          `Skipping ${craftingWordList[searchMechanicalWords[i]].craftingWord}`
        );
      } else if (
        craftingWordList[searchMechanicalWords[i]].craftingType == "Mechanical"
      ) {
        console.log(
          `Adding ${
            craftingWordList[searchMechanicalWords[i]].craftingWord
          } to search list`
        );
        rubeGoldbergOptions.push(
          craftingWordList[searchMechanicalWords[i]].craftingWord
        );
      }
    }
    rubeGoldbergOptions.sort();
    console.log(
      "rubeGoldbergOptions",
      rubeGoldbergOptions.length,
      rubeGoldbergOptions
    ); //! TEST
    dropdownMenu(rubeGoldbergOptions);
  }
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
