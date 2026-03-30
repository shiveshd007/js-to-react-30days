// ====================================
// JS to React - 30 Days
// Day 04 - Exercise: Objects & Destructuring
// ====================================
// Solve karo, phir concept.js se compare karo


// ====================================
// SECTION 1 - OBJECTS BASICS
// ====================================

// Q1.
// Apna ek object banao — name, age, city, role, skills (array)
// Sab values apni real info se

// your code here


// Q2.
// Ye code kya output dega? Kyun?

const obj = { name: "Shivesh", "current job": "Frontend Dev" };
console.log(obj.name);
console.log(obj["current job"]);
console.log(obj.current job);

// your answer (comment mein):


// Q3.
// Dynamic key access — kya output aayega?

const key = "role";
const dev = { name: "Shivesh", role: "Developer" };

console.log(dev[key]);
console.log(dev.key);

// your answer (comment mein):


// ====================================
// SECTION 2 - ACCESSING VALUES
// ====================================

// Q4.
// Nested object se city access karo — 3 tarike se
// dot notation, bracket notation, optional chaining

const profile = {
  name: "Shivesh",
  address: {
    city: "Bhopal",
    state: "MP"
  }
};

// your code here


// Q5.
// Ye code error dega ya undefined? Kyun?

const user = { name: "Shivesh" };
console.log(user.address.city);

// your answer (comment mein):
// Fix karo — optional chaining use karke


// Q6.
// Optional chaining use karke safely access karo
// user ka twitter handle — even if social doesn't exist

const person = {
  name: "Shivesh",
  contact: {
    email: "shivesh@dev.com"
  }
};

// your code here


// ====================================
// SECTION 3 - DESTRUCTURING
// ====================================

// Q7.
// Destructure karo — name, age, role

const developer = {
  name: "Shivesh",
  age: 23,
  role: "Frontend Dev",
  city: "Bhopal"
};

// your code here


// Q8.
// Destructure karo aur rename bhi karo
// name → devName, role → devRole

// your code here


// Q9.
// Default value ke saath destructure karo
// experience exist nahi karta — default 0 rakho

const dev = { name: "Shivesh", role: "Frontend Dev" };

// your code here


// Q10.
// Nested destructuring — city directly nikalo

const employee = {
  name: "Shivesh",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
};

// your code here


// Q11.
// Ye code kya output dega?

const { a = 10, b = 20 } = { a: 5 };
console.log(a);
console.log(b);

// your answer (comment mein):


// ====================================
// SECTION 4 - OBJECTS IN FUNCTIONS
// ====================================

// Q12.
// Teen tarike se function likho jo user ka name aur role print kare
// 1. Whole object pass karo
// 2. Destructure inside body
// 3. Destructure in parameter

const userData = {
  name: "Shivesh",
  role: "Frontend Dev",
  age: 23
};

// your code here


// Q13.
// Default values ke saath function banao
// Agar role nahi diya toh "Developer" use kare
// Agar experience nahi diya toh 0 use kare

// your code here


// Q14.
// Ye React jaisa pattern hai — function ko call karo
// aur output dekho

function UserCard({ name, role = "Developer", active = true }) {
  return name + " | " + role + " | Active: " + active;
}

console.log(UserCard({ name: "Shivesh", role: "Frontend Dev" }));
console.log(UserCard({ name: "Rahul" }));
console.log(UserCard({ name: "Priya", active: false }));

// your answer (comment mein):


// ====================================
// SECTION 5 - OBJECT METHODS
// ====================================

// Q15.
// Object.keys(), Object.values(), Object.entries() use karo

const config = {
  theme: "dark",
  language: "en",
  fontSize: 16
};

// Keys print karo
// your code here

// Values print karo
// your code here

// Entries print karo
// your code here


// Q16.
// Spread operator use karke — original mutate kiye bina
// theme ko "light" se update karo

// your code here


// Q17.
// Do objects merge karo — spread use karke
// userPrefs ki values defaults ko override karein

const defaults = { theme: "light", fontSize: 16, language: "en" };
const userPrefs = { theme: "dark", language: "hi" };

// your code here
// Expected: { theme: "dark", fontSize: 16, language: "hi" }


// ====================================
// BONUS
// ====================================

// Q18.
// Array of objects hai — destructuring use karke
// har user ka name aur role print karo

const team = [
  { name: "Shivesh", role: "Frontend Dev" },
  { name: "Rahul", role: "Backend Dev" },
  { name: "Priya", role: "Designer" },
];

// your code here


// Q19.
// Ye React props pattern hai
// Function ko teen baar call karo — different props ke saath

function ProfileCard({ name, role = "Developer", followers = 0 }) {
  return name + " | " + role + " | Followers: " + followers;
}

// Call 1 — name: "Shivesh", role: "Frontend Dev", followers: 1000
// Call 2 — name: "Rahul" (baaki default)
// Call 3 — name: "Priya", followers: 500

// your code here


// Q20.
// Ek function banao — updateUser
// Original user object mutate kiye bina
// sirf role update kare — spread use karke

const originalUser = {
  name: "Shivesh",
  role: "Junior Dev",
  age: 23
};

// your code here
// Expected: new object with role: "Senior Dev", rest same
// originalUser unchanged