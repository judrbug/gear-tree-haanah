export enum Category {
  Sleeping = "Sleeping",
  Shelter = "Shelter",
  Bags = "Bags",
  Water = "Water",
  Electronics = "Electronics",
  Comfort = "Comfort",
  Tools = "Tools",
  Safety = "Safety",
  Photography = "Photography",
  Clothing = "Clothing",
  Cooking = "Cooking",
}

export enum ItemType {
  SleepingBag = "Sleeping Bag",
  UnderQuilt = "Underquilt",
  Blanket = "Blanket",
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
  Camera = "Camera",
  Lens = "Lens",
  Drone = "Drone",
  Jacket = "Jacket",
}

export interface GearItem {
  id: number;
  name: string;
  category: Category;
  type: ItemType;
  link: string;
  price: number;
  weightOz: number;
  volumeL: number;
}
