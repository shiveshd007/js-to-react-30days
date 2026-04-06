// ====================================
// JS to React - 30 Days
// Day 07 - Exercise: DOM Manipulation & Events
// ====================================
// Note: Ye exercises browser mein run honge
// VS Code mein Live Server use karo ya browser console mein try karo


// ====================================
// SECTION 1 - SELECTING ELEMENTS
// ====================================

// Q1.
// Ye HTML hai — sahi selector likho

// <div id="app">
//   <h1 class="title">Hello World</h1>
//   <button class="btn primary">Click me</button>
//   <input type="email" placeholder="Enter email">
// </div>

// h1 select karo — querySelector use karo
// your code here

// button select karo — getElementById use karo
// your code here

// input select karo — attribute selector use karo
// your code here

// saare .btn class wale elements select karo
// your code here


// Q2.
// querySelector aur getElementById mein kya difference hai?
// Kab kaunsa use karoge?

// your answer (comment mein):


// Q3.
// Ye code kya output dega agar element exist nahi karta?

const el = document.querySelector(".nonexistent");
console.log(el);
console.log(el.textContent); // kya hoga?

// your answer (comment mein):
// Fix karo — safe way se access karo


// ====================================
// SECTION 2 - MANIPULATING ELEMENTS
// ====================================

// Q4.
// Ye HTML hai:
// <h1 id="title">Old Title</h1>

// Title ko "New Title" se update karo — textContent use karo
// your code here

// Color red karo — style use karo
// your code here

// "active" class add karo
// your code here


// Q5.
// Ye HTML hai:
// <ul id="list"></ul>

// 5 list items dynamically create karo aur append karo
// Items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"]

// your code here


// Q6.
// classList methods — kya output aayega?

// <div class="card active dark"></div>
// const card = document.querySelector(".card");

// card.classList.contains("active") — ?
// card.classList.contains("hidden") — ?
// card.classList.toggle("dark") — ?
// card.classList.remove("active") — class list kya hogi?

// your answer (comment mein):


// Q7.
// textContent vs innerHTML — kya difference hai?
// Kaunsa zyada safe hai? Kyun?

// your answer (comment mein):


// ====================================
// SECTION 3 - EVENT LISTENERS
// ====================================

// Q8.
// Button pe click listener add karo
// Click hone pe "Hello World" alert karo

// <button id="btn">Click me</button>

// your code here


// Q9.
// Input field pe listener add karo
// User type kare toh live value console mein print ho

// <input type="text" id="search">

// your code here


// Q10.
// Form submit handle karo
// Page reload rokao — e.preventDefault() use karo
// Input ki value console mein print karo

// <form id="myForm">
//   <input type="text" id="name">
//   <button type="submit">Submit</button>
// </form>

// your code here


// Q11.
// Event listener remove karo — correct tarika

const button = document.querySelector("#btn");

function handleClick() {
  console.log("Clicked!");
}

button.addEventListener("click", handleClick);

// Ab remove karo
// your code here

// Ye kyu kaam nahi karega?
// button.removeEventListener("click", () => console.log("Clicked!"));
// your answer (comment mein):


// ====================================
// SECTION 4 - EVENT BUBBLING
// ====================================

// Q12.
// Ye HTML hai:
// <div id="outer">
//   <div id="inner">
//     <button id="btn">Click</button>
//   </div>
// </div>

// Teeno pe click listener add karo
// Button click karne pe kya order mein fire hoga?

// your code here + answer (comment mein):


// Q13.
// Q12 mein button ka event bubble rokao
// e.stopPropagation() use karo
// Ab kya output aayega?

// your code here + answer (comment mein):


// Q14.
// e.target vs e.currentTarget — kya difference hai?

// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>

// ul pe listener add karo
// li click karne pe e.target aur e.currentTarget print karo
// Dono mein kya difference hoga?

// your code here + answer (comment mein):


// Q15.
// Event capturing — third argument true karo
// Capturing aur bubbling mein order kya hoga?

// your code here + answer (comment mein):


// ====================================
// SECTION 5 - EVENT DELEGATION
// ====================================

// Q16.
// Ye approach wrong kyun hai?

const items = document.querySelectorAll(".todo-item");
items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("completed");
  });
});

// your answer (comment mein):


// Q17.
// Event delegation use karke same kaam karo — correct tarika

// <ul id="todo-list">
//   <li class="todo-item">Learn JS</li>
//   <li class="todo-item">Learn React</li>
// </ul>

// your code here


// Q18.
// Dynamic todo list — event delegation use karo
// New item add karne pe bhi click kaam kare

// <ul id="todo-list"></ul>
// <button id="add-btn">Add Item</button>

// your code here


// ====================================
// SECTION 6 - REACT CONNECTION
// ====================================

// Q19.
// Vanilla JS aur React mein event handling ka difference likho
// Dono mein button click handle karo

// Vanilla JS:
// your code here

// React JSX:
// your code here (comment mein likho)


// Q20.
// React internally event delegation use karta hai — explain karo
// Iska kya fayda hai?

// your answer (comment mein):


// ====================================
// BONUS
// ====================================

// Q21.
// Ek simple counter banao — pure DOM
// + button pe click karo — count badhao
// - button pe click karo — count ghatao
// Count 0 se neeche na jaaye

// <div id="counter">
//   <button id="decrement">-</button>
//   <span id="count">0</span>
//   <button id="increment">+</button>
// </div>

// your code here


// Q22.
// Event delegation use karke — dynamic delete feature
// Delete button click karne pe wo todo remove ho jaaye

// <ul id="list">
//   <li>Task 1 <button class="delete">X</button></li>
//   <li>Task 2 <button class="delete">X</button></li>
//   <li>Task 3 <button class="delete">X</button></li>
// </ul>

// your code here