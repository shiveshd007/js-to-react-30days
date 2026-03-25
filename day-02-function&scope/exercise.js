// ====================================
// JS to React - 30 Days
// Day 02 - Exercise: Functions & Scope
// ====================================
// Solve karo, phir concept.js se compare karo


// ====================================
// SECTION 1 - FUNCTIONS
// ====================================

// Q1.
// Ek function banao jo 2 numbers ka sum return kare

// your code here


// Q2.
// Ek function banao — name parameter ke saath
// Agar name nahi diya toh "Guest" print kare — default parameter use karo

// your code here


// Q3.
// Ye function declaration ko arrow function mein convert karo

function square(n) {
  return n * n;
}

// your code here


// Q4.
// Kya ye code kaam karega? Kyun?

sayHello();

function sayHello() {
  console.log("Hello!");
}

// your answer (comment mein):


// Q5.
// Kya ye code kaam karega? Kyun?

// greet();

const greet = function() {
  console.log("Hey!");
};

// your answer (comment mein):


// ====================================
// SECTION 2 - PARAMETERS VS ARGUMENTS
// ====================================

// Q6.
// Niche diye code mein — parameters kaunse hain, arguments kaunse?

function multiply(x, y) {
  return x * y;
}
multiply(4, 5);

// your answer (comment mein):


// Q7.
// Ek function banao jo array of numbers le
// Aur unka average return kare

// your code here


// ====================================
// SECTION 3 - SCOPE
// ====================================

// Q8.
// Ye code kya output dega? Kyun?

let username = "Shivesh";

function changeName() {
  let username = "Dev";
  console.log(username);
}

changeName();
console.log(username);

// your answer (comment mein):


// Q9.
// Ye code error dega ya nahi? Kyun?

function outer() {
  const secret = "hidden";
}

outer();
// console.log(secret);

// your answer (comment mein):


// Q10.
// var aur let ka scope difference dikhao
// Ek example likho jahan var unexpectedly leak kare

// your code here


// ====================================
// SECTION 4 - CLOSURES
// ====================================

// Q11.
// Ye code kya output dega?

function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const fn = makeCounter();
fn();
fn();
fn();

// your answer (comment mein):


// Q12.
// Closure use karke ek function banao
// Jo har call pe previous value yaad rakhe
// Start: 10, har baar 5 add karo

// your code here


// Q13.
// Closure use karke ek simple login checker banao
// password private rakho — directly access na ho sake
// checkPassword(input) function expose karo

// your code here


// ====================================
// BONUS
// ====================================

// Q14.
// Ye famous closure bug fix karo

for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Expected: 0, 1, 2
// Fix karo — closure ya let use karke

// your code here


// Q15.
// React mein ye pattern bahut common hai
// Kya ye ek closure hai? Kyun?

// const [count, setCount] = useState(0);
// <button onClick={() => setCount(count + 1)}>Click</button>

// your answer (comment mein):