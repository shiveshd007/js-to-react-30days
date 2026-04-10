// ====================================
// JS to React - 30 Days
// Day 08 - Exercise: ES6 Modules
// ====================================
// Note: Ye exercises Node.js ya browser ES modules ke saath run honge
// VS Code mein .mjs extension use karo ya package.json mein "type": "module" add karo


// ====================================
// SECTION 1 - DEFAULT EXPORTS
// ====================================

// Q1.
// Ek file banao — greet.js
// Default export: function jo name le aur "Hello, {name}!" return kare
// Dusri file mein import karo aur call karo

// greet.js:
// your code here

// main.js:
// your code here


// Q2.
// Default import karte waqt naam badal sakte hain?
// Example likho

// your code here + answer (comment mein):


// Q3.
// Ye code valid hai ya nahi? Kyun?

// file1.js
export default function hello() { return "Hello"; }
export default function world() { return "World"; } // valid?

// your answer (comment mein):


// ====================================
// SECTION 2 - NAMED EXPORTS
// ====================================

// Q4.
// utils.js file banao — ye sab named export karo:
// - PI constant (3.14159)
// - add(a, b) function
// - subtract(a, b) function
// - multiply(a, b) function

// utils.js:
// your code here

// main.js — sirf add aur PI import karo:
// your code here


// Q5.
// Named import ko rename karo — alias use karo

// import { formatDate } from './utils';
// formatDate ko fd naam se import karo

// your code here


// Q6.
// Saari named exports ek saath import karo — * use karo
// Phir use karo

// your code here


// Q7.
// Ye dono import mein kya difference hai?

import UserCard from './UserCard';
import { UserCard } from './UserCard';

// your answer (comment mein):


// ====================================
// SECTION 3 - DEFAULT + NAMED TOGETHER
// ====================================

// Q8.
// api.js file banao:
// Default export: fetchData(url) async function
// Named exports: BASE_URL constant, API_KEY constant

// api.js:
// your code here

// main.js — dono import karo:
// your code here


// Q9.
// Ye import statement sahi hai ya galat? Kyun?

import { default as MyComponent }, { helper } from './module';

// your answer (comment mein):
// Sahi tarika kya hoga?


// Q10.
// Ek file mein kitne default exports ho sakte hain?
// Kitne named exports ho sakte hain?

// your answer (comment mein):


// ====================================
// SECTION 4 - BARREL FILES
// ====================================

// Q11.
// Ye folder structure hai:
// components/
//   Button.js — default export: Button component
//   Input.js  — default export: Input component
//   Modal.js  — default export: Modal component

// components/index.js banana — barrel file
// Taaki ye kaam kare:
// import { Button, Input, Modal } from './components';

// index.js:
// your code here


// Q12.
// Barrel file ke kya fayde hain?
// Kya koi nuksan bhi hai?

// your answer (comment mein):


// ====================================
// SECTION 5 - REACT PATTERNS
// ====================================

// Q13.
// Ye React imports dekho — har line explain karo

import React from 'react';
import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import { Button, Input } from './components';
import { formatDate } from './utils/helpers';
import styles from './App.module.css';

// your answer (comment mein — line by line):


// Q14.
// React component banao — export karo
// Dono tarike se — default aur named

// your code here


// Q15.
// Ye React project structure hai:
// src/
//   components/
//     Header.jsx
//     Footer.jsx
//     Button.jsx
//   pages/
//     Home.jsx
//     About.jsx
//   utils/
//     api.js
//     helpers.js
//   App.jsx

// App.jsx mein Header, Home, aur api.js ka fetchData import karo

// your code here


// ====================================
// SECTION 6 - DYNAMIC IMPORTS
// ====================================

// Q16.
// Static import aur dynamic import mein kya difference hai?

// your answer (comment mein):


// Q17.
// Dynamic import use karke HeavyComponent ko lazily load karo
// Button click pe load ho

async function loadOnClick() {
  // your code here
}


// Q18.
// React.lazy aur dynamic import ka connection explain karo

// const LazyComponent = React.lazy(() => import('./HeavyComponent'));
// Ye andar kaise kaam karta hai?

// your answer (comment mein):


// ====================================
// BONUS
// ====================================

// Q19.
// CommonJS (require) vs ES6 Modules (import) — kya difference hai?

// CommonJS:
// const express = require('express');
// module.exports = { hello };

// ES6:
// import express from 'express';
// export { hello };

// your answer — 3 key differences (comment mein):


// Q20.
// Ye error kyun aata hai? Fix karo

// utils.js
const helper = () => "help";

// main.js
import { helper } from './utils'; // Error!

// your answer + fix (comment mein):