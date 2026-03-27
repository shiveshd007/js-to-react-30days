# Day 02 — Interview Questions
## Functions & Scope

These are real interview questions based on Day 02 concepts.
Try answering before reading the answer.

---

## Functions

### Q1. What is the difference between function declaration and function expression?

**Answer:**

```js
// Function Declaration — hoisted
sayHi(); // works before definition
function sayHi() {
  console.log("Hi!");
}

// Function Expression — not hoisted
// sayBye(); // ReferenceError
const sayBye = function() {
  console.log("Bye!");
};
```

| | Declaration | Expression |
|---|---|---|
| Hoisted | Yes | No |
| Named | Always | Optional |
| Use before define | Yes | No |

---

### Q2. What is an arrow function? How is it different from a regular function?

**Answer:**

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Single param — no parentheses
const double = n => n * 2;

// No params — empty parentheses
const greet = () => console.log("Hello!");
```

**Key differences:**
- Arrow functions have no own `this` — they inherit from parent scope
- Arrow functions cannot be used as constructors
- No `arguments` object in arrow functions
- Shorter syntax

---

### Q3. What is the difference between parameters and arguments?

**Answer:**

```js
function multiply(x, y) { // x, y = PARAMETERS
  return x * y;
}

multiply(4, 5); // 4, 5 = ARGUMENTS
```

**Parameter** = placeholder variable in function definition.
**Argument** = actual value passed when calling the function.

---

### Q4. What are default parameters in JavaScript?

**Answer:**

Default parameters allow you to set a fallback value if no argument is passed.

```js
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Shivesh"); // Hello Shivesh
greet();          // Hello Guest — default used
```

Before ES6 — developers used `||` operator:
```js
function greet(name) {
  name = name || "Guest"; // old way
  console.log("Hello " + name);
}
```

---

### Q5. What is a pure function?

**Answer:**

A pure function:
- Always returns the same output for the same input
- Has no side effects — doesn't modify anything outside itself

```js
// Pure function
function add(a, b) {
  return a + b; // same input = same output always
}

// Impure function
let total = 0;
function addToTotal(n) {
  total += n; // modifies outside variable — side effect
  return total;
}
```

Pure functions are predictable, testable, and easier to debug.
React components are expected to behave like pure functions.

---

### Q6. What is a higher-order function?

**Answer:**

A function that takes another function as argument OR returns a function.

```js
// Takes function as argument
function applyTwice(fn, value) {
  return fn(fn(value));
}

const double = n => n * 2;
applyTwice(double, 3); // 12

// Returns a function
function multiplier(factor) {
  return n => n * factor;
}

const triple = multiplier(3);
triple(5); // 15
```

Array methods like `map`, `filter`, `reduce` are higher-order functions.

---

## Scope

### Q7. What are the different types of scope in JavaScript?

**Answer:**

```js
// Global scope
const appName = "JS to React"; // accessible everywhere

// Function scope
function calculate() {
  const result = 42; // only inside this function
}
// console.log(result); // ReferenceError

// Block scope
if (true) {
  let message = "Inside block"; // only inside {}
  const count = 0;
}
// console.log(message); // ReferenceError

// var ignores block scope
if (true) {
  var leaked = "I escaped!";
}
console.log(leaked); // "I escaped!" — unexpected
```

---

### Q8. What is the scope chain in JavaScript?

**Answer:**

When a variable is not found in the current scope, JavaScript looks up the scope chain — checking each outer scope until it finds it or reaches global scope.

```js
const name = "Global";

function outer() {
  const name = "Outer";

  function inner() {
    // name not found here — looks up scope chain
    console.log(name); // "Outer" — found in outer scope
  }

  inner();
}

outer();
```

If not found anywhere — ReferenceError.

---

### Q9. What is lexical scope?

**Answer:**

Lexical scope means a function's scope is determined by where it is **defined** — not where it is called.

```js
const name = "Global";

function outer() {
  const name = "Outer";
  inner(); // called from outer
}

function inner() {
  console.log(name); // "Global" — defined at global level
}

outer(); // "Global" — not "Outer"
```

JavaScript uses lexical scoping — closures are built on top of this.

---

## Closures

### Q10. What is a closure in JavaScript?

**Answer:**

A closure is a function that remembers variables from its outer scope — even after the outer function has finished executing.

```js
function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3
// makeCounter() is done — but count still lives in closure
```

---

### Q11. What are practical use cases of closures?

**Answer:**

**1. Private variables**
```js
function createWallet(balance) {
  let _balance = balance; // private

  return {
    deposit(amount) { _balance += amount; },
    getBalance() { return _balance; }
  };
}

const wallet = createWallet(1000);
wallet.deposit(500);
wallet.getBalance(); // 1500
// wallet._balance — undefined, can't access directly
```

**2. Function factories**
```js
function multiplier(factor) {
  return n => n * factor; // closes over factor
}

const double = multiplier(2);
const triple = multiplier(3);
double(5);  // 10
triple(5);  // 15
```

**3. React event handlers**
```js
// Every onClick handler is a closure
<button onClick={() => setCount(count + 1)}>Click</button>
// Arrow function closes over count from outer scope
```

---

### Q12. What is the classic closure bug in loops — and how do you fix it?

**Answer:**

```js
// Bug
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 — var leaked, all closures share same i

// Fix 1 — use let (creates new scope per iteration)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2

// Fix 2 — IIFE (old ES5 way)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
// Output: 0, 1, 2
```

---

### Q13. How does React use closures internally?

**Answer:**

React's `useState` hook uses closures to maintain state between renders.

```js
const [count, setCount] = useState(0);

// This is a closure
<button onClick={() => setCount(count + 1)}>Click</button>
```

The arrow function closes over `count` from the component's scope.
Every render creates a new closure with the updated state value.

**Stale closure problem in React:**
```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log(count); // stale — always shows initial value
  }, 1000);
  return () => clearInterval(timer);
}, []); // empty deps — closure captured old count
```

This is why `useEffect` dependency array exists — to refresh closures.

---

### Q14. What is the difference between closure and scope?

**Answer:**

**Scope** — defines where variables are accessible at a given time.

**Closure** — a function that retains access to its outer scope variables even after the outer function has returned.

```js
function outer() {
  let x = 10; // x is in outer's scope

  return function inner() {
    console.log(x); // inner closes over x — this is a closure
  };
}

const fn = outer(); // outer is done
fn(); // 10 — x still accessible via closure
```

Scope is a concept. Closure is a feature built on top of lexical scope.

---

### Q15. What is an IIFE and why is it used?

**Answer:**

IIFE = Immediately Invoked Function Expression.
A function that runs as soon as it is defined.

```js
(function() {
  const secret = "hidden";
  console.log("IIFE ran!");
})();

// secret not accessible outside
// console.log(secret); // ReferenceError
```

**Why use it:**
- Create private scope — variables don't leak to global
- Avoid naming conflicts
- Old ES5 way of module pattern before `let`/`const`/modules

Still seen in legacy codebases and some design patterns.

---

> Try solving these without looking at answers first.
> Full code on GitHub → [js-to-react-30days](https://github.com/shiveshd007/js-to-react-30days)