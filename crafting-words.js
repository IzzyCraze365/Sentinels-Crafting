// Sentinel Comics Issue #404: Lock Down
// Crafting Aid

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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "Special! Player may add any 1 Crafting Word of their choice to the Mixture",
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
    effect: "",
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
    effect: "Reaction - Redirect (Redirect the next 2+potency effect to target)",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "Special! Player may add any 1 Crafting Word of their choice to the Device",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "",
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
    effect: "Unity instead can make a Golem with Health = number of Uses that can Device can be used before it dies (does not work for healing)",
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

export default craftingItems;
