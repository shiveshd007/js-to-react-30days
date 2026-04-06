# Day 07 — Interview Questions
## DOM Manipulation & Events

These are real interview questions based on Day 07 concepts.
Try answering before reading the answer.

---

## DOM Basics

### Q1. What is the DOM?

**Answer:**

DOM (Document Object Model) is a tree-like representation of an HTML document created by the browser. Every HTML element becomes a node in this tree.

```
document
  └── html
        └── body
              └── div#app
                    ├── h1
                    └── button
```

JavaScript can read and modify this tree — changing content, styles, attributes, and structure dynamically. This is the foundation of interactive web pages.

---

### Q2. What is the difference between querySelector and getElementById?

**Answer:**

```js
// querySelector — accepts any CSS selector
document.querySelector("#title");          // by id
document.querySelector(".card");           // by class
document.querySelector("input[type=text]"); // by attribute
document.querySelector("ul li:first-child"); // complex selectors

// getElementById — only accepts id, no # needed
document.getElementById("title");

// querySelectorAll — returns NodeList (multiple elements)
document.querySelectorAll(".card"); // all matching elements
```

| | querySelector | getElementById |
|---|---|---|
| Selector | Any CSS selector | ID only |
| Speed | Slightly slower | Faster |
| Returns | First match / null | Element / null |
| Multiple | querySelectorAll | getElementsByClassName |

Use `querySelector` by default — more flexible. Use `getElementById` when you need maximum performance.

---

### Q3. What is the difference between textContent and innerHTML?

**Answer:**

```js
const div = document.querySelector("div");

// textContent — plain text only, safe
div.textContent = "<h1>Hello</h1>"; // renders as text, not HTML
// Shows literally: <h1>Hello</h1>

// innerHTML — parses and renders HTML
div.innerHTML = "<h1>Hello</h1>"; // renders as heading
// Shows: Hello (as h1)
```

**Security:** `innerHTML` is vulnerable to XSS (Cross-Site Scripting) attacks if user input is inserted directly.

```js
// Dangerous — never do this
div.innerHTML = userInput; // XSS risk

// Safe alternatives
div.textContent = userInput; // always safe
```

Use `textContent` by default. Use `innerHTML` only when you need to render HTML — and never with user input.

---

## Events

### Q4. What is an event listener and how do you add one?

**Answer:**

An event listener is a function that runs when a specific event occurs on an element.

```js
const button = document.querySelector("button");

// addEventListener — preferred
button.addEventListener("click", function(event) {
  console.log("Clicked!", event.target);
});

// Arrow function
button.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default behavior
  console.log(e.target.textContent);
});

// Common events
// Mouse: click, dblclick, mouseover, mouseout, mousemove
// Keyboard: keydown, keyup, keypress
// Form: submit, change, input, focus, blur
// Window: load, resize, scroll
```

---

### Q5. How do you remove an event listener?

**Answer:**

```js
function handleClick() {
  console.log("Clicked!");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick); // works — same reference

// This does NOT work
button.removeEventListener("click", () => {
  console.log("Clicked!"); // different function reference — won't remove
});
```

To remove a listener — you must pass the exact same function reference. Anonymous functions cannot be removed.

---

### Q6. What is event bubbling?

**Answer:**

Event bubbling is the default behavior where an event fired on a child element travels upward through the DOM tree — firing on each ancestor.

```js
// HTML: <div id="outer"><div id="inner"><button>Click</button></div></div>

document.querySelector("button").addEventListener("click", () => {
  console.log("Button");
});
document.querySelector("#inner").addEventListener("click", () => {
  console.log("Inner");
});
document.querySelector("#outer").addEventListener("click", () => {
  console.log("Outer");
});

// Click on button — output:
// "Button"
// "Inner"
// "Outer"
```

Events bubble from the target element up to the document root.

---

### Q7. What is the difference between event bubbling and event capturing?

**Answer:**

```js
// Bubbling — default (false) — bottom to top
element.addEventListener("click", handler);
element.addEventListener("click", handler, false);

// Capturing — optional (true) — top to bottom
element.addEventListener("click", handler, true);
```

**Capturing phase** — event travels DOWN from document to target.
**Bubbling phase** — event travels UP from target to document.

```js
// With both — capturing fires first
outer.addEventListener("click", () => console.log("Outer capture"), true);
inner.addEventListener("click", () => console.log("Inner capture"), true);
btn.addEventListener("click", () => console.log("Button bubble"));
inner.addEventListener("click", () => console.log("Inner bubble"));
outer.addEventListener("click", () => console.log("Outer bubble"));

// Click button — output:
// "Outer capture"   (capturing — top down)
// "Inner capture"   (capturing)
// "Button bubble"   (target)
// "Inner bubble"    (bubbling — bottom up)
// "Outer bubble"    (bubbling)
```

