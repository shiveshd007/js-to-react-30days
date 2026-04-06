// ====================================
// JS to React - 30 Days
// Day 07 - DOM Manipulation & Events
// ====================================


// ====================================
// PART 1 - WHAT IS THE DOM
// ====================================

// DOM = Document Object Model
// Browser HTML ko parse karta hai
// Aur ek tree structure banata hai — DOM tree
// Har HTML element ek node hai

// HTML:
// <html>
//   <body>
//     <div id="app">
//       <h1>Hello</h1>
//       <button>Click me</button>
//     </div>
//   </body>
// </html>

// DOM tree:
// document
//   └── html
//         └── body
//               └── div#app
//                     ├── h1
//                     └── button

// JavaScript DOM ko read aur modify kar sakta hai
// Ye hi "dynamic" websites ka foundation hai


// ====================================
// PART 2 - SELECTING ELEMENTS
// ====================================

// --- querySelector --- (modern, recommended)
const btn = document.querySelector("#submit-btn");     // by id
const title = document.querySelector(".title");        // by class
const input = document.querySelector("input[type=text]"); // by attribute

// querySelectorAll — returns NodeList (multiple elements)
const allItems = document.querySelectorAll(".list-item");
allItems.forEach(item => console.log(item.textContent));

// --- getElementById --- (old but fast)
const heading = document.getElementById("main-heading");

// --- getElementsByClassName --- (returns HTMLCollection, live)
const cards = document.getElementsByClassName("card");

// querySelector vs getElementById:
// querySelector — flexible, any CSS selector, slightly slower
// getElementById — only by id, faster, more specific

// Note: querySelector returns null if not found
// getElementById returns null if not found
// Always check before using
if (btn) {
  btn.addEventListener("click", handleClick);
}


// ====================================
// PART 3 - MANIPULATING ELEMENTS
// ====================================

const heading2 = document.querySelector("h1");

// --- Read/Write content ---
console.log(heading2.textContent); // read text
heading2.textContent = "New Title"; // write text

console.log(heading2.innerHTML);   // read HTML
heading2.innerHTML = "<span>New</span> Title"; // write HTML — careful with XSS

// --- Read/Write attributes ---
const img = document.querySelector("img");
console.log(img.getAttribute("src")); // read
img.setAttribute("alt", "Profile pic"); // write
img.removeAttribute("disabled");       // remove

// Shorthand for common attributes
img.src = "new-image.jpg";
img.alt = "New alt text";

// --- Read/Write styles ---
heading2.style.color = "red";
heading2.style.fontSize = "24px";
heading2.style.display = "none"; // hide element

// --- Classes ---
heading2.classList.add("active");      // add class
heading2.classList.remove("hidden");   // remove class
heading2.classList.toggle("dark");     // toggle class
heading2.classList.contains("active"); // check class — true/false

// --- Create and append elements ---
const newItem = document.createElement("li");
newItem.textContent = "New Item";
newItem.classList.add("list-item");

const list = document.querySelector("ul");
list.appendChild(newItem);   // add at end
list.prepend(newItem);       // add at start
list.removeChild(newItem);   // remove


// ====================================
// PART 4 - EVENT LISTENERS
// ====================================

// addEventListener — attach event to element
// element.addEventListener(event, callback)

const button = document.querySelector("button");

// Basic click event
button.addEventListener("click", function(event) {
  console.log("Button clicked!");
  console.log(event.target); // element that triggered event
});

// Arrow function
button.addEventListener("click", (e) => {
  console.log("Clicked:", e.target.textContent);
});

// Common events:
// click, dblclick, mouseover, mouseout
// keydown, keyup, keypress
// submit, change, input, focus, blur
// load, resize, scroll

// Input event
const inputField = document.querySelector("input");
inputField.addEventListener("input", (e) => {
  console.log("Value:", e.target.value); // live as user types
});

// Form submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload
  console.log("Form submitted!");
});

// Remove event listener
function handleClick() {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick); // must be same function reference


// ====================================
// PART 5 - EVENT BUBBLING & CAPTURING
// ====================================

// Event Bubbling — default behavior
// Event travels UP the DOM tree after firing

// HTML:
// <div id="outer">
//   <div id="inner">
//     <button id="btn">Click</button>
//   </div>
// </div>

// Click on button — fires in this order:
// 1. button (target)
// 2. #inner (bubble up)
// 3. #outer (bubble up)
// 4. body
// 5. document

document.querySelector("#btn").addEventListener("click", () => {
  console.log("Button clicked");
});
document.querySelector("#inner").addEventListener("click", () => {
  console.log("Inner div clicked");
});
document.querySelector("#outer").addEventListener("click", () => {
  console.log("Outer div clicked");
});
// Output on button click:
// "Button clicked"
// "Inner div clicked"
// "Outer div clicked"

// --- Stop bubbling ---
document.querySelector("#btn").addEventListener("click", (e) => {
  e.stopPropagation(); // stops here — inner and outer won't fire
  console.log("Button clicked — bubble stopped");
});

// --- Event Capturing --- (opposite of bubbling)
// Event travels DOWN the DOM tree first
// Third argument: true = capturing phase
document.querySelector("#outer").addEventListener("click", () => {
  console.log("Outer — capturing");
}, true); // fires BEFORE button's handler

// Bubbling = default (false), bottom to top
// Capturing = optional (true), top to bottom


// ====================================
// PART 6 - EVENT DELEGATION
// ====================================

// Instead of adding listener to each child
// Add ONE listener to parent — let bubbling do the work

// Bad approach — listener on each item
const items = document.querySelectorAll(".list-item");
items.forEach(item => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});
// Problem: if new items are added dynamically — no listener!

// Good approach — event delegation
const list2 = document.querySelector("ul");
list2.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-item")) {
    console.log(e.target.textContent);
  }
});
// Works for existing AND future items

// e.target — element that was actually clicked
// e.currentTarget — element with the listener (ul in this case)

// Real world — dynamic todo list
const todoList = document.querySelector("#todo-list");
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove(); // delete todo item
  }
  if (e.target.classList.contains("todo-item")) {
    e.target.classList.toggle("completed"); // toggle complete
  }
});


// ====================================
// PART 7 - REACT CONNECTION
// ====================================

// React abstracts DOM manipulation completely
// You never touch the DOM directly in React

// Vanilla JS — direct DOM manipulation
// document.querySelector("h1").textContent = "New Title";

// React — update state, React updates DOM
// setTitle("New Title");

// Event handling in React — similar but different syntax
// Vanilla JS:
// btn.addEventListener("click", handleClick)

// React JSX:
// <button onClick={handleClick}>Click</button>

// Event bubbling in React:
// React uses event delegation internally
// ONE listener at the root — not on every element
// All React synthetic events bubble up to root

// stopPropagation in React
// <button onClick={(e) => { e.stopPropagation(); handleClick(); }}>

// e.preventDefault() in React — same as vanilla
// <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

// Understanding DOM events = understanding React event system
// React doesn't change HOW events work
// It just gives you a cleaner API to work with them