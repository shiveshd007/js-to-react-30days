// ====================================
// JS to React - 30 Days
// Day 06 - Exercise: Promises & Async/Await
// ====================================
// Solve karo, phir concept.js se compare karo


// ====================================
// SECTION 1 - PROMISES BASICS
// ====================================

// Q1.
// Ek Promise banao jo 2 seconds baad
// "Data loaded!" ke saath resolve ho

// your code here


// Q2.
// Ek Promise banao jo reject kare
// "Something went wrong!" error ke saath
// .catch() se handle karo

// your code here


// Q3.
// Ye code kya output dega? Kyun?

const p = new Promise((resolve, reject) => {
  resolve("Success");
  reject("Error"); // kya ye chalega?
});

p.then(val => console.log(val))
 .catch(err => console.log(err));

// your answer (comment mein):


// Q4.
// Promise ki 3 states kya hain?
// Har state ka ek real world example do

// your answer (comment mein):


// ====================================
// SECTION 2 - .then() .catch() .finally()
// ====================================

// Q5.
// Niche diya Promise use karo
// .then() se name print karo
// .catch() se error handle karo
// .finally() se "Done" print karo

const userPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Shivesh", role: "Frontend Dev" });
  }, 1000);
});

// your code here


// Q6.
// .then() chain karo — pehle user lo, phir uska role lo

const getUser = new Promise((resolve) => {
  resolve({ name: "Shivesh", role: "Frontend Dev", exp: 2 });
});

// Chain: name print karo → phir role print karo → phir exp print karo

// your code here


// Q7.
// Ye code kya output dega?

Promise.resolve(1)
  .then(val => val + 1)
  .then(val => val * 2)
  .then(val => console.log(val));

// your answer (comment mein):


// Q8.
// .finally() kab use karna chahiye?
// Ek real world example do

// your answer (comment mein):


// ====================================
// SECTION 3 - ASYNC/AWAIT
// ====================================

// Q9.
// Is .then() chain ko async/await mein convert karo

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log(data.name))
  .catch(error => console.log(error));

// your code here — async function banao


// Q10.
// async/await ke saath try/catch/finally use karo
// https://jsonplaceholder.typicode.com/posts/1 se data fetch karo
// title print karo

// your code here


// Q11.
// Ye code kya output dega? Kyun?

async function test() {
  return "Hello";
}

const result = test();
console.log(result);

// your answer (comment mein):


// Q12.
// await bina async function ke use karo — kya hoga?

// async function getUser() {
//   const data = await fetch("...");
// }

// const data = await fetch("..."); // kya ye kaam karega?

// your answer (comment mein):


// ====================================
// SECTION 4 - PROMISE METHODS
// ====================================

// Q13.
// Promise.all use karo — teeno resolve ho toh result print karo

const p1 = Promise.resolve("User data");
const p2 = Promise.resolve("Posts data");
const p3 = Promise.resolve("Comments data");

// your code here


// Q14.
// Promise.all vs Promise.allSettled — kya difference hai?
// Ek reject ho toh kya hoga dono mein?

const success = Promise.resolve("Success");
const failure = Promise.reject("Failure");

// Promise.all ke saath try karo
// Promise.allSettled ke saath try karo

// your code here + answer (comment mein):


// Q15.
// Promise.race use karo
// Jo pehle resolve ho uska result print karo

const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 3000));
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

// your code here


// ====================================
// SECTION 5 - REACT PATTERN
// ====================================

// Q16.
// Ye React jaisa pattern hai
// async function banao jo users fetch kare
// loading, error, data — teeno handle karo

async function fetchUsers() {
  let loading = true;
  let error = null;
  let data = null;

  try {
    // fetch karo: https://jsonplaceholder.typicode.com/users
    // data mein store karo
  } catch (err) {
    // error mein store karo
  } finally {
    // loading false karo
  }

  console.log({ loading, error, data });
}

fetchUsers();

// your code here — fill in the blanks


// Q17.
// Kyun useEffect mein directly async function nahi daal sakte?

// useEffect(async () => { // wrong
//   const data = await fetch("...");
// }, []);

// Sahi tarika kya hai?

// your answer (comment mein):


// ====================================
// BONUS
// ====================================

// Q18.
// Promise banao jo randomly resolve ya reject kare
// 50% chance success, 50% chance failure
// .then() aur .catch() dono handle karo

// your code here


// Q19.
// Callback hell ko Promise chain mein convert karo

// Callback hell version:
// getUser(1, function(user) {
//   getPosts(user.id, function(posts) {
//     getComments(posts[0].id, function(comments) {
//       console.log(comments);
//     });
//   });
// });

// Promise chain version banao:
// your code here


// Q20.
// async/await ke saath multiple API calls karo
// Pehle user fetch karo — phir uske posts fetch karo
// Dono ke liye jsonplaceholder use karo

async function getUserAndPosts() {
  // Step 1: fetch user from /users/1
  // Step 2: fetch posts from /posts?userId=1
  // Step 3: print user.name and posts.length
}

// your code here