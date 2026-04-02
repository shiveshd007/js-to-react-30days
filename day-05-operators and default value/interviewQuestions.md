# Day 05 — Interview Questions
## Spread, Rest & Default Values

These are real interview questions based on Day 05 concepts.
Try answering before reading the answer.

---

## Spread Operator

### Q1. What is the spread operator in JavaScript?

**Answer:**

The spread operator (`...`) expands an iterable — array, object, or string — into individual elements.

```js
// Spread in arrays
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

// Spread in objects
const user = { name: "Shivesh", role: "Dev" };
const updated = { ...user, role: "Senior Dev" };
// { name: "Shivesh", role: "Senior Dev" }

// Spread in function calls
const numbers = [3, 1, 4, 1, 5];
Math.max(...numbers); // 5
```

---

### Q2. How do you use spread to copy an array without mutation?

**Answer:**

```js
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3] — unchanged
console.log(copy);     // [1, 2, 3, 4]
```

Spread creates a shallow copy — nested arrays/objects still share references.

```js
const nested = [[1, 2], [3, 4]];
const copy = [...nested];

copy[0].push(99);
console.log(nested[0]); // [1, 2, 99] — affected! shallow copy
```

---

### Q3. What happens when you spread two objects with duplicate keys?

**Answer:**

The last spread wins — duplicate keys get overridden.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }
// obj2.b overrides obj1.b
```

Order matters — always put defaults first, overrides last.

```js
const defaults = { theme: "light", fontSize: 16 };
const userPrefs = { theme: "dark" };

const config = { ...defaults, ...userPrefs };
// { theme: "dark", fontSize: 16 } — userPrefs wins
```

---

### Q4. How is spread used in React state updates?

**Answer:**

React needs a new object reference to detect state changes. Spread creates a new object while preserving existing values.

```js
// Update one field — keep rest same
const newState = { ...prevState, role: "Senior Dev" };

// Add item to array state
setItems([...items, newItem]);

// Remove item from array state
setItems(items.filter(item => item.id !== id));

// Update nested object — careful with shallow copy
setState({
  ...prevState,
  address: { ...prevState.address, city: "Mumbai" }
});
```

Mutating state directly (`state.role = "Senior Dev"`) won't trigger re-render — React won't detect the change.

---

## Rest Operator

### Q5. What is the rest operator and how is it different from spread?

**Answer:**

Same `...` symbol — completely different jobs.

**Spread** — expands one into many. Used outside function definitions.
**Rest** — collects many into one. Used in function parameters.

```js
// REST — in function parameter (collecting)
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4, 5); // 15

// SPREAD — in function call (expanding)
const nums = [1, 2, 3, 4, 5];
sum(...nums); // 15
```

**Simple rule:**
- Function definition → REST
- Everywhere else → SPREAD

---

### Q6. What are the rules for using the rest parameter?

**Answer:**

```js
// Rule 1 — Rest must be LAST parameter
function correct(first, second, ...rest) {} // valid
// function wrong(first, ...rest, last) {}  // SyntaxError

// Rule 2 — Only ONE rest parameter per function
// function wrong(...a, ...b) {} // SyntaxError

// Rule 3 — Rest collects remaining arguments as array
function logUser(name, role, ...skills) {
  console.log(name);   // "Shivesh"
  console.log(role);   // "Frontend Dev"
  console.log(skills); // ["JS", "React", "TypeScript"]
}

logUser("Shivesh", "Frontend Dev", "JS", "React", "TypeScript");
```

---

### Q7. What is the difference between rest parameters and the arguments object?

**Answer:**

```js
// arguments object — old way (ES5)
function oldSum() {
  console.log(arguments);        // Arguments object — not a real array
  console.log(Array.isArray(arguments)); // false
  // arguments.reduce(...) — TypeError, not an array
}

// Rest parameters — modern way (ES6)
function newSum(...nums) {
  console.log(nums);             // Real array
  console.log(Array.isArray(nums)); // true
  return nums.reduce((t, n) => t + n, 0); // works!
}
```

| | arguments | rest |
|---|---|---|
| Type | Array-like object | Real array |
| Arrow functions | Not available | Available |
| Named params | Includes all | Excludes named ones |
| Array methods | Not available | All available |

Always prefer rest over arguments in modern JS.

---

## Default Values

### Q8. What are default parameter values in JavaScript?

**Answer:**

Default values provide a fallback when an argument is not passed or is `undefined`.

```js
function greet(name = "Guest", role = "User") {
  return "Hello " + name + " — " + role;
}

