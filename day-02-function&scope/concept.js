// ====================================
// JS to React - 30 Days
// Day 02 - Functions & Scope
// ====================================


// ====================================
// PART 1 - WHAT IS A FUNCTION
// ====================================

// Function ek reusable block of code hai
// Ek kaam karo — baar baar use karo
// Jaise ek machine — input do, output lo

// Without function — repetition
console.log("Hello Shivesh");
console.log("Hello Rahul");
console.log("Hello Priya");

// With function — reusable
function greet(name) {
  console.log("Hello " + name);
}

greet("Shivesh"); // Hello Shivesh
greet("Rahul");   // Hello Rahul
greet("Priya");   // Hello Priya


// ====================================
// PART 2 - PARAMETERS VS ARGUMENTS
// ====================================

// Ye confusion sabko hoti hai pehli baar

// Parameter — function define karte waqt jo naam dete ho
// Argument  — function call karte waqt jo actual value dete ho

function add(a, b) {       // a, b are PARAMETERS
  return a + b;
}

add(5, 10);                // 5, 10 are ARGUMENTS

// Simple rule:
// Parameter = placeholder (definition mein)
// Argument  = actual value (call mein)

// Default parameters — ES6
function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser("Shivesh"); // Hello Shivesh
greetUser();          // Hello Guest — default value used


// ====================================
// PART 3 - TYPES OF FUNCTIONS
// ====================================

// --- Function Declaration ---
// Hoisted — call karo declaration se pehle bhi
sayHi(); // works! — hoisted

function sayHi() {
  console.log("Hi!");
}

// --- Function Expression ---
// Not hoisted — declare karo pehle, phir call karo
// sayBye(); // Error — not hoisted

const sayBye = function() {
  console.log("Bye!");
};

sayBye(); // works after declaration

// --- Arrow Function (ES6) ---
// Short syntax, no own 'this'
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// Single parameter — no parentheses needed
const double = n => n * 2;
console.log(double(5)); // 10

// No parameters — empty parentheses
const greetAll = () => console.log("Hello Everyone!");
greetAll();


// ====================================
// PART 4 - SCOPE
// ====================================

// Scope = where a variable is accessible

// --- Global Scope ---
const appName = "JS to React"; // accessible everywhere

function showApp() {
  console.log(appName); // accessible inside function
}
showApp();

// --- Function Scope ---
function calculate() {
  const result = 42; // only accessible inside this function
  console.log(result); // 42
}
// console.log(result); // ReferenceError

// --- Block Scope ---
if (true) {
  const message = "Inside block";
  let count = 0;
  console.log(message); // works
}
// console.log(message); // ReferenceError
// console.log(count);   // ReferenceError

// var ignores block scope — leaks out
if (true) {
  var leaked = "I escaped!";
}
console.log(leaked); // "I escaped!" — unexpected


// ====================================
// PART 5 - CLOSURES
// ====================================

// Closure = function jo apne outer scope ko yaad rakhta hai
// Even after outer function has finished executing

// Simple example
function makeCounter() {
  let count = 0; // outer variable

  return function() {
    count++;           // inner function accessing outer variable
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// makeCounter() finished — but count still lives
// because inner function holds a reference to it
// That reference = CLOSURE

// Real world example — private variables
function createWallet(initialBalance) {
  let balance = initialBalance; // private — not accessible directly

  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposited: " + amount + " | Balance: " + balance);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        return;
      }
      balance -= amount;
      console.log("Withdrawn: " + amount + " | Balance: " + balance);
    },
    getBalance() {
      return balance;
    }
  };
}

const wallet = createWallet(1000);
wallet.deposit(500);    // Deposited: 500 | Balance: 1500
wallet.withdraw(200);   // Withdrawn: 200 | Balance: 1300
console.log(wallet.getBalance()); // 1300
// console.log(wallet.balance); // undefined — private!

// Why closures matter in React:
// useState hook internally uses closures
// Event handlers in React use closures to access state
// Every time you write () => setState(value) — that's a closure