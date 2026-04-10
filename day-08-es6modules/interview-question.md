# Day 08 — Interview Questions
## ES6 Modules

These are real interview questions based on Day 08 concepts.
Try answering before reading the answer.

---

## Basics

### Q1. What are ES6 modules and why do they exist?

**Answer:**

ES6 modules are a standardized way to organize and share JavaScript code across files. Before modules, all JavaScript shared a global scope — causing naming conflicts and dependency issues.

```js
// Before modules — global scope pollution
// script1.js
var user = "Shivesh"; // global

// script2.js
var user = "Rahul"; // overwrites previous — conflict!

// With modules — each file has its own scope
// user.js
const user = "Shivesh"; // scoped to this file
export { user }; // explicitly share
```

Benefits:
- Each file has its own scope — no global pollution
- Explicit dependencies — clear what comes from where
- Reusable code — write once, import anywhere
- Better code organization

---

### Q2. What is the difference between default and named exports?

**Answer:**

```js
// Default export — ONE per file, any name on import
export default function UserCard() {}

// Named export — MULTIPLE per file, exact name on import
export const API_URL = "https://api.example.com";
export function formatDate(date) {}
export function formatCurrency(amount) {}
```

```js
// Default import — you choose the name
import UserCard from './UserCard';
import Card from './UserCard'; // same thing, different name

// Named import — exact name required
import { API_URL, formatDate } from './utils';
import { formatDate as fd } from './utils'; // rename with alias
```

| | Default | Named |
|---|---|---|
| Per file | One | Multiple |
| Import name | Flexible | Must match |
| Rename on import | Automatic | Use `as` keyword |

---

### Q3. Can a file have both default and named exports?

**Answer:**

Yes — a file can have one default export and multiple named exports.

```js
// api.js
export default async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}

export const BASE_URL = "https://api.example.com";
export const API_VERSION = "v1";
```

```js
// Importing both
import fetchUser, { BASE_URL, API_VERSION } from './api';
```

The default import comes first, then named imports in curly braces.

---

### Q4. What is the difference between these two imports?

```js
import UserCard from './UserCard';
import { UserCard } from './UserCard';
```

**Answer:**

```js
// Default import — imports whatever is exported as default
import UserCard from './UserCard';

// Named import — imports a specific named export called UserCard
import { UserCard } from './UserCard';
```

If `UserCard.js` has `export default function UserCard()` — first import works.
If `UserCard.js` has `export function UserCard()` — second import works.
Using the wrong one results in `undefined` or an error.

---

### Q5. How do you import everything from a module?

**Answer:**

Use the namespace import (`* as`) to import all exports as properties of an object.

```js
// utils.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// main.js
import * as utils from './utils';

console.log(utils.PI);          // 3.14159
console.log(utils.add(2, 3));   // 5
console.log(utils.multiply(2, 3)); // 6
```

Useful when you need many exports from one module. But specific imports are preferred for tree shaking.

---

## Advanced

### Q6. What is a barrel file and why is it used?

**Answer:**

A barrel file (usually `index.js`) re-exports multiple modules from a single entry point — making imports cleaner.

```js
// Without barrel — messy imports
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';

// components/index.js — barrel file
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Modal } from './Modal';

// With barrel — clean single import
import { Button, Input, Modal } from './components';
```

Benefits: cleaner imports, easier refactoring, one place to manage component exports.

Potential issue: can make tree shaking less effective if not configured properly.

---

### Q7. What is the difference between static and dynamic imports?

**Answer:**

```js
// Static import — always loaded at startup
import HeavyChart from './HeavyChart'; // loaded even if never used

// Dynamic import — loaded on demand
async function loadChart() {
  const module = await import('./HeavyChart');
  const HeavyChart = module.default;
  // use component only when needed
}
```

| | Static | Dynamic |
|---|---|---|
| When loaded | Startup | On demand |
| Syntax | Top of file | Anywhere, returns Promise |
| Code splitting | No | Yes |
| Conditional loading | No | Yes |

Dynamic imports enable code splitting — smaller initial bundle, faster page load.

---

### Q8. What is the difference between CommonJS and ES6 modules?

**Answer:**

```js
// CommonJS (Node.js default) — synchronous
const express = require('express');
const { formatDate } = require('./utils');
module.exports = { hello, world };
module.exports = UserCard; // default-like

// ES6 Modules — asynchronous, static analysis
import express from 'express';
import { formatDate } from './utils';
export { hello, world };
export default UserCard;
```

