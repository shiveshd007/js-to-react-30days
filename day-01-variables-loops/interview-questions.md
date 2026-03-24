# Day 01 — Interview Questions
## Variables & Loops

These are real interview questions based on Day 01 concepts.
Try answering before reading the answer.

---

## Variables

### Q1. What is the difference between var, let, and const?

**Answer:**

| | var | let | const |
|---|---|---|---|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Re-declare | Yes | No | No |
| Reassign | Yes | Yes | No |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |

**Rule:** Use `const` by default → `let` when value needs to change → avoid `var`.

---

### Q2. What is hoisting in JavaScript?

**Answer:**

Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code executes.

```js
console.log(name); // undefined — no error
var name = "Shivesh";
```

JavaScript internally does this:
```js
var name;           // declaration hoisted
console.log(name);  // undefined
name = "Shivesh";   // assignment stays here
```

`let` and `const` are hoisted too — but they are not initialized.
Accessing them before declaration throws a **ReferenceError**.

---

### Q3. What is the Temporal Dead Zone (TDZ)?

**Answer:**

TDZ is the period between entering a block scope and the actual declaration of a `let` or `const` variable.

```js
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
```

During TDZ — the variable exists in scope but cannot be accessed.
This is why `let` and `const` are safer than `var`.

---

### Q4. What is the difference between `==` and `===` in JavaScript?

**Answer:**

`==` — Loose equality. Converts types before comparing.
`===` — Strict equality. Compares value AND type. No conversion.

```js
0 == "0"   // true  — type converted
0 === "0"  // false — different types

null == undefined  // true
null === undefined // false
```

**Always use `===` in real projects.** `==` causes unexpected bugs.

---

### Q5. What are the data types in JavaScript?

**Answer:**

**Primitive types (7):**
- `string` — "Hello"
- `number` — 42, 3.14
- `boolean` — true / false
- `undefined` — variable declared but not assigned
- `null` — intentional absence of value
- `symbol` — unique identifier (ES6)
- `bigint` — large integers (ES2020)

**Non-primitive:**
- `object` — arrays, objects, functions

```js
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" — known JS bug
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
```

---

### Q6. What is the difference between undefined and undeclared?

**Answer:**

**undefined** — variable is declared but no value assigned yet.
```js
let name;
console.log(name); // undefined
```

**undeclared** — variable was never declared at all.
```js
console.log(age); // ReferenceError: age is not defined
```

Key difference: `undefined` is a value. Undeclared throws an error.

---

### Q7. What is the difference between null and undefined?

**Answer:**

```js
let a;          // undefined — no value assigned
let b = null;   // null — value intentionally set to empty
```

| | undefined | null |
|---|---|---|
| Type | undefined | object (JS bug) |
| Set by | JavaScript automatically | Developer intentionally |
| Meaning | Variable declared, no value | Intentional absence of value |

```js
typeof undefined // "undefined"
typeof null      // "object"

undefined == null  // true
undefined === null // false
```

---

### Q8. What is dynamic typing in JavaScript?

**Answer:**

JavaScript is dynamically typed — variables don't have a fixed type.
The same variable can hold different types at different times.

```js
let value = 42;       // number
value = "Shivesh";    // now string — no error
value = true;         // now boolean — no error
```

This is why TypeScript exists — to add static typing on top of JS.

---

### Q9. How do you convert a string to a number in JavaScript?

**Answer:**

```js
// 1. Number()
Number("42")      // 42
Number("3.14")    // 3.14
Number("")        // 0
Number("abc")     // NaN

// 2. parseInt() / parseFloat()
parseInt("42px")    // 42 — ignores non-numeric characters
parseFloat("3.14")  // 3.14

// 3. Unary + operator
+"42"   // 42
+"abc"  // NaN

// 4. Multiply by 1
"42" * 1  // 42
```

**Best practice:** Use `Number()` for clean strings, `parseInt()` when string has extra characters.

---

### Q10. What is scope in JavaScript?

**Answer:**

Scope defines where a variable is accessible in your code.

**Global scope** — accessible everywhere
```js
var name = "Shivesh"; // accessible anywhere
```

**Function scope** — var is limited to the function
```js
function greet() {
  var message = "Hello";
}
console.log(message); // ReferenceError
```

**Block scope** — let/const limited to {} block
```js
if (true) {
  let age = 25;
  const city = "Bhopal";
}
console.log(age);  // ReferenceError
console.log(city); // ReferenceError
```

`var` ignores block scope — that's why it causes bugs.

---

### Q11. What is variable shadowing in JavaScript?

**Answer:**

Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope — the inner one "shadows" the outer one.

```js
let name = "Shivesh"; // outer

function greet() {
  let name = "Dev";   // inner — shadows outer
  console.log(name);  // "Dev"
}

greet();
console.log(name); // "Shivesh" — outer unchanged
```

With `var` — shadowing can cause unexpected overwrites:
```js
var name = "Shivesh";

if (true) {
  var name = "Someone"; // same variable — not a shadow, actual overwrite
}

console.log(name); // "Someone" — original value lost
```

`let` and `const` shadow safely — inner scope stays separate from outer.

---

## Loops

### Q12. What is the difference between for...of and for...in?

**Answer:**

```js
const arr = ["React", "Vue", "Angular"];

for (const item of arr) {
  console.log(item); // "React", "Vue", "Angular" — values
}

for (const item in arr) {
  console.log(item); // "0", "1", "2" — indexes
}
```

| | for...of | for...in |
|---|---|---|
| Use with | Arrays, strings, iterables | Objects |
| Returns | Values | Keys / indexes |

**Rule:** Array → `for...of` or `forEach` — Object → `for...in`

---

### Q13. What happens when you use var inside a loop with setTimeout? How do you fix it?

**Answer:**

```js
// Problem
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 — var leaked outside the block
```

`var` is function-scoped — by the time setTimeout runs, loop is done and `i` is already 3.

```js
// Fix — use let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2 — let creates new scope per iteration
```

`let` creates a new binding for each iteration — each setTimeout captures its own `i`.

---

### Q14. What is the difference between for loop and forEach?

**Answer:**

```js
const items = ["a", "b", "c"];

// for loop
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// forEach
items.forEach((item) => {
  console.log(item);
});
```

| | for loop | forEach |
|---|---|---|
| Works with | Any iterable | Arrays only |
| break/continue | Supported | Not supported |
| Returns | Nothing | Nothing |
| Readability | Verbose | Cleaner |

Use `for` when you need `break`/`continue` or index control.
Use `forEach` for simple array iteration.

---

### Q15. When would you use a while loop over a for loop?

**Answer:**

Use `while` when the number of iterations is unknown — depends on a condition.

```js
// for loop — when count is known
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop — when count is unknown
let userInput = "";
while (userInput !== "quit") {
  userInput = getUserInput(); // keep running until user quits
}
```

Real world examples where `while` makes more sense:
- Reading data until end of file
- Waiting for a condition to become true
- Retry logic — keep trying until success

---

### Q16. What does break and continue do in a loop?

**Answer:**

`break` — exits the loop immediately
`continue` — skips current iteration, loop continues

```js
// break — stop at first even number
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("First even: " + i); // 2
    break;
  }
}

// continue — skip even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9
}
```

Real world use case:
```js
const users = [
  { name: "Shivesh", active: true },
  { name: "Rahul", active: false },
  { name: "Priya", active: true },
];

for (const user of users) {
  if (!user.active) continue; // skip inactive users
  console.log("Processing: " + user.name);
}
```

---

> Try solving these without looking at answers first.
> Full code on GitHub → [js-to-react-30days](https://github.com/shiveshd007/js-to-react-30days)