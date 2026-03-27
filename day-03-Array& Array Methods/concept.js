// ====================================
// JS to React - 30 Days
// Day 03 - Arrays & Array Methods
// ====================================


// ====================================
// PART 1 - WHAT IS AN ARRAY
// ====================================

// Array ek ordered collection hai
// Multiple values ek variable mein store karo

const skills = ["HTML", "CSS", "JavaScript", "React"];

// Access by index — starts from 0
console.log(skills[0]); // "HTML"
console.log(skills[3]); // "React"

// Length
console.log(skills.length); // 4

// Arrays can hold mixed types
const mixed = ["Shivesh", 25, true, null, { role: "Dev" }];


// ====================================
// PART 2 - map vs forEach
// ====================================

// THE most common interview question on arrays

const numbers = [1, 2, 3, 4, 5];

// forEach — just iterates, returns nothing
numbers.forEach(n => {
  console.log(n * 2); // 2, 4, 6, 8, 10
});

const result = numbers.forEach(n => n * 2);
console.log(result); // undefined — returns nothing

// map — iterates AND returns a new array
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] — original unchanged

// When to use which:
// forEach — when you just want to DO something (log, update DOM)
// map     — when you want a TRANSFORMED array back

// React uses map to render lists
// return skills.map(skill => <li>{skill}</li>)
// forEach cannot do this — it returns undefined


// ====================================
// PART 3 - filter vs find
// ====================================

const users = [
  { id: 1, name: "Shivesh", active: true },
  { id: 2, name: "Rahul", active: false },
  { id: 3, name: "Priya", active: true },
  { id: 4, name: "Dev", active: true },
];

// filter — returns ALL matches as array
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// [{ id:1, name:"Shivesh" }, { id:3, name:"Priya" }, { id:4, name:"Dev" }]

// find — returns FIRST match only
const firstActive = users.find(user => user.active);
console.log(firstActive);
// { id: 1, name: "Shivesh", active: true }

// No match?
const notFound = users.find(user => user.id === 99);
console.log(notFound); // undefined

const emptyFilter = users.filter(user => user.id === 99);
console.log(emptyFilter); // [] — empty array, not undefined

// When to use which:
// filter — when you want ALL items matching a condition
// find   — when you want ONE specific item (by id, name etc)


// ====================================
// PART 4 - reduce
// ====================================

// Most powerful — most avoided
// Reduces array to a single value

const prices = [100, 200, 350, 50, 300];

// Sum of all prices
const total = prices.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // 0 is the initial value

console.log(total); // 1000

// accumulator = running total
// current     = current item
// 0           = starting value

// Real world — cart total
const cart = [
  { item: "Keyboard", price: 1500 },
  { item: "Mouse", price: 800 },
  { item: "Monitor", price: 8000 },
];

const cartTotal = cart.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(cartTotal); // 10300


// ====================================
// PART 5 - some, every, includes
// ====================================

// The ones nobody teaches — but interviews love

const scores = [45, 72, 38, 91, 60];

// some — at least ONE matches condition?
const hasHighScore = scores.some(score => score > 90);
console.log(hasHighScore); // true — 91 exists

// every — ALL match condition?
const allPassing = scores.every(score => score > 35);
console.log(allPassing); // true — all above 35

const allHigh = scores.every(score => score > 70);
console.log(allHigh); // false — not all above 70

// includes — does value exist in array?
const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grapes")); // false

// When to use:
// some     — "is at least one item valid?"
// every    — "are all items valid?"
// includes — "does this specific value exist?"


// ====================================
// PART 6 - MUTATING vs NON-MUTATING
// ====================================

// This matters a LOT in React
// React needs new reference to detect changes

const original = [1, 2, 3];

// Mutating methods — change original array
original.push(4);    // [1, 2, 3, 4] — original changed
original.pop();      // [1, 2, 3] — original changed
original.splice(1, 1); // [1, 3] — original changed

// Non-mutating — return new array, original safe
const arr = [1, 2, 3];
const newArr = [...arr, 4];        // [1, 2, 3, 4] — spread
const filtered = arr.filter(n => n !== 2); // [1, 3]
const mapped = arr.map(n => n * 2);        // [2, 4, 6]

console.log(arr); // [1, 2, 3] — original unchanged

// In React — always use non-mutating methods for state
// setState([...items, newItem])  — correct
// items.push(newItem)            — wrong, React won't re-render