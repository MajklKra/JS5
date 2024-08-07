const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(arr);
console.log(a, b, c);

let [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: { open: 12, close: 22 },

    fri: { open: 12, close: 22 },

    sat: { open: 0, close: 24 },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address, phone }) {
    console.log(`Order accepted ! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at
    ${time} tp ${address}. Contact phone: ${phone}`);
  },
};

let [prvni, , , ctvrta] = restaurant.categories;
console.log(prvni, ctvrta);

[prvni, ctvrta] = [ctvrta, prvni];
console.log(prvni, ctvrta);

const [starterOrder, mainOrder] = restaurant.order(2, 2);
console.log(starterOrder, mainOrder);

const nested = [2, 4, [7, 9]];
const [i, , [j, k]] = nested;

console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

const { name: restName, openingHours: hours, categories: tags } = restaurant;
console.log(restName, hours, tags);

let aa = 10;
let bb = 20;
const cisla = { aa: 100, bb: 200, cc: 300 };

console.log(aa, bb);
({ aa, bb } = cisla);
console.log(aa, bb);

const {
  fri: { open: Od, close: Do },
} = hours;
console.log(Od, Do);

restaurant.orderDelivery({
  time: "15:30",
  address: "17.listopadu 15",
  phone: "772 123 456",
  starterIndex: 1,
  mainIndex: 0,
});