greet("Shivesh", "Frontend Dev"); // "Hello Shivesh — Frontend Dev"
greet("Rahul");                   // "Hello Rahul — User"
greet();                          // "Hello Guest — User"
```

---

### Q9. When does a default value NOT trigger?

**Answer:**

Default values only trigger for `undefined` — not for `null`, `0`, `false`, or `""`.

```js
function test(value = "default") {
  console.log(value);
}

test(undefined); // "default" — triggers
test(null);      // null — does NOT trigger
test(0);         // 0 — does NOT trigger
test(false);     // false — does NOT trigger
test("");        // "" — does NOT trigger
```

This catches many developers off guard — especially when working with API responses where values can be `null`.

---

### Q10. How do default values work with destructuring?

**Answer:**

```js
const config = { theme: "dark" };

const { theme = "light", fontSize = 16, language = "en" } = config;
console.log(theme);    // "dark" — from object
console.log(fontSize); // 16 — default
console.log(language); // "en" — default
```

Combined with function parameters:
```js
function setup({ theme = "light", fontSize = 16 } = {}) {
  return { theme, fontSize };
}

setup({ theme: "dark" }); // { theme: "dark", fontSize: 16 }
setup();                  // { theme: "light", fontSize: 16 } — no error
```

The `= {}` at the end prevents a TypeError if nothing is passed.

---

## Advanced

### Q11. What is the difference between shallow copy and deep copy with spread?

**Answer:**

Spread creates a **shallow copy** — only top-level properties are copied. Nested objects still share the same reference.

```js
const user = {
  name: "Shivesh",
  address: { city: "Bhopal" }
};

const copy = { ...user };
copy.name = "Dev";              // safe — primitive
copy.address.city = "Mumbai";   // UNSAFE — shared reference

console.log(user.name);         // "Shivesh" — unaffected
console.log(user.address.city); // "Mumbai" — affected!
```

For nested objects — spread each level:
```js
const safeCopy = {
  ...user,
  address: { ...user.address, city: "Mumbai" }
};
```

---

### Q12. How do you use spread to pass all props in React?

**Answer:**

```js
// Collect specific props, pass rest to underlying element
function Button({ onClick, children, ...rest }) {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

// Usage
<Button onClick={handleClick} className="primary" disabled={false}>
  Click me
</Button>
```

`...rest` collects `className` and `disabled` — then `{...rest}` spreads them onto the button element. This pattern avoids manually listing every HTML attribute.

---

### Q13. What is the difference between these two?

```js
const a = [1, 2, 3];
const b = [...a];

const c = [1, 2, 3];
const d = c;
```

**Answer:**

```js
const a = [1, 2, 3];
const b = [...a]; // NEW array — different reference

b.push(4);
console.log(a); // [1, 2, 3] — unchanged
console.log(b); // [1, 2, 3, 4]

const c = [1, 2, 3];
const d = c; // SAME reference — just another name

d.push(4);
console.log(c); // [1, 2, 3, 4] — affected!
console.log(d); // [1, 2, 3, 4]
```

`b = [...a]` creates a new array. `d = c` just points to the same array. This is why React state must use spread — not direct assignment.

---

### Q14. Can you use spread with strings?

**Answer:**

Yes — strings are iterable, so spread works on them.

```js
const str = "Hello";
const chars = [...str];
console.log(chars); // ["H", "e", "l", "l", "o"]

// Practical use — unique characters
const unique = [...new Set("javascript")];
console.log(unique); // ["j", "a", "v", "s", "c", "r", "i", "p", "t"]
```

---

### Q15. What is the practical difference between these two function signatures?

```js
function a(x, y, z) {}
function b(...args) {}
```

**Answer:**

```js
// Fixed params — known number of arguments
function add(x, y, z) {
  return x + y + z;
}
add(1, 2, 3);    // 6
add(1, 2);       // NaN — z is undefined

// Rest params — flexible number of arguments
function sum(...args) {
  return args.reduce((t, n) => t + n, 0);
}
sum(1, 2, 3);          // 6
sum(1, 2, 3, 4, 5);    // 15
sum(10);               // 10
```

Use fixed params when the number of arguments is always the same.
Use rest when the function should handle any number of arguments.

---

> Try solving these without looking at answers first.
> Full code on GitHub → [js-to-react-30days](https://github.com/shiveshd007/js-to-react-30days)