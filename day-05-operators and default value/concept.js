// ====================================
// JS to React - 30 Days
// Day 05 - Spread, Rest & Default Values
// ====================================


// ====================================
// PART 1 - SPREAD OPERATOR
// ====================================

// Spread = ek value ko multiple mein expand karna
// Same ... symbol — but context decide karta hai kaam

// --- Spread in Arrays ---

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node", "Express", "MongoDB"];

// Combine arrays
const fullStack = [...frontend, ...backend];
console.log(fullStack);
// ["HTML", "CSS", "JavaScript", "Node", "Express", "MongoDB"]

// Add item without mutating original
const newSkills = [...frontend, "React"];
console.log(newSkills); // ["HTML", "CSS", "JavaScript", "React"]
console.log(frontend);  // ["HTML", "CSS", "JavaScript"] — unchanged

// Copy array
const copy = [...frontend];
copy.push("TypeScript");
console.log(frontend); // ["HTML", "CSS", "JavaScript"] — unchanged
console.log(copy);     // ["HTML", "CSS", "JavaScript", "TypeScript"]

// Spread in function call
const numbers = [3, 1, 4, 1, 5, 9];
console.log(Math.max(...numbers)); // 9 — spread as arguments


// --- Spread in Objects ---

const user = { name: "Shivesh", role: "Dev" };

// Copy object
const userCopy = { ...user };
userCopy.role = "Senior Dev";
console.log(user.role);     // "Dev" — unchanged
console.log(userCopy.role); // "Senior Dev"

// Merge objects
const defaults = { theme: "light", fontSize: 16 };
const userPrefs = { theme: "dark", language: "hi" };
const config = { ...defaults, ...userPrefs };
console.log(config);
// { theme: "dark", fontSize: 16, language: "hi" }
// Last spread wins for duplicate keys

// Override one property — React state update pattern
const updatedUser = { ...user, role: "Senior Dev" };
console.log(updatedUser); // { name: "Shivesh", role: "Senior Dev" }
console.log(user);        // { name: "Shivesh", role: "Dev" } — unchanged


// ====================================
// PART 2 - REST OPERATOR
// ====================================

// Rest = multiple values ko ek mein collect karna
// Same ... symbol — but function parameters mein use hota hai

// --- Rest in Function Parameters ---

// Collect all arguments
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));        // 30

// Named params + rest
function logUser(name, role, ...skills) {
  console.log(name);   // "Shivesh"
  console.log(role);   // "Frontend Dev"
  console.log(skills); // ["JS", "React", "TypeScript"]
}

logUser("Shivesh", "Frontend Dev", "JS", "React", "TypeScript");

// Real world — flexible logger
function logger(level, ...messages) {
  console.log("[" + level + "]", ...messages);
}

logger("INFO", "Server started", "Port: 3000");
// [INFO] Server started Port: 3000

// Rules:
// Rest must be LAST parameter
// Only ONE rest parameter per function
// function wrong(first, ...rest, last) {} // SyntaxError


// ====================================
// PART 3 - DEFAULT VALUES
// ====================================

// Default values = agar argument nahi diya toh fallback value use karo

// --- Default in Functions ---

function greet(name = "Guest", role = "User") {
  console.log("Hello " + name + " — " + role);
}

greet("Shivesh", "Frontend Dev"); // Hello Shivesh — Frontend Dev
greet("Rahul");                   // Hello Rahul — User
greet();                          // Hello Guest — User

// Default only triggers for undefined — not null
function test(value = "default") {
  console.log(value);
}
test(undefined); // "default" — triggers
test(null);      // null — does NOT trigger
test(0);         // 0 — does NOT trigger
test("");        // "" — does NOT trigger

// --- Default in Destructuring ---

const config = { theme: "dark" };
const { theme = "light", fontSize = 16, language = "en" } = config;
console.log(theme);    // "dark" — from object
console.log(fontSize); // 16 — default
console.log(language); // "en" — default

// Default in function parameter destructuring
function createUser({ name, role = "Developer", active = true } = {}) {
  return { name, role, active };
}

createUser({ name: "Shivesh", role: "Frontend Dev" });
// { name: "Shivesh", role: "Frontend Dev", active: true }

createUser({ name: "Rahul" });
// { name: "Rahul", role: "Developer", active: true }

createUser(); // {} default — no error


// ====================================
// PART 4 - SPREAD vs REST SUMMARY
// ====================================

// Same symbol ... — different context, different job

// SPREAD — expands
const arr = [1, 2, 3];
const expanded = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

// REST — collects
function collect(...args) {
  console.log(args); // [1, 2, 3, 4, 5]
}
collect(1, 2, 3, 4, 5);

// Simple rule:
// In function DEFINITION  — it's REST (collecting)
// Everywhere else          — it's SPREAD (expanding)


// ====================================
// PART 5 - REACT CONNECTION
// ====================================

// React uses spread and rest everywhere

// 1. State update — spread to copy, then override
// setState({ ...prevState, role: "Senior Dev" })

// 2. Props spread — pass all props to child
// function Button({ onClick, ...rest }) {
//   return <button onClick={onClick} {...rest} />
// }

// 3. Array state — add item without mutation
// setItems([...items, newItem])

// 4. Remove item from array state
// setItems(items.filter(item => item.id !== id))

// 5. Default props
// function Card({ title = "Untitled", description = "No description" }) {}

// Without spread — React state updates break silently
// With spread — you know exactly what's happening and why