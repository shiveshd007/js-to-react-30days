# Day 04 — Interview Questions
## Objects & Destructuring

These are real interview questions based on Day 04 concepts.
Try answering before reading the answer.

---

## Basics

### Q1. What is an object in JavaScript?

**Answer:**

An object is a collection of key-value pairs. It represents a real-world entity with properties and behaviors.

```js
const user = {
  name: "Shivesh",       // string
  age: 23,               // number
  active: true,          // boolean
  skills: ["JS", "React"], // array
  address: {             // nested object
    city: "Bhopal"
  },
  greet() {              // method
    return "Hi, I am " + this.name;
  }
};
```

Objects can hold any data type as values — including other objects, arrays, and functions.

---

### Q2. What is the difference between dot notation and bracket notation?

**Answer:**

```js
const user = {
  name: "Shivesh",
  "current role": "Frontend Dev"
};

// Dot notation — simple, clean
console.log(user.name); // "Shivesh"

// Bracket notation — flexible
console.log(user["name"]);         // "Shivesh"
console.log(user["current role"]); // "Frontend Dev"

// Dynamic key — only bracket notation works
const key = "name";
console.log(user[key]);  // "Shivesh"
console.log(user.key);   // undefined — looks for key named "key"
```

**Use dot notation** by default. Use bracket notation when:
- Key has spaces or special characters
- Key is stored in a variable (dynamic access)

---

### Q3. What is optional chaining and why is it useful?

**Answer:**

Optional chaining (`?.`) safely accesses nested properties without throwing an error if a property doesn't exist.

```js
const user = { name: "Shivesh" };

// Without optional chaining
console.log(user.address.city); // TypeError — address is undefined

// With optional chaining
console.log(user?.address?.city); // undefined — no error

// Chained access
console.log(user?.social?.twitter?.handle); // undefined — safe
```

Without optional chaining, accessing a nested property on `undefined` throws a `TypeError`. Optional chaining short-circuits and returns `undefined` instead.

---

### Q4. What is the difference between null and undefined in object properties?

**Answer:**

```js
const user = {
  name: "Shivesh",
  age: null,      // intentionally empty
  role: undefined // not set
};

console.log(user.name);    // "Shivesh"
console.log(user.age);     // null — value exists, intentionally empty
console.log(user.role);    // undefined — value not set
console.log(user.city);    // undefined — property doesn't exist
```

`null` — developer explicitly set it to empty.
`undefined` — property was never assigned a value or doesn't exist.

---

## Destructuring

### Q5. What is destructuring in JavaScript?

**Answer:**

Destructuring is a syntax that allows you to extract values from objects or arrays into variables.

```js
const user = { name: "Shivesh", age: 23, role: "Frontend Dev" };

// Without destructuring
const name = user.name;
const age = user.age;

// With destructuring — cleaner
const { name, age, role } = user;
console.log(name); // "Shivesh"
console.log(age);  // 23
```

---

### Q6. How do you rename variables while destructuring?

**Answer:**

```js
const user = { name: "Shivesh", role: "Frontend Dev" };

const { name: userName, role: userRole } = user;
console.log(userName); // "Shivesh"
console.log(userRole); // "Frontend Dev"

// Original keys (name, role) are not created as variables
// console.log(name); // ReferenceError
```

Use `:` to assign a new variable name while destructuring.

---

### Q7. How do you set default values while destructuring?

**Answer:**

```js
const user = { name: "Shivesh" };

const { name, role = "Developer", experience = 0 } = user;
console.log(name);       // "Shivesh"
console.log(role);       // "Developer" — default used
console.log(experience); // 0 — default used
```

Default values are used only when the property is `undefined` — not when it's `null`.

```js
const { role = "Developer" } = { role: null };
console.log(role); // null — default NOT used, value exists
```

---

### Q8. How do you destructure nested objects?

**Answer:**

```js
const user = {
  name: "Shivesh",
  address: {
    city: "Bhopal",
    state: "MP"
  }
};

// Nested destructuring
const { name, address: { city, state } } = user;
console.log(name);  // "Shivesh"
console.log(city);  // "Bhopal"
console.log(state); // "MP"

// Note: address is NOT a variable here — only city and state are
// console.log(address); // ReferenceError
```

---

### Q9. What is the difference between these two?

```js
const { a = 10 } = { a: undefined };
const { b = 10 } = { b: null };
```

**Answer:**

```js
const { a = 10 } = { a: undefined };
console.log(a); // 10 — default used, value is undefined

const { b = 10 } = { b: null };
console.log(b); // null — default NOT used, null is a value
```