Bubbling is used 99% of the time. Capturing is rarely needed.

---

### Q8. What is e.stopPropagation() and when do you use it?

**Answer:**

`stopPropagation()` stops the event from bubbling up to parent elements.

```js
document.querySelector("button").addEventListener("click", (e) => {
  e.stopPropagation(); // stops here — parent handlers won't fire
  console.log("Button clicked");
});

document.querySelector("div").addEventListener("click", () => {
  console.log("Div clicked"); // won't fire if button was clicked
});
```

Use when:
- A child element has a click handler and you don't want the parent's handler to also fire
- Modal close on backdrop click — but not when clicking inside the modal

---

### Q9. What is e.preventDefault() and when do you use it?

**Answer:**

`preventDefault()` stops the browser's default behavior for an event.

```js
// Prevent form submission (page reload)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // handle form data with JS
});

// Prevent link navigation
link.addEventListener("click", (e) => {
  e.preventDefault();
  // handle with JS router
});

// Prevent right click menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

Does NOT stop bubbling — use `stopPropagation()` for that.

---

### Q10. What is the difference between e.target and e.currentTarget?

**Answer:**

```js
const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  console.log(e.target);        // element actually clicked (li)
  console.log(e.currentTarget); // element with the listener (ul)
});
```

`e.target` — the element that triggered the event (where you clicked).
`e.currentTarget` — the element that has the event listener attached.

They are the same only when you click directly on the element with the listener.

---

## Event Delegation

### Q11. What is event delegation and why is it important?

**Answer:**

Event delegation is attaching ONE event listener to a parent element — and using bubbling to handle events from child elements.

```js
// Bad — listener on every item
document.querySelectorAll(".todo-item").forEach(item => {
  item.addEventListener("click", handleClick);
});
// Problems:
// 1. Multiple listeners — memory waste
// 2. Dynamically added items have no listener

// Good — event delegation
document.querySelector("#todo-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-item")) {
    handleClick(e.target);
  }
});
// Benefits:
// 1. One listener — efficient
// 2. Works for dynamically added items too
```

---

### Q12. How does React use event delegation internally?

**Answer:**

React attaches a single event listener at the root element — not on individual DOM elements.

```jsx
// What you write
<button onClick={handleClick}>Click</button>

// What React actually does internally
// ONE listener at root — bubbling handles the rest
document.getElementById("root").addEventListener("click", reactEventHandler);
```

Benefits:
- Memory efficient — one listener instead of hundreds
- Works with dynamic components — new components don't need new listeners
- Consistent cross-browser behavior via React's synthetic event system

This is why understanding event delegation helps understand React's event system.

---

## Advanced

### Q13. What are synthetic events in React?

**Answer:**

React wraps native browser events in a `SyntheticEvent` object — a cross-browser wrapper that normalizes event behavior.

```jsx
function handleClick(e) {
  console.log(e); // SyntheticEvent — not native browser event
  console.log(e.nativeEvent); // access native event if needed
  e.preventDefault(); // works same as native
  e.stopPropagation(); // works same as native
}

<button onClick={handleClick}>Click</button>
```

React's synthetic events ensure consistent behavior across all browsers — older IE versions had different event APIs.

---

### Q14. Why should you avoid direct DOM manipulation in React?

**Answer:**

React maintains a Virtual DOM — a lightweight copy of the actual DOM. React compares Virtual DOM with real DOM (diffing) and makes minimal updates.

```jsx
// Wrong — direct DOM manipulation in React
document.querySelector("h1").textContent = "New Title";
// React doesn't know about this change
// Next render will overwrite it

// Correct — update state, React updates DOM
const [title, setTitle] = useState("Old Title");
setTitle("New Title"); // React updates DOM automatically
```

Direct DOM manipulation:
- Bypasses React's update cycle
- Creates inconsistency between state and UI
- Can cause unexpected re-renders or lost updates

Only exception — using `useRef` for DOM access when necessary (focus, scroll, measurements).

---

### Q15. What is the difference between mouseenter and mouseover?

**Answer:**

```js
// mouseover — fires on element AND bubbles up from children
div.addEventListener("mouseover", () => {
  console.log("mouseover"); // fires multiple times when moving over children
});

// mouseenter — fires only on the element, does NOT bubble
div.addEventListener("mouseenter", () => {
  console.log("mouseenter"); // fires once when entering the div
});
```

| | mouseover | mouseenter |
|---|---|---|
| Bubbles | Yes | No |
| Fires on children | Yes | No |
| React equivalent | onMouseOver | onMouseEnter |

Use `mouseenter/mouseleave` for hover effects — avoids unwanted firing when moving between child elements.

---

> Try solving these without looking at answers first.
> Full code on GitHub → [js-to-react-30days](https://github.com/shiveshd007/js-to-react-30days)