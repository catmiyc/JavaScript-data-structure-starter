'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  console.log(
    `${(type.slice(1, 2).toUpperCase() + type.slice(2)).replace(
      '_',
      ' '
    )} from ${from.slice(0, 3).toUpperCase()} to ${to
      .slice(0, 3)
      .toUpperCase()} (${time.replace(':', 'h')})`
  );
}

// Data needed for first part of the section
const restaurant = {
  restaurant_name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delived to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`you get a pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

/*
//////////////////////////////////////////////
// Working with Strings Part-3
// split
console.log('a+very+good+day'.split('+'));

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+')); //25 表示最大的长度，剩下的用 '+' 填充
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

//repeat
const message1 = 'Bad weather !!!\n';
console.log(message1.repeat(5));
*/

/*
//////////////////////////////////////////////
// Working with Strings Part-2
const airline = 'TAP Air Portugal';
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

const passenger = 'jOnAs'; // Jonas
// 全部改为小写
const passengerLower = passenger.toLowerCase();
// 把首字符大写
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '     Hello@Jonas.Io \n';
// 第二个 转换为 第一个
// 全部改为小写
const lowerEmail = loginEmail.toLowerCase();
// 取出空格
const trimedEmail = lowerEmail.trim();
console.log(trimedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceUS = '288,97$';
const priceCN = priceUS.replace('$', '￥').replace(',', '.');
console.log(priceCN);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// 替换第一个
console.log(announcement.replace('door', 'gate'));
// 替换所有
console.log(announcement.replaceAll('door', 'gate'));

// boolean
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('B32'));

if (plane.startsWith('Airbus' && plane.endsWith('neo'))) {
  console.log('Part of the NEW Airbus family!');
}
*/

/*
//////////////////////////////////////////////
// Working with Strings Part-1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.length);
console.log(airline.indexOf('r'));

//slice (start, end)
console.log(airline.slice(4));
console.log(airline.slice(4, 6));
// 第一个单词
console.log(airline.slice(0, airline.indexOf(' ')));
// 最后一个单词
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// 负数 -1 表示最后一个字符
console.log(airline.slice(-1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You are in the middle!!! :D');
  } else {
    console.log('You are in the side');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('25E');

console.log(new String('Jonas'));
*/

/*
// Map Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'fffff');
console.log(rest.set(2, 'gggggg'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :( ');

console.log(rest.get('name'));
console.log(rest.get(true));
*/

/*
// SETS
const orderSet = new Set([
  'Pista',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Risotto',
]);
console.log(orderSet);

console.log(new Set('Jonass'));

console.log(orderSet.size); //4
console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Bread')); //false
console.log(orderSet.add('Garlic Bread')); //Set(5) {'Pista', 'Pizza', 'Risotto', 'Pasta', 'Garlic Bread'}
console.log(orderSet.delete('Pizza')); //true
console.log(orderSet); //Set(4) {'Pista', 'Risotto', 'Pasta', 'Garlic Bread'}

// console.log(orderSet.clear()); //undefined

// Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); //Set(3) {'waiter', 'chef', 'manager'}
// spread operator
const staffUniqueSpread = [...new Set(staff)];
console.log(staffUniqueSpread);
*/

/*
// OBJECT KEYS VALUES ENTRIES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);
console.log(entries);
*/

/*
// 首先检查 属性 是否存在
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// WITH Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
*/

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) {
  console.log(item);
}

for (const [index, element] of menu.entries()) {
  console.log(`${index}: ${element}`);
}

console.log(menu.entries()); //Array Iterator {}
console.log([...menu.entries()]);
*/

/*
const rest1 = {
  name: 'Capi',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Mark',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);
*/

/*
// use ANY data type, return ANY data type, short-circuiting
console.log('------ OR ------');
console.log(3 || 'Jonas');
console.log('' || 'Mark');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

console.log('------ AND ------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('hello' && 'Jonas' && 'there' && null);
*/

/*
//////////////////////////
// rest pattern 
// spread, because on the Right
const arr = [1, 2, ...[3, 4]];

// rest, because on the left
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

/// functions
console.log('------ add function ------');
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(1, 2, 3, 4, 5);
const x = [2, 4, 6, 8];
add(...x);
*/

/*
//////////////////////////
// Spread Operators
// 扩展数组
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, arr];
console.log(newArr);
const newArr1 = [1, 2, ...arr];
console.log(newArr1);

// 传多个参数到函数里面
console.log(...newArr1);
console.log(1, 2, 7, 8, 9);

//扩展数组
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// 复制数组 这是浅拷贝
console.log('------ copy array ------');
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// 连接两个数组
const mainMenuJoint = [...restaurant.mainMenu, ...restaurant.mainMenu];
console.log(mainMenuJoint);
// Iterables: arrays, strings, sets, maps, NOT objects
console.log('------ Iterables ------');
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} Schmdtman`);

// 扩展操作符在函数传参时候使用
console.log('------ 扩展操作符在函数传参时候使用 ------');
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Object
const newRestaurant = { foundedIn: 1998, ...restaurant, foounder: 'Mark' };
console.log(newRestaurant);
*/

/*
/////////////////////
// Destructing Objects
// 对象作为函数参数
restaurant.orderDelivery({
  time: '22:30',
  addrss: 'NY',
  mainIndex: '2',
  starterIndex: '2',
});

// 解析对象， 不需要注意【顺序】，只要 【属性名称】 对就行
console.log('------ destructing objects ------');
const { restaurant_name, openingHours, categories } = restaurant;
console.log(restaurant_name, openingHours, categories);

//  给属性重新命名
console.log('------ rename property ------');
const {
  restaurant_name: restaurant_Name,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurant_Name, hours, tags);

// 默认值，当要读取的对象属性不存在时候，很重要
console.log('------ default value ------');
// const { menu, starterMenu: starters = [] } = restaurant; //undefined
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables 改变变量
// {} 是代码块不能直接赋值操作 要加 ()
console.log('------ mutating variables ------');
let a = 1;
let b = 1;
const obj = { a: 28, b: 39, c: 12 };
({ a, b } = obj);
console.log(a, b);

// nested objects 嵌套的对象
console.log('------ nested objects ------');
const { fri } = restaurant.openingHours;
console.log(fri);
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
*/

/*
///////////////////////////////
// Destructing Arrays
const arr = [2, 3, 4];
// 之前的检索数组的方式
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
// 解析的方式
const [x, y, z] = arr; //看起来是数组，其实是完成解析任务；所以看到 [] =  就是在解析； 不要忘记使用 const 声明变量
console.log(x, y, z);

// 按照顺序取出变量
console.log(restaurant.categories);
const [first, second] = restaurant.categories;
console.log(first, second);
// 取出第一个和第三个
const [first1, , third] = restaurant.categories;
console.log(first1, third);

//交换变量
console.log('------switching variables------');
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// 之前交换变量的方式
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// 使用 解析的方式
[main, secondary] = [secondary, main];
console.log(main, secondary);

//解析 函数返回的数组
console.log('------constructing the array from function------');
const [starter, mainM] = restaurant.order(0, 2);
console.log(starter, mainM);

// 嵌套的数组 nested array
console.log('------nested array------');
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
//在解析里面继续解析
const [o, , [p, q]] = nested;
console.log(o, p, q);

//  设置默认值
console.log('------default values------');
// const [r, s, t] = [8, 9]; //8 9 undefined
const [r = 1, s = 1, t = 1] = [8, 9];
console.log(r, s, t);
*/
