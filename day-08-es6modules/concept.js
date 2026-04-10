// ====================================
// JS to React - 30 Days
// Day 08 - ES6 Modules
// ====================================


// ====================================
// PART 1 - WHY MODULES EXIST
// ====================================

// Pehle JavaScript mein koi module system nahi tha
// Sab code ek hi file mein hota tha — ya multiple script tags

// Problem:
// <script src="utils.js"></script>
// <script src="app.js"></script>
// Sab variables global scope mein — naming conflicts
// Order matter karta tha — dependency hell

// Solution — ES6 Modules (2015)
// Har file apna scope rakhti hai
// Explicitly export karo jo share karna hai
// Explicitly import karo jo chahiye

// Benefits:
// 1. Code organization — related code ek jagah
// 2. Reusability — ek baar likho, kahin bhi use karo
// 3. No global pollution — variables apne scope mein
// 4. Clear dependencies — kya kahan se aa raha hai


// ====================================
// PART 2 - DEFAULT EXPORT
// ====================================

// Default export — ek file mein sirf EK default export
// Import karte waqt koi bhi naam de sakte ho

// --- UserCard.js ---
function UserCard({ name, role }) {
  return `${name} — ${role}`;
}

export default UserCard;

// --- Alternative syntax ---
export default function UserCard({ name, role }) {
  return `${name} — ${role}`;
}

// --- Importing default export ---
import UserCard from './UserCard';        // original name
import Card from './UserCard';            // different name — works!
import AnyNameYouWant from './UserCard';  // any name — works!

// Default export = main thing a file provides
// Components, classes, functions — usually default export


// ====================================
// PART 3 - NAMED EXPORTS
// ====================================

// Named exports — ek file mein MULTIPLE named exports
// Import karte waqt exact same naam use karna padta hai

// --- utils.js ---
export const API_URL = "https://api.example.com";
export const MAX_RETRIES = 3;

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function formatCurrency(amount) {
  return `₹${amount.toLocaleString()}`;
}

// --- Alternative — export at bottom ---
const BASE_URL = "https://api.example.com";
const TIMEOUT = 5000;

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

export { BASE_URL, TIMEOUT, debounce };

// --- Importing named exports ---
import { API_URL, formatDate } from './utils';           // specific imports
import { API_URL, formatDate, formatCurrency } from './utils'; // multiple
import { formatDate as fd } from './utils';              // rename with alias
import * as utils from './utils';                        // import everything
// utils.API_URL, utils.formatDate() etc


// ====================================
// PART 4 - DEFAULT + NAMED TOGETHER
// ====================================

// One file can have both default and named exports

// --- api.js ---
export default async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}

export const BASE_URL = "https://api.example.com";
export const API_VERSION = "v1";

// --- Importing both ---
import fetchUser, { BASE_URL, API_VERSION } from './api';
// fetchUser = default, BASE_URL and API_VERSION = named


// ====================================
// PART 5 - RE-EXPORTS & BARREL FILES
// ====================================

// Barrel file = index.js jo multiple modules ko ek jagah se export kare
// Common pattern in React projects

// --- components/Button.jsx ---
export default function Button() {}

// --- components/Input.jsx ---
export default function Input() {}

// --- components/Card.jsx ---
export default function Card() {}

// Without barrel file — multiple imports
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

// --- components/index.js (barrel file) ---
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';

// With barrel file — clean single import
import { Button, Input, Card } from './components';


// ====================================
// PART 6 - DYNAMIC IMPORTS
// ====================================

// Static imports — always loaded at start
import HeavyComponent from './HeavyComponent'; // loaded immediately

// Dynamic imports — loaded on demand (code splitting)
async function loadComponent() {
  const module = await import('./HeavyComponent');
  const HeavyComponent = module.default;
  // use component
}

// React.lazy uses dynamic imports
// const LazyComponent = React.lazy(() => import('./HeavyComponent'));

// Benefits:
// Smaller initial bundle size
// Faster page load
// Load components only when needed


// ====================================
// PART 7 - REACT CONNECTION
// ====================================

// Every React file uses ES6 modules

// Importing React and hooks
import React from 'react';
import { useState, useEffect, useRef } from 'react';

// Importing components
import Header from './components/Header';
import { Button, Input } from './components';

// Importing utilities
import { formatDate, formatCurrency } from './utils';
import { API_URL } from './constants';

// Importing styles
import './styles/App.css';
import styles from './App.module.css'; // CSS modules

// Importing third party
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

// Exporting your component
function App() {
  return <div>App</div>;
}

export default App; // main export
export { App };     // also as named

// Understanding imports/exports =
// Understanding how React project is structured
// Every component, hook, utility follows this pattern