Default values only kick in when the property is `undefined` — not `null`.

---

## Objects in Functions

### Q10. What are the three ways to pass and access an object in a function?

**Answer:**

```js
const user = { name: "Shivesh", role: "Frontend Dev" };

// 1. Pass whole object — access with dot notation
function display1(user) {
  console.log(user.name, user.role);
}

// 2. Destructure inside function body
function display2(user) {
  const { name, role } = user;
  console.log(name, role);
}

// 3. Destructure in parameter — cleanest
function display3({ name, role }) {
  console.log(name, role);
}

// All three produce same output
display1(user); // "Shivesh Frontend Dev"
display2(user); // "Shivesh Frontend Dev"
display3(user); // "Shivesh Frontend Dev"
```

Approach 3 is preferred in modern JavaScript and React.

---

### Q11. How are React props related to object destructuring?

**Answer:**

React props are plain JavaScript objects. Every component receives props as an object.

```js
// What you write
function Card({ title, description }) {
  return title + " — " + description;
}

// What React does internally
function Card(props) {
  return props.title + " — " + props.description;
}

// React calls your component like this:
// Card({ title: "Hello", description: "World" })
```

Destructuring in the parameter is not React magic — it's plain JavaScript. Once this clicks, React becomes significantly easier to read.

---

## Object Methods & Spread

### Q12. What do Object.keys(), Object.values(), and Object.entries() return?

**Answer:**

```js
const config = { theme: "dark", language: "en", fontSize: 16 };

Object.keys(config);
// ["theme", "language", "fontSize"]

Object.values(config);
// ["dark", "en", 16]

Object.entries(config);
// [["theme", "dark"], ["language", "en"], ["fontSize", 16]]
```

`Object.entries()` is useful when you need both key and value — commonly used with `forEach` or `map`.

---

### Q13. How do you copy an object without mutating the original?

**Answer:**

```js
const original = { name: "Shivesh", role: "Dev" };

// Spread operator — shallow copy
const copy = { ...original };
copy.role = "Senior Dev";

console.log(original.role); // "Dev" — unchanged
console.log(copy.role);     // "Senior Dev"
```

**Important — spread is shallow copy only:**
```js
const user = { name: "Shivesh", address: { city: "Bhopal" } };
const copy = { ...user };

copy.address.city = "Mumbai"; // modifies nested object
console.log(user.address.city); // "Mumbai" — original affected!
```

For deep copy — use `JSON.parse(JSON.stringify(obj))` or `structuredClone(obj)`.

---

### Q14. How do you merge two objects in JavaScript?

**Answer:**

```js
const defaults = { theme: "light", fontSize: 16, language: "en" };
const userPrefs = { theme: "dark", language: "hi" };

const merged = { ...defaults, ...userPrefs };
console.log(merged);
// { theme: "dark", fontSize: 16, language: "hi" }
// userPrefs overrides defaults where keys match
```

Order matters — later spread overrides earlier values for duplicate keys.

---

### Q15. What is the difference between shallow copy and deep copy?

**Answer:**

**Shallow copy** — copies only the top-level properties. Nested objects still share the same reference.

```js
const user = { name: "Shivesh", address: { city: "Bhopal" } };
const shallow = { ...user };

shallow.name = "Dev";           // doesn't affect original
shallow.address.city = "Mumbai"; // AFFECTS original — shared reference

console.log(user.name);         // "Shivesh" — safe
console.log(user.address.city); // "Mumbai" — affected!
```

**Deep copy** — copies everything including nested objects. No shared references.

```js
const deep = structuredClone(user); // ES2022
deep.address.city = "Delhi";

console.log(user.address.city); // "Mumbai" — unaffected
```

In React — shallow copy is usually enough for state updates since React re-renders on reference change.

---

### Q16. What is computed property names in objects?

**Answer:**

You can use dynamic expressions as object keys using square brackets.

```js
const key = "name";
const value = "Shivesh";

const user = {
  [key]: value, // computed property name
  age: 23
};

console.log(user.name); // "Shivesh"
console.log(user[key]); // "Shivesh"
```

Real world use case:
```js
function updateField(obj, field, value) {
  return { ...obj, [field]: value }; // dynamic key update
}

const user = { name: "Shivesh", role: "Dev" };
updateField(user, "role", "Senior Dev");
// { name: "Shivesh", role: "Senior Dev" }
```

---

> Try solving these without looking at answers first.
> Full code on GitHub → [js-to-react-30days](https://github.com/shiveshd007/js-to-react-30days)