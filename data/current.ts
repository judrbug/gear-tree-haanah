import { GearItem, Category, ItemType } from "./types";

const volumeFromDimensions = (circumferenceInch: number, heightInch: number): number => {
  const radius = 0.0254 * circumferenceInch / (2 * Math.PI);
  const height = 0.0254 * heightInch;

  return 1000 * height *  Math.PI * radius**2;
}

const current: Omit<GearItem, "id">[] = [
  {
    name: "Nemo Forte 20 Sleeping Bag",
    link: "https://www.rei.com/product/163034/nemo-forte-20-sleeping-bag-womens",
    category: Category.Sleeping,
    type: ItemType.SleepingBag,
    price: 219.95,
    weightOz: 56,
    volumeL: volumeFromDimensions(30.5, 14), 
  },
  {
    name: "Outdoor Vitals Aerie 20F",
    link: "https://outdoorvitals.com/products/aerie-20-30-f-down-underquilt-sleeping-bag?variant=31316067647549",
    category: Category.Sleeping,
    type: ItemType.UnderQuilt,
    price: 239.97,
    weightOz: 40,
    volumeL: 10.07,
  },
  {
    name: "REI 15L",
    link: "https://www.rei.com/product/175327/rei-co-op-lightweight-compression-stuff-sack",
    category: Category.Bags,
    type: ItemType.StuffSack,
    price: 23.95,
    weightOz: 3.5,
    volumeL: 0,
  },
  {
    name: "Outdoor Vitals Aerie",
    link: "https://outdoorvitals.com/products/aerie-20-30-f-down-underquilt-sleeping-bag?variant=31316067647549",
    category: Category.Bags,
    type: ItemType.StuffSack,
    price: 0,
    weightOz: 1,
    volumeL: 0,
  },
  {
    name: "REI Stratus",
    link: "https://www.rei.com/product/895084/rei-co-op-stratus-insulated-air-sleeping-pad",
    category: Category.Sleeping,
    type: ItemType.SleepingPad,
    price: 90,
    weightOz: 20,
    volumeL: volumeFromDimensions(16, 9.5),
  },
  {
    name: "MSR Pocket Rocket 2 Mini & Pot",
    link: "https://www.rei.com/product/128867/msr-pocketrocket-2-mini-stove-kit",
    category: Category.Cooking,
    type: ItemType.Stove,
    price: 89.95,
    weightOz: 7.9,
    volumeL: 1,
  },
  {
    name: "MSR Hyperflow",
    link: "https://www.msrgear.com/water-treatment/filters-and-purifiers/hyperflow-microfilter/56500.html",
    category: Category.Cooking,
    type: ItemType.Filter,
    price: 134.95,
    weightOz: 10.6,
    volumeL: 1.8,
  },
  {
    name: "MSR MiniWorks EX",
    link: "https://www.rei.com/product/695265/msr-miniworks-ex-water-filter",
    category: Category.Cooking,
    type: ItemType.Filter,
    price: 109.95,
    weightOz: 18.5,
    volumeL: 2.4,
  },
  {
    name: "Alite Mayfly Chair",
    link: "https://www.rei.com/product/869659/alite-mayfly-chair",
    category: Category.Shelter,
    type: ItemType.Chair,
    price: 90,
    weightOz: 25,
    volumeL: volumeFromDimensions(4.3, 11.5),
  },
  {
    name: "ENO DoubleNest",
    link: "https://www.rei.com/product/202538/eno-doublenest-hammock",
    category: Category.Sleeping,
    type: ItemType.Hammock,
    price: 75,
    weightOz: 20,
    volumeL: volumeFromDimensions(16, 6),
  },
  {
    name: "ENO Helios Hammock Straps",
    link: "https://www.rei.com/product/159044/eno-helios-ultralight-hammock-suspension-system",
    category: Category.Sleeping,
    type: ItemType.Cord,
    price: 34.95,
    weightOz: 4.2,
    volumeL: volumeFromDimensions(7.5, 5),
  },
  {
    name: "Anker PowerCore 10000 PD Redux & Cables",
    link: "https://www.anker.com/products/a1239?variant=37438233116822",
    category: Category.Electronics,
    type: ItemType.BatteryBank,
    price: 50.0,
    weightOz: 10.3,
    volumeL: 0.4,
  },
  {
    name: "Steripen",
    link: "https://www.rei.com/product/847549/katadyn-steripen-ultra-uv-water-purifier",
    category: Category.Cooking,
    type: ItemType.Filter,
    price: 129.95,
    weightOz: 5.7,
    volumeL: 0.4,
  },
  {
    name: "Ultra-Sil PackCover Medium",
    link: "https://seatosummit.com/products/ultra-sil-pack-cover",
    category: Category.Shelter,
    type: ItemType.PackCover,
    price: 44.95,
    weightOz: 3.5,
    volumeL: 0.7,
  },
  {
    name: "Baofeng UV-5R",
    link: "https://www.amazon.com/Baofeng-UV-5R-136-174-400-480Mhz-1800mAh/dp/B074XPB313?th=1",
    category: Category.Electronics,
    type: ItemType.Radio,
    price: 27.99,
    weightOz: 7.1,
    volumeL: 0.3,
  },
  {
    name: "Silky Pocket Boy - No Case",
    link: "https://silkysaws.com/silky-pocketboy-170mm-folding-saw/",
    category: Category.Shelter,
    type: ItemType.Saw,
    price: 42.99,
    weightOz: 7.8,
    volumeL: 0.3,
  },
  {
    name: "Benchmade Griptillian",
    link: "https://www.knifecenter.com/item/BM551S30V/benchmade-griptilian-axis-lock-folding-knife-s30v-satin-drop-point-plain-blade-black-noryl-gtx-handles",
    category: Category.Tools,
    type: ItemType.Knife,
    price: 144,
    weightOz: 3.8,
    volumeL: 0,
  },
  {
    name: "Silky Pocket Boy Case",
    link: "https://silkysaws.com/silky-pocketboy-170mm-folding-saw/",
    category: Category.Bags,
    type: ItemType.Container,
    price: 0,
    weightOz: 2.2,
    volumeL: 0.4,
  },
  {
    name: "Fairy Lights",
    link: "https://www.amazon.com/Bedroom-Firefly-Powered-Lighting-Christmas/dp/B09GK6HP66",
    category: Category.Electronics,
    type: ItemType.Light,
    price: 5,
    weightOz: 1.6,
    volumeL: 0.2,
  },
  {
    name: "NEMO Fillo Pillow",
    link: "https://www.rei.com/product/170456/nemo-fillo-pillow",
    category: Category.Sleeping,
    type: ItemType.Pillow,
    price: 39.95,
    weightOz: 9.8,
    volumeL: volumeFromDimensions(15.5, 5.5),
  },
  {
    name: "Deuter ACT Lite",
    link: "https://www.rei.com/product/876658/deuter-act-lite-60-10-sl-pack-womens",
    category: Category.Bags,
    type: ItemType.Backpack,
    price: 190,
    weightOz: 68,
    volumeL: -70,
  },
  {
    name: "REI Trail 25",
    link: "https://www.rei.com/product/168484/rei-co-op-trail-25-pack-mens",
    category: Category.Bags,
    type: ItemType.Backpack,
    price: 79.95,
    weightOz: 28.8,
    volumeL: -25,
  },
  {
    name: "Petzl Reactik",
    link: "https://www.amazon.com/gp/product/B01FIDIALO/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    category: Category.Electronics,
    type: ItemType.Light,
    price: 20,
    weightOz: 4.0,
    volumeL: 0.3,
  },
  {
    name: "Adventure Medical Kit .5",
    link: "https://www.adventuremedicalkits.com/ultralight-watertight-5.html",
    category: Category.Safety,
    type: ItemType.FirstAid,
    price: 22.49,
    weightOz: 3.1,
    volumeL: 1.2,
  },
  {
    name: "Bic Lighter",
    link: "https://us.bic.com/en_us/bic-lighters.html",
    category: Category.Cooking,
    type: ItemType.Lighter,
    price: 2,
    weightOz: 0.7,
    volumeL: 0.1,
  },
  {
    name: "REI Quarter Dome SL 2 With Fly/FP",
    link: "https://www.rei.com/product/147863/rei-co-op-quarter-dome-sl-2-tent",
    category: Category.Shelter,
    type: ItemType.Tent,
    price: 229.93,
    weightOz: 53.5,
    volumeL: 10.4,
  },
  {
    name: "UST Tube Tarp",
    link: "https://www.rei.com/rei-garage/product/182803/ust-tube-tarp-10",
    category: Category.Shelter,
    type: ItemType.Tarp,
    price: 30,
    weightOz: 18.3,
    volumeL: 2.6,
  },
  {
    name: "UST Tube Tarp Cord",
    link: "https://www.rei.com/rei-garage/product/182803/ust-tube-tarp-10",
    category: Category.Shelter,
    type: ItemType.Cord,
    price: 0,
    weightOz: 1.8,
    volumeL: 0.2,
  },
  {
    name: "Canister",
    link: "https://www.rei.com/product/643061/snow-peak-gigapower-110-gold-fuel-canister-110g",
    category: Category.Cooking,
    type: ItemType.Fuel,
    price: 5.95,
    weightOz: 7.4,
    volumeL: 0.5,
  },
  {
    name: "Ursack",
    link: "https://www.rei.com/product/895691/ursack-major-bear-sack-10-liters",
    category: Category.Bags,
    type: ItemType.StuffSack,
    price: 99.95,
    weightOz: 7.6,
    volumeL: 1.0,
  },

  {
    name: "Arc'teryx Women's Atom LT Hoody",
    link: "https://www.rei.com/product/174719/arcteryx-atom-lt-insulated-hoodie-womens",
    category: Category.Clothing,
    type: ItemType.Jacket,
    price: 174,
    weightOz: 11.3,
    volumeL: volumeFromDimensions(17.5, 7),
  },
  {
    name: "Patagonia Nano Puff",
    link: "https://www.patagonia.com/product/womens-nano-puff-jacket/84217.html",
    category: Category.Clothing,
    type: ItemType.Jacket,
    price: 229.0,
    weightOz: 10.0,
    volumeL: 3,
  },
  {
    name: "Patagonia Air Zip",
    link: "https://www.patagonia.com/product/womens-r1-air-zip-neck-fleece/40250-SMDB.html?dwvar_40250-SMDB_color=SMDB&cgid=womens-fleece",
    category: Category.Clothing,
    type: ItemType.Jacket,
    price: 129.0,
    weightOz: 8.9,
    volumeL: 2,
  },
  {
    name: "Columbia Evapouration Shell",
    link: "https://www.amazon.com/gp/product/B00DIJW7QA/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1",
    category: Category.Clothing,
    type: ItemType.Jacket,
    price: 99,
    weightOz: 20.8,
    volumeL: volumeFromDimensions(15, 7),
  },
  {
    name: "Double Black Diamond",
    link: "https://costco97.com/double-black-diamond-packable-throw/",
    category: Category.Sleeping,
    type: ItemType.Blanket,
    price: 15.0,
    weightOz: 16.4,
    volumeL: 5.2,
  },
  {
    name: "Nalgene 30mL",
    link: "https://www.containerstore.com/s/travel/bottles-medication/nalgene-wide-mouth-leakproof-travel-bottles/12d?productId=10000247",
    category: Category.Bags,
    type: ItemType.Container,
    price: 1.79,
    weightOz: 0.4,
    volumeL: 0.1,
  },
  {
    name: "Pill Container",
    link: "#",
    category: Category.Safety,
    type: ItemType.FirstAid,
    price: 0,
    weightOz: 1.0,
    volumeL: 0.1,
  },
  {
    name: "SunBum SPF 30 Lip Balm",
    link: "https://www.sunbum.com/products/spf-30-sunscreen-lip-balm-coconut",
    category: Category.Safety,
    type: ItemType.FirstAid,
    price: 3.99,
    weightOz: 0.3,
    volumeL: 0,
  },
  {
    name: "Earplugs",
    link: "https://us.loopearplugs.com/products/experience-pro",
    category: Category.Sleeping,
    type: ItemType.Earplugs,
    price: 439,
    weightOz: 0.5,
    volumeL: 0.0,
  },
];

export default current.map<GearItem>((item, id) => ({ ...item, id }));
