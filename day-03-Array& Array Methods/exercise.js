// ====================================
// JS to React - 30 Days
// Day 03 - Exercise: Arrays & Array Methods
// ====================================
// Solve karo, phir concept.js se compare karo


// ====================================
// SECTION 1 - ARRAYS BASICS
// ====================================

// Q1.
// Ek array banao — 5 programming languages
// First aur last element print karo

// your code here


// Q2.
// Ye code kya output dega?

const arr = ["a", "b", "c", "d"];
console.log(arr[1]);
console.log(arr[arr.length - 1]);

// your answer (comment mein):


// Q3.
// Array mein se "JavaScript" ko remove karo
// Bina original array mutate kiye — filter use karo

const languages = ["HTML", "CSS", "JavaScript", "React"];

// your code here


// ====================================
// SECTION 2 - map vs forEach
// ====================================

// Q4.
// map use karke — har number ko square karo

const numbers = [1, 2, 3, 4, 5];

// your code here


// Q5.
// Ye code kya output dega? Kyun?

const result = [1, 2, 3].forEach(n => n * 2);
console.log(result);

// your answer (comment mein):


// Q6.
// Niche diya array of objects hai
// map use karke sirf names ka array nikalo

const users = [
  { id: 1, name: "Shivesh", role: "Dev" },
  { id: 2, name: "Rahul", role: "Designer" },
  { id: 3, name: "Priya", role: "PM" },
];

// Expected output: ["Shivesh", "Rahul", "Priya"]
// your code here


// Q7.
// React mein ye pattern common hai
// map use karke har skill ke liye ek string banao
// Format: "I know: JavaScript"

const skills = ["JavaScript", "React", "TypeScript", "Node"];

// your code here


// ====================================
// SECTION 3 - filter vs find
// ====================================

// Q8.
// filter use karke sirf active users nikalo

const allUsers = [
  { id: 1, name: "Shivesh", active: true },
  { id: 2, name: "Rahul", active: false },
  { id: 3, name: "Priya", active: true },
  { id: 4, name: "Dev", active: false },
];

// your code here


// Q9.
// find use karke id: 3 wala user nikalo

// your code here


// Q10.
// Kya hoga agar find ko koi match nahi mila?
// Ek example likho

// your code here


// Q11.
// filter vs find — kab kya use karoge?
// Ye scenario dekho aur choose karo:
// a) User ki cart mein se out-of-stock items hatane hain
// b) Logged-in user ka profile dhundhna hai by email
// c) 18+ users ki list banana hai

// your answer (comment mein):


// ====================================
// SECTION 4 - reduce
// ====================================

// Q12.
// reduce use karke numbers ka sum nikalo

const prices = [100, 250, 75, 400, 125];

// your code here


// Q13.
// reduce use karke cart ka total nikalo

const cart = [
  { item: "Keyboard", price: 1500 },
  { item: "Mouse", price: 800 },
  { item: "Headphones", price: 2200 },
];

// your code here


// Q14.
// reduce use karke words ki frequency count karo

const words = ["js", "react", "js", "node", "react", "js"];

// Expected output: { js: 3, react: 2, node: 1 }
// your code here


// ====================================
// SECTION 5 - some, every, includes
// ====================================

// Q15.
// some use karke check karo — kya koi score 90 se upar hai?

const scores = [45, 72, 38, 91, 60];

// your code here


// Q16.
// every use karke check karo — kya sab users active hain?

const teamMembers = [
  { name: "Shivesh", active: true },
  { name: "Rahul", active: true },
  { name: "Priya", active: false },
];

// your code here


// Q17.
// includes use karke check karo — kya "React" skills mein hai?

const mySkills = ["HTML", "CSS", "JavaScript", "Node"];

// your code here


// ====================================
// SECTION 6 - MUTATING vs NON-MUTATING
// ====================================

// Q18.
// Ye code React mein kyu wrong hai?
// Fix karo

const items = ["item1", "item2", "item3"];
items.push("item4"); // state update karna tha

// your answer (comment mein):
// fixed code:


// Q19.
// Spread operator use karke original array mutate kiye bina
// ek naya item add karo

const todos = ["Buy groceries", "Read book", "Exercise"];

// your code here


// Q20.
// Spread operator use karke — id: 2 wala todo remove karo
// Bina original array mutate kiye

const todoList = [
  { id: 1, task: "Learn JS" },
  { id: 2, task: "Watch Netflix" },
  { id: 3, task: "Build project" },
];

// your code here


// ====================================
// BONUS
// ====================================

// Q21.
// Sirf ek line mein —
// numbers array se even numbers nikalo aur unhe square karo

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// Expected output: [4, 16, 36, 64]
// your code here


// Q22.
// map + filter chain karo
// Active users ke names uppercase mein nikalo

const data = [
  { name: "shivesh", active: true },
  { name: "rahul", active: false },
  { name: "priya", active: true },
];

// Expected output: ["SHIVESH", "PRIYA"]
// your code here