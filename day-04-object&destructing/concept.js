// ====================================
// JS to React - 30 Days
// Day 04 - Objects & Destructuring
// ====================================


// ====================================
// PART 1 - WHAT IS AN OBJECT
// ====================================

// Object ek collection hai key-value pairs ka
// Real world cheez ko represent karta hai

const user = {
  name: "Shivesh",
  age: 23,
  role: "Frontend Dev",
  active: true,
  address: {
    city: "Bhopal",
    state: "MP"
  }
};

// Keys = property names
// Values = kuch bhi ho sakta hai — string, number, boolean, array, object, function

// Object with method
const developer = {
  name: "Shivesh",
  skills: ["JS", "React", "TypeScript"],
  greet() {
    return "Hi, I am " + this.name;
  }
};

console.log(developer.greet()); // "Hi, I am Shivesh"


// ====================================
// PART 2 - ACCESSING OBJECT VALUES
// ====================================

const profile = {
  name: "Shivesh",
  age: 23,
  "current role": "Frontend Dev", // key with space
  address: {
    city: "Bhopal",
    pincode: 462001
  }
};

// --- Dot notation ---
console.log(profile.name);  // "Shivesh"
console.log(profile.age);   // 23

// --- Bracket notation ---
console.log(profile["name"]);         // "Shivesh"
console.log(profile["current role"]); // "Frontend Dev" — dot notation fails here

// Dynamic key access — only possible with brackets
const key = "name";
console.log(profile[key]); // "Shivesh"
console.log(profile.key);  // undefined — looks for key named "key"

// --- Nested access ---
console.log(profile.address.city);      // "Bhopal"
console.log(profile["address"]["city"]); // "Bhopal"

// --- Optional chaining (ES2020) ---
// Safe access — no error if property doesn't exist
console.log(profile.address?.city);     // "Bhopal"
console.log(profile.social?.twitter);   // undefined — no error
console.log(profile.social?.twitter?.handle); // undefined — chained safe access

// Without optional chaining — this would throw error
// console.log(profile.social.twitter); // TypeError: Cannot read properties of undefined


// ====================================
// PART 3 - DESTRUCTURING
// ====================================

const person = {
  name: "Shivesh",
  age: 23,
  city: "Bhopal",
  role: "Frontend Dev"
};

// Without destructuring — verbose
const name1 = person.name;
const age1 = person.age;
const city1 = person.city;

// With destructuring — clean
const { name, age, city } = person;
console.log(name); // "Shivesh"
console.log(age);  // 23
console.log(city); // "Bhopal"

// --- Rename while destructuring ---
const { name: userName, role: userRole } = person;
console.log(userName); // "Shivesh"
console.log(userRole); // "Frontend Dev"

// --- Default values ---
const { name: devName, experience = 2 } = person;
console.log(devName);    // "Shivesh"
console.log(experience); // 2 — default used, not in object

// --- Nested destructuring ---
const employee = {
  name: "Shivesh",
  address: {
    city: "Bhopal",
    state: "MP"
  }
};

const { name: empName, address: { city: empCity } } = employee;
console.log(empName); // "Shivesh"
console.log(empCity); // "Bhopal"

// --- Partial destructuring ---
// You don't have to destructure everything
const { name: n } = person; // only name
console.log(n); // "Shivesh"


// ====================================
// PART 4 - OBJECTS IN FUNCTIONS
// ====================================

const userData = {
  name: "Shivesh",
  age: 23,
  role: "Frontend Dev"
};

// Approach 1 — pass whole object, access inside
function displayUser1(user) {
  console.log(user.name);
  console.log(user.role);
}
displayUser1(userData);

// Approach 2 — destructure inside function body
function displayUser2(user) {
  const { name, role } = user;
  console.log(name);
  console.log(role);
}
displayUser2(userData);

// Approach 3 — destructure in parameter (cleanest)
function displayUser3({ name, role }) {
  console.log(name);
  console.log(role);
}
displayUser3(userData);

// Approach 3 with default values
function displayUser4({ name, role = "Developer", experience = 0 }) {
  console.log(name, role, experience);
}
displayUser4({ name: "Shivesh" }); // "Shivesh Developer 0"


// ====================================
// PART 5 - REACT PROPS CONNECTION
// ====================================

// React props are just objects
// Every component receives props as an object

// What React does internally
// <Card title="Hello" description="World" />
// React calls: Card({ title: "Hello", description: "World" })

// Without destructuring — verbose
function Card1(props) {
  return props.title + " — " + props.description;
}

// With destructuring in parameter — clean
function Card2({ title, description }) {
  return title + " — " + description;
}

// With default props
function Card3({ title = "Untitled", description = "No description" }) {
  return title + " — " + description;
}

Card3({}); // "Untitled — No description"

// This is not React magic
// This is plain JavaScript destructuring
// Once this clicks — React becomes much easier to read


// ====================================
// PART 6 - USEFUL OBJECT METHODS
// ====================================

const config = {
  theme: "dark",
  language: "en",
  notifications: true
};

// Object.keys() — array of keys
console.log(Object.keys(config));
// ["theme", "language", "notifications"]

// Object.values() — array of values
console.log(Object.values(config));
// ["dark", "en", true]

// Object.entries() — array of [key, value] pairs
console.log(Object.entries(config));
// [["theme","dark"], ["language","en"], ["notifications",true]]

// Spread operator — shallow copy
const newConfig = { ...config, theme: "light" };
console.log(newConfig);
// { theme: "light", language: "en", notifications: true }
console.log(config);
// { theme: "dark", ... } — original unchanged

// Merge two objects
const defaults = { theme: "light", fontSize: 16 };
const userPrefs = { theme: "dark", language: "hi" };
const merged = { ...defaults, ...userPrefs };
console.log(merged);
// { theme: "dark", fontSize: 16, language: "hi" }
// userPrefs overrides defaults