// ====================================
// JS to React - 30 Days
// Day 05 - Exercise: Spread, Rest & Default Values
// ====================================
// Solve karo, phir concept.js se compare karo


// ====================================
// SECTION 1 - SPREAD IN ARRAYS
// ====================================

// Q1.
// Spread use karke do arrays combine karo

const fruits = ["apple", "banana", "mango"];
const veggies = ["carrot", "spinach", "tomato"];

// your code here


// Q2.
// Original array mutate kiye bina "TypeScript" add karo

const skills = ["HTML", "CSS", "JavaScript", "React"];

// your code here


// Q3.
// Spread use karke array copy karo
// Copy mein change karo — original unchanged rehna chahiye

const original = [1, 2, 3, 4, 5];

// your code here


// Q4.
// Math.max use karke array ka maximum value nikalo
// Spread use karo

const numbers = [12, 45, 7, 89, 23, 56];

// your code here


// Q5.
// Ye code kya output dega?

const a = [1, 2, 3];
const b = [...a];
b.push(4);

console.log(a);
console.log(b);

// your answer (comment mein):


// ====================================
// SECTION 2 - SPREAD IN OBJECTS
// ====================================

// Q6.
// Spread use karke object copy karo
// Copy mein role update karo — original unchanged

const user = { name: "Shivesh", role: "Junior Dev", age: 23 };

// your code here


// Q7.
// Do objects merge karo — userPrefs defaults ko override kare

const defaults = { theme: "light", fontSize: 16, language: "en", notifications: true };
const userPrefs = { theme: "dark", language: "hi" };

// your code here
// Expected: { theme: "dark", fontSize: 16, language: "hi", notifications: true }


// Q8.
// React state update pattern — spread use karke
// sirf active field ko false karo

const currentState = {
  name: "Shivesh",
  role: "Frontend Dev",
  active: true,
  followers: 1000
};

// your code here


// Q9.
// Ye code kya output dega? Kyun?

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

// your answer (comment mein):


// ====================================
// SECTION 3 - REST IN FUNCTIONS
// ====================================

// Q10.
// Rest use karke function banao jo saare numbers ka sum return kare

// your code here
// sum(1, 2, 3)       → 6
// sum(1, 2, 3, 4, 5) → 15


// Q11.
// Rest use karke — pehla argument alag lo, baaki collect karo

function firstAndRest(first, ...rest) {
  // print first
  // print rest array
}

firstAndRest("Shivesh", "JS", "React", "TypeScript");

// your code here


// Q12.
// Ye code error dega ya nahi? Kyun?

function wrong(a, ...rest, b) {
  return rest;
}

// your answer (comment mein):


// Q13.
// Rest use karke flexible logger function banao
// logger("INFO", "Server started", "Port 3000")
// Output: [INFO] Server started Port 3000

// your code here


// ====================================
// SECTION 4 - DEFAULT VALUES
// ====================================

// Q14.
// Default values ke saath function banao
// name default "Guest", role default "User"

// your code here


// Q15.
// Ye code kya output dega?

function test(value = "default") {
  console.log(value);
}

test(undefined);
test(null);
test(0);
test("");
test("hello");

// your answer (comment mein):


// Q16.
// Destructuring with defaults
// age aur city exist nahi karte — default rakho

const profile = { name: "Shivesh", role: "Frontend Dev" };

// your code here
// age default: 0
// city default: "Unknown"


// Q17.
// Function parameter mein destructuring + defaults
// Agar object pass nahi kiya toh bhi error na aaye

function createProfile({ name, role = "Developer", active = true } = {}) {
  return { name, role, active };
}

console.log(createProfile({ name: "Shivesh", role: "Frontend Dev" }));
console.log(createProfile({ name: "Rahul" }));
console.log(createProfile());

// your answer — kya output aayega (comment mein):


// ====================================
// SECTION 5 - SPREAD vs REST
// ====================================

// Q18.
// Ye dono mein spread hai ya rest? Kyun?

const arr = [1, 2, 3];
const newArr = [...arr, 4]; // spread ya rest?

function collect(...args) { // spread ya rest?
  return args;
}

// your answer (comment mein):


// Q19.
// Simple rule likhlo —
// Kab spread, kab rest?

// your answer (comment mein):


// ====================================
// BONUS — REACT PATTERNS
// ====================================

// Q20.
// Ye React state update pattern hai
// Kya ho raha hai exactly — explain karo

const state = { name: "Shivesh", role: "Dev", active: true };
const newState = { ...state, role: "Senior Dev" };

// your answer (comment mein):


// Q21.
// Array state mein naya item add karo — React pattern
// setItems use karna hai — spread se

const items = ["item1", "item2", "item3"];
const newItem = "item4";

// your code here — React jaisa pattern


// Q22.
// Props spread pattern — kya ho raha hai?

// function Button({ onClick, children, ...rest }) {
//   return <button onClick={onClick} {...rest}>{children}</button>
// }

// your answer — ...rest kya collect kar raha hai? (comment mein):