| | CommonJS | ES6 Modules |
|---|---|---|
| Syntax | require/module.exports | import/export |
| Loading | Synchronous | Asynchronous |
| Analysis | Runtime | Static (build time) |
| Tree shaking | Difficult | Supported |
| Browser | No (needs bundler) | Native support |
| Node.js | Default | With .mjs or "type":"module" |

React projects use ES6 modules — bundlers like Vite/Webpack handle the conversion.

---

### Q9. What is tree shaking and how do modules enable it?

**Answer:**

Tree shaking is a build optimization that removes unused exports from the final bundle.

```js
// utils.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; } // 100 more functions

// main.js
import { add } from './utils'; // only use add
```

With ES6 modules — bundlers (Vite, Webpack) can analyze statically which exports are used and remove the rest. `subtract`, `multiply`, and others are excluded from the final bundle.

CommonJS `require` cannot be tree shaken as easily — it's dynamic and runs at runtime.

---

### Q10. Why can't you use import inside a function or if block?

**Answer:**

Static `import` declarations must be at the top level — they are resolved at parse time, not runtime.

```js
// SyntaxError — import inside function
function loadModule() {
  import UserCard from './UserCard'; // not allowed
}

// SyntaxError — import inside if
if (condition) {
  import { helper } from './utils'; // not allowed
}

// Use dynamic import for conditional loading
async function loadConditionally() {
  if (condition) {
    const { helper } = await import('./utils'); // works!
  }
}
```

Static imports allow bundlers to analyze dependencies at build time — enabling optimizations like tree shaking and code splitting.

---

## React Connection

### Q11. Explain every import in a typical React component file.

**Answer:**

```js
import React from 'react';
// Default import — React object (needed pre-React 17 for JSX)
// React 17+ — not required but still common

import { useState, useEffect, useCallback } from 'react';
// Named imports — specific hooks from react package

import UserCard from './components/UserCard';
// Default import — UserCard component from local file

import { Button, Input } from './components';
// Named imports from barrel file — components/index.js

import { formatDate, formatCurrency } from './utils/helpers';
// Named imports — utility functions

import styles from './App.module.css';
// Default import — CSS module object, styles.className

import axios from 'axios';
// Default import — third party library
```

---

### Q12. What is the difference between these two React exports?

```js
// Option 1
export default function App() {}

// Option 2
function App() {}
export { App };
export default App;
```

**Answer:**

```js
// Option 1 — only default export
export default function App() {}
// import App from './App'; // only this works

// Option 2 — both default and named export
function App() {}
export { App };     // named export
export default App; // default export

// Can import both ways
import App from './App';         // default
import { App } from './App';     // named
```

Option 2 is useful when you want to use the component both as a default import (most common) and as a named import (for testing, or barrel files).

---

### Q13. How does React.lazy use dynamic imports?

**Answer:**

`React.lazy` accepts a function that returns a dynamic import — enabling component-level code splitting.

```js
import React, { Suspense } from 'react';

// Lazy load — component only loaded when needed
const HeavyDashboard = React.lazy(() => import('./HeavyDashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyDashboard />
    </Suspense>
  );
}
```

`React.lazy` expects the import to resolve to a module with a default export. `Suspense` shows fallback while the component loads.

Result: smaller initial bundle, faster first page load.

---

### Q14. What happens if you forget to export a component?

**Answer:**

```js
// UserCard.js — forgot to export
function UserCard({ name }) {
  return name;
}
// No export statement

// App.js
import UserCard from './UserCard'; // imports undefined
// <UserCard name="Shivesh" /> — TypeError or nothing renders
```

Common error messages:
- `Element type is invalid` — imported undefined
- `does not provide an export named 'default'` — no default export

Always check your export statement when you see these errors.

---

### Q15. What is the correct way to re-export a default export as a named export?

**Answer:**

```js
// Button.jsx
export default function Button() {}

// components/index.js — re-export as named
export { default as Button } from './Button';
// This makes Button available as named export

// Usage
import { Button } from './components'; // works!
```

The `{ default as Button }` syntax takes the default export and re-exports it as a named export called `Button`. This is the standard barrel file pattern in React projects.

---

> Try solving these without looking at answers first.
> Full code on GitHub → [js-to-react-30days](https://github.com/shiveshd007/js-to-react-30days)