const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(arr);
console.log(a, b, c);

let [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address, phone }) {
    console.log(
      `Order accepted! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at ${time} to ${address}. contact phone: ${phone}.`
    );
  },
  pizzaOrder: function (ing1, ing2, ing3) {
    console.log(`You ordered pizza made of: ${ing1}, ${ing2} and ${ing3}.`);
  },
};

let [prvni, , , ctvrta] = restaurant.categories;
console.log(prvni, ctvrta);

[prvni, ctvrta] = [ctvrta, prvni];
console.log(prvni, ctvrta);

const [starterOrder, mainOrder] = restaurant.order(0, 0);
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
  time: '15:30',
  address: '17.listopadu 15',
  phone: '772 123 456',
  starterIndex: 1,
  mainIndex: 0,
});

const pole1 = [7, 9, 11];
const oldschool = [1, 3, 5, pole1[0], pole1[1], pole1[2]];
console.log(oldschool);

const spravne = [1, 3, 5, ...pole1];
console.log(spravne);
console.log(...spravne);

const starterMenuCopy = [...restaurant.starterMenu];
console.log(starterMenuCopy, restaurant.starterMenu);

const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(completeMenu);

const celeJmeno = 'Jan Kopecny';
const jmenoArray = [...celeJmeno];
console.log(jmenoArray);

// const ingredients = [
//   prompt('Vyber prvni ingredienci: '),
//   prompt('Vyber druhou ingredienci: '),
//   prompt('Vyber treti ingredienci: '),
// ];

// restaurant.pizzaOrder(...ingredients);

const restaurant1 = {
  ...restaurant,
  owner: 'Zdenda Pohlreich',
  chef: 'P48',
  founded: 2019,
};

console.log(restaurant1);

const arr1 = [1, 2, ...[3, 4, 5]]; // jako spread protoze jsou vpravo od =
console.log(arr1);

const [a1, b1, ...others] = arr1; // jako rest protoze nalevo od =
console.log(a1, b1, others);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

const add = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

console.log(add(1, 2));
console.log(add(1, 5, 9, 78, 156, 10000));
console.log(add(1, 8, 79, 65, 44, 222, 89, 76, 53, 112));

// short circuiting (&& ||)

console.log(3 || 'Honza'); // 3
console.log('' || 'Honza'); // Honza
console.log(true || null); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Ahoj' || 23 || null); // Ahoj

// restaurant.guestsNum = 0;
const guests1 = restaurant.guestsNum ? restaurant.guestsNum : 10;
console.log(guests1);

const guests2 = restaurant.guestsNum || 12;
console.log(guests2);

console.log(23 && 'Honza' && true && null && 'pokus'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('ham', 'cheese');
}

restaurant.orderPizza && restaurant.orderPizza('ham', 'cheese');

// nullish coaslescing operator ?? od ES2020

// logical assignment operators od ES2021

const rest1 = {
  name: 'La Strada',
  capacity: 45,
};

const rest2 = {
  name: 'Divinis',
  owner: 'Zdenek Pohlreich',
};

// rest1.capacity = rest1.capacity || 20 // 45
// rest2.capacity = rest2.capacity || 20 // 20

rest1.capacity ||= 20;
rest2.capacity ||= 20;

rest2.owner &&= 'anonymous';

// od ES6 loop FOR-OF

console.log(completeMenu);

// for (const [i, el] of completeMenu.entries()) {
//   console.log(`${i + 1}. ${el}`);
// }

for (const item of completeMenu.entries()) {
  console.log(item);
}

const DaysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const openingHours = {
  [DaysOfWeek[3]]: {
    open: 12,
    close: 22,
  },
  [DaysOfWeek[4]]: {
    open: 11,
    close: 23,
  },
  [DaysOfWeek[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurace = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
  orderDelivery({ starterIndex, mainIndex, time, address, phone }) {
    console.log(
      `Order accepted! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at ${time} to ${address}. contact phone: ${phone}.`
    );
  },
  pizzaOrder: function (ing1, ing2, ing3) {
    console.log(`You ordered pizza made of: ${ing1}, ${ing2} and ${ing3}.`);
  },
};

// mnozina (set) a mapa (map) - v JS od ES6

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

const krJmeno = new Set('Karel');
console.log(krJmeno);

console.log(krJmeno.size);
console.log(orderSet.size);

console.log(krJmeno.has('k'));

const orderStates = [
  'CZ',
  'SK',
  'DE',
  'CZ',
  'CZ',
  'PL',
  'UA',
  'DE',
  'CZ',
  'CZ',
  'EN',
  'SK',
];

const statesUnique = new Set(orderStates);
console.log(statesUnique.size);

const statesUniqueArray = [...new Set(orderStates)];

const rest = new Map();
rest.set('name', 'La Strada');
rest.set(1, 'Ostrava');
rest.set(2, 'Praha');

console.log(rest);

rest
  .set('address', 'Gen. Sochra')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);

const currTime = 13;
console.log(
  rest.get(currTime > rest.get('open') && currTime < rest.get('close'))
);
