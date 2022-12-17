export enum Category {
  Sleeping = "Sleeping",
  Shelter = "Shelter",
  Clothing = "Clothing",
  Bags = "Bags",
  Water = "Water",
  Electronics = "Electronics",
  Comfort = "Comfort",
  Tools = "Tools",
  Safety = "Safety",
}

export enum ItemType {
  SleepingBag = "Sleeping Bag",
  UnderQuilt = "Underquilt",
  Hammock = "Hammock",
  SleepingPad = "Sleeping Pad",
  Pillow = "Pillow",
  StuffSack = "Stuff Sack",
  Backpack = "Backpack",
  Container = "Container",
  Filter = "Filter",
  BatteryBank = "Battery Bank",
  Chair = "Chair",
  PackCover = "Pack Cover",
  Radio = "Radio",
  Saw = "Saw",
  Light = "Light",
  FirstAid = "FirstAid",
  Lighter = "Lighter",
  Tent = "Tent",
  Tarp = "Tarp",
  Cord = "Cord",
  Stove = "Stove",
  Fuel = "Fuel",
}

export interface GearItem {
  name: string;
  category: Category;
  type: ItemType;
  link: string;
  price: number;
  weightOz: number;
  volumeL: number;
